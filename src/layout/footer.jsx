import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css'; // Certifique-se de que seu CSS está importado corretamente

export default function Footer() {
  return (
    <Navbar style={{padding: "0"}} className="footer-navbar fixed-bottom">
      <Container>
        <Nav className="mx-auto">
          <Nav.Link 
            style={{ color: "#ffffff", fontSize: "15px" }} 
            as={Link} 
            to="/conversas"
          >
            Conversas
          </Nav.Link>
          <Nav.Link 
            style={{ color: "#ffffff", fontSize: "15px" }} 
            as={Link} 
            to="/abertos"
          >
            Chamados
          </Nav.Link>
          <Nav.Link 
            style={{ color: "#ffffff", fontSize: "15px" }} 
            as={Link} 
            to="/favoritas"
          >
            Favoritas
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
