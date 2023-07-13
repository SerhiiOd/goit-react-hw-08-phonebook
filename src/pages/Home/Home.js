import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { Image } from 'components/Image/Image';
import { Title } from 'pages/Login/Login.styled';
import { Text } from './Home.styled';

export const Home = () => {
  return (
    <>
      <Title>Welcome to your phonebook application!</Title>
      <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ maxWidth: '600px', margin: '0 auto' }}
      >
        <Image name="home.jpg" alt="A man looks at his laptop " w="300" />
        <Text>
          This app allows you to be always close to your contacts. To start
          using it right now, just <b><Link to="/register">create</Link></b> an account, it will not take much time, but you will be sure that you
          already have access to them!
        </Text>
      </Stack>
    </>
  );
};

export default Home;
