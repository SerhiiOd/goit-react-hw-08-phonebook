import { LoginForm } from 'components/LoginForm/LoginForm';
import { Title } from './Login.styled';

export const Login = () => {
  return (
    <main>
      <Title>Log in</Title>
      <LoginForm />
    </main>
  );
};

export default Login;
