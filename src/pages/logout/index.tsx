import { useAuth } from 'hooks/useAuth';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';

const Logout = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  }, []);

  return null;
};

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/',
    },
    props: {},
  };
};

export default Logout;
