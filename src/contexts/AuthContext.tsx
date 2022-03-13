import { createContext, FC, useEffect, useState } from 'react';
import { signIn } from 'services/authServices';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/router';
import { NextResponse } from 'next/server';
import baseApi from 'services/baseApi';
import { User } from '../types/user';
import {
  COOKIE_AUTH_TOKEN,
  COOKIE_REFRESH_TOKEN,
  COOKIE_USER_KEY,
} from '../constants';

interface IAuthContext {
  user?: User;
  requesting: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>;
  clearCookies: () => void;
}

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: FC = ({ children }) => {
  const [requesting, setRequesting] = useState(false);

  const [user, setUser] = useState<User>();

  const [cookie, setCookie, removeCookie] = useCookies([
    COOKIE_USER_KEY,
    COOKIE_AUTH_TOKEN,
    COOKIE_REFRESH_TOKEN,
  ]);

  const cookieConfig = {
    path: '/',
    maxAge: 3600,
    sameSite: true,
  };

  const { push } = useRouter();

  useEffect(() => {
    setUser(cookie[COOKIE_USER_KEY]);
  }, [cookie]);

  async function login(email: string, password: string) {
    let success = false;
    try {
      setRequesting(true);
      const { data, headers, status } = await signIn(email, password);
      setRequesting(false);
      if (status === 200) {
        success = true;
        setCookie(COOKIE_AUTH_TOKEN, headers.authorization, cookieConfig);
        setCookie(COOKIE_REFRESH_TOKEN, headers['refresh-token'], cookieConfig);
        setCookie(COOKIE_USER_KEY, JSON.stringify(data as User), cookieConfig);
        await push('/');
      }
      return success;
    } catch (error) {
      setRequesting(false);
      return success;
    }
  }

  function clearCookies() {
    removeCookie(COOKIE_AUTH_TOKEN);
    removeCookie(COOKIE_REFRESH_TOKEN);
    removeCookie(COOKIE_USER_KEY);
  }

  async function logout() {
    clearCookies();
    await push('/login');
  }

  return (
    <AuthContext.Provider
      value={{ requesting, user, login, logout, clearCookies }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
