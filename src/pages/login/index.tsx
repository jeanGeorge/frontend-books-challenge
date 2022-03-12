import { Wrapper, Form, FormRow, FormHeader } from 'styles/pages/login';
import { useForm } from 'react-hook-form';

import { Input, ToolTip, Button } from 'components';

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    console.log(errors);
  };

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

  return (
    <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <Wrapper>
        <Form>
          <FormHeader>
            <a href="https://ioasys.com.br/">
              <img alt="Ioasys" src="/images/logo.png" />
            </a>
            <span>Books</span>
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
            <Button type="submit" onClick={onSubmit}>
              Entrar
            </Button>
          </FormRow>
          <ToolTip
            active={errors.email || errors.password}
            text="Email e/ou senha incorretos."
          />
        </Form>
      </Wrapper>
    </form>
  );
};

export default Login;
