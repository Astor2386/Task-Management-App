import { Nav, Navbar } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar: React.FC = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>Task Manager</Navbar.Brand>
      <Nav className='me-auto'>
        <Nav.Link href='/'>Home</Nav.Link>
        {isAuthenticated && (
          <>
            <Nav.Link href='/dashboard'>Dashboard</Nav.Link>
            <Nav.Link href='/create'>Create Task</Nav.Link>
          </>
        )}
      </Nav>
    </Navbar>
  );
};

export default NavBar;