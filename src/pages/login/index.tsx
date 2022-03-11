import Input from 'components/Input/Input';
import { Form, Wrapper } from 'styles/pages/login';

const Login = () => {
  return (
    <Wrapper>
      <Form>
        <Input
          id="email"
          type="text"
          label="Email"
          placeholder="Insira o Email"
        />
        <Input
          id="password"
          type="password"
          label="Senha"
          placeholder="Insira a Senha"
        />
      </Form>
    </Wrapper>
  );
};

export default Login;
