import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Title } from 'pages/Login/Login.styled';

export const Register = () => {
  return (
    <main>
      <Title>Create new account</Title>
      <RegisterForm />
    </main>
  );
};

export default Register;
