import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../App.css'; 
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <Navbar className="footer-navbar fixed-bottom">
      <Container>
        <Nav className="mx-auto">
        <Nav.Link style={{ color: "#ffffff", fontSize: "20px", justifyContent: "center", alignItems: "center" }} as={Link} to="/conversas">Conversas</Nav.Link>
          <Nav.Link style={{ color: "#ffffff", fontSize: "20px" }} as={Link} to="/abertos">Chamados</Nav.Link>
          <Nav.Link style={{ color: "#ffffff", fontSize: "20px" }} as={Link} to="/favoritas">Favoritas</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}



export default Footer;
