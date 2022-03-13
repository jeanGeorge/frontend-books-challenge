import { Wrapper, Form, FormRow, FormHeader } from 'styles/pages/login';
import { useForm } from 'react-hook-form';

import { Input, ToolTip, Button, Logo } from 'components';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useState } from 'react';
import { parseCookies } from 'utils';
import { GetServerSideProps } from 'next';
import { COOKIE_AUTH_TOKEN } from '../../constants';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, requesting } = useAuth();

  const [errorOnSubmit, setErrorOnSubmit] = useState(false);

  const emailRegister = {
    ...register('email', {
      required: 'required',
      pattern: {
        value: /\S+@\S+\.\S+/,
        message: 'Entered value does not match email format',
      },
    }),
  };

  const passwordRegister = {
    ...register('password', { required: 'required' }),
  };

  useEffect(() => {
    if (requesting) {
      setErrorOnSubmit(false);
    }
  }, [requesting]);

  async function submit(data) {
    const { email, password } = data;
    const logged = await login(email, password);
    setErrorOnSubmit(!logged);
  }

  return (
    <form autoComplete="off" onSubmit={handleSubmit(submit)}>
      <Wrapper>
        <Form>
          <FormHeader>
            <Logo fill="#FFFFFF" />
          </FormHeader>
          <FormRow>
            <Input
              id="email"
              type="text"
              label="Email"
              register={emailRegister}
            />
          </FormRow>
          <FormRow>
            <Input
              id="password"
              type="password"
              label="Senha"
              register={passwordRegister}
            />
            <Button type="submit" disabled={requesting}>
              Entrar
            </Button>
          </FormRow>
          <ToolTip
            active={errors.email || errors.password || errorOnSubmit}
            text="Email e/ou senha incorretos."
          />
        </Form>
      </Wrapper>
    </form>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const cookies = parseCookies(req);
  const token = cookies[`${COOKIE_AUTH_TOKEN}`];

  if (token) {
    return {
      redirect: {
        destination: '/',
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};

export default Login;
