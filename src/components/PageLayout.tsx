import { Col, Container } from 'react-bootstrap';
import NavBar from './NavBar';
import NavBarButtons from './NavBarButtons';

type PageLayoutProps = {
  children?: React.ReactNode;
};

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  return (
    <Container className='my-4'>
      <Col>
        <NavBar />
        {children}
        <footer>
          <NavBarButtons />
        </footer>
      </Col>
    </Container>
  );
};

export default PageLayout;