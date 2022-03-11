import { createContext, FC, useState } from 'react';
import { User } from '../types/User';

interface IAuthContext {
  token: string;
  refreshToken: string;
  user?: User;
  login: () => boolean;
  logout: () => boolean;
}

const DEFAULT_VALUE: IAuthContext = {
  token: '',
  refreshToken: '',
  login: () => true,
  logout: () => true,
};

const AuthContext = createContext<IAuthContext>(DEFAULT_VALUE);

const AuthProvider: FC = ({ children }) => {
  const [token, setToken] = useState('');
  const [refreshToken, setRefreshToken] = useState('');
  const [user, setUser] = useState<User>();

  function login() {
    return true;
  }

  function logout() {
    return true;
  }

  return (
    <AuthContext.Provider value={(token, refreshToken, user, login, logout)}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
