import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';

const Logout = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, []);

  return null;
};

export const getServerSideProps = async () => {
  return {
    redirect: {
      destination: '/login',
    },
  };
};

export default Logout;
