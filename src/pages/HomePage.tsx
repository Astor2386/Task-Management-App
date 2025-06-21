import { Col, Container } from 'react-bootstrap';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';

const HomePage: React.FC = () => {
  return (
    <Container className='text-center my-5'>
      <Col>
        <h1>Welcome to Task Manager</h1>
        <p>Manage your tasks efficiently with our TypeScript-powered app.</p>
        <LoginButton />
        <LogoutButton />
      </Col>
    </Container>
  );
};

export default HomePage;