import React, { useState } from 'react';
import { Card, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from "../img/Component 5.png";

export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="md" fixed="top" className="custom-navbar" style={{ color: "#ffffff", overflow: 'hidden', background: "#010317"}}>
      <Container style={{alignItems: "center"}}>
        <Navbar.Brand as={Link} to="/">
          <Card style={{ border: 0 }}>
            <img
              width="150"
              height="50"
              src={logo}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Card>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          style={{ color: "#010317", border: "none" }}
          onClick={handleShow}
          className="d-md-none" // Show toggler only on smaller screens
        >
          <div className="container">
            <label htmlFor="label-check" className="hamburger-label">
              <div className="line" style={{ backgroundColor: "#ffffff", height: "2px", width: "25px", marginBottom: "5px" }}></div>
              <div className="line" style={{ backgroundColor: "#ffffff", height: "2px", width: "25px", marginBottom: "5px" }}></div>
              <div className="line" style={{ backgroundColor: "#ffffff", height: "2px", width: "25px", marginBottom: "5px" }}></div>
            </label>
          </div>
        </Navbar.Toggle>
        <Navbar.Offcanvas
          show={show}
          onHide={handleClose}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
          style={{ backgroundColor: "#ffffff", justifyContent: 'center',  color: "black"}}
          className="d-md-none" // Show offcanvas only on smaller screens
        >
          <Offcanvas.Header closeButton style={{ color: "#010317" }}>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Seja bem vindo!
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-column" style={{ background: "#black", fontSize: "20px",  color: "#ffffff"}}>
              <Nav.Link style={{ color: "black", fontSize: "20px", justifyContent: "center" }} as={Link} to="/principal" onClick={handleClose}>Inicial</Nav.Link>
              <Nav.Link style={{ color: "black", fontSize: "20px" }} as={Link} to="/home" onClick={handleClose}>Editar perfil</Nav.Link>
              <Nav.Link style={{ color: "black", fontSize: "20px" }} as={Link} to="/dashboard" onClick={handleClose}>Agenda</Nav.Link>
              <Nav.Link style={{ color: "black", fontSize: "20px" }} as={Link} to="/dashboard" onClick={handleClose}>Registrar mensagem</Nav.Link>
              <Nav.Link style={{ color: "black", fontSize: "20px" }} as={Link} to="/dashboard" onClick={handleClose}>Meus pacientes</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
        <Nav className="d-none d-md-flex flex-column">
          <Nav.Link style={{ color: "#ffffff", fontSize: "20px", justifyContent: "center", alignItems: "center" }} as={Link} to="/principal">Inicial</Nav.Link>
          <Nav.Link style={{ color: "#ffffff", fontSize: "20px" }} as={Link} to="/home">Editar perfil</Nav.Link>
          <Nav.Link style={{ color: "#ffffff", fontSize: "20px" }} as={Link} to="/dashboard">Agenda</Nav.Link>
          <Nav.Link style={{ color: "#ffffff", fontSize: "20px" }} as={Link} to="/dashboard">Registrar mensagem</Nav.Link>
          <Nav.Link style={{ color: "#ffffff", fontSize: "20px" }} as={Link} to="/dashboard">Meus pacientes</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
