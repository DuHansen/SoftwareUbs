import React, { useState } from 'react';
import { Card, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from "../img/Component 5.png";

export default function Header() {
  const [show, setShow] = useState(true); // Inicialmente, o header está visível
  const [offcanvasShow, setOffcanvasShow] = useState(false); // Controle do Offcanvas

  const handleClose = () => setOffcanvasShow(false);
  const handleShow = () => setOffcanvasShow(true);
  const toggleHeaderVisibility = () => setShow(!show); // Alternar a visibilidade do header

  return (
    <>
      {/* Condicionalmente renderiza o Header com base no estado 'show' */}
      {show ? (
        <Navbar expand="md" fixed="top" className="custom-navbar" style={{ color: "#ffffff", background: "#010317" }}>
          <Container>
            <Navbar.Brand>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Card style={{ border: 0 }}>
                  <img
                    width="150"
                    height="50"
                    src={logo}
                    className="d-inline-block align-top"
                    alt="Logo"
                  />
                </Card>
                {/* Botão de fechamento apenas em telas menores */}
                <Card
                  className="d-none d-md-block" // Mostrar apenas em telas pequenas
                  style={{ color: "#fff", backgroundColor: "#010317", justifyContent: "center", padding: "0px 20px", cursor: "pointer", marginLeft: "30px" }}
                  onClick={toggleHeaderVisibility}
                >
                  X
                </Card>
              </div>
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="offcanvasNavbar"
              style={{ color: "#010317", border: "none" }}
              onClick={handleShow}
              className="d-md-none" // Mostrar apenas em telas pequenas
            >
              <div className="container">
                <label htmlFor="label-check" className="hamburger-label">
                  <div className="line" style={{ backgroundColor: "#ffffff", height: "2px", width: "25px", marginBottom: "5px" }}></div>
                  <div className="line" style={{ backgroundColor: "#ffffff", height: "2px", width: "25px", marginBottom: "5px" }}></div>
                  <div className="line" style={{ backgroundColor: "#ffffff", height: "2px", width: "25px" }}></div>
                </label>
              </div>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              show={offcanvasShow}
              onHide={handleClose}
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="end"
              style={{ backgroundColor: "#ffffff", color: "black", width: '250px' }} // Ajustar largura se necessário
              className="d-md-none" // Mostrar apenas em telas pequenas
            >
              <Offcanvas.Header closeButton style={{ color: "#010317" }}>
                <Offcanvas.Title id="offcanvasNavbarLabel">
                  Seja bem-vindo!
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="flex-column" style={{ fontSize: "20px", color: "#000000" }}>
                  <Nav.Link style={{ color: "#000000" }} as={Link} to="/principal" onClick={handleClose}>Inicial</Nav.Link>
                  <Nav.Link style={{ color: "#000000" }} as={Link} to="/perfil">Editar perfil</Nav.Link>
                  <Nav.Link style={{ color: "#000000" }} as={Link} to="/agenda">Agenda</Nav.Link>
                  <Nav.Link style={{ color: "#000000" }} as={Link} to="/conversas">Meus pacientes</Nav.Link>
                  <Nav.Link style={{ color: "#000000" }} as={Link} to="/dashboard">Relatórios</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
            <Nav className="d-none d-md-flex flex-column">
              <Nav.Link style={{ color: "#ffffff", fontSize: "20px" }} as={Link} to="/principal">Inicial</Nav.Link>
              <Nav.Link style={{ color: "#ffffff", fontSize: "20px" }} as={Link} to="/perfil">Editar perfil</Nav.Link>
              <Nav.Link style={{ color: "#ffffff", fontSize: "20px" }} as={Link} to="/agenda">Agenda</Nav.Link>
              <Nav.Link style={{ color: "#ffffff", fontSize: "20px" }} as={Link} to="/conversas">Meus pacientes</Nav.Link>
              <Nav.Link style={{ color: "#ffffff", fontSize: "20px" }} as={Link} to="/dashboard">Relatórios</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      ) : (
     
        <div
          onClick={toggleHeaderVisibility}
          style={{ cursor: 'pointer', position: 'fixed', zIndex: 1000, backgroundColor: "#010317", minHeight: "100vh", padding: 13, width: "50px",justifyContent: "center"  }}
          className="d-none d-md-block fixed-bottom-left"
        >
          <div className="line" style={{ backgroundColor: "#fff", top: '10px', left: '10px', height: "2px", width: "25px", marginBottom: "5px"}}></div>
          <div className="line" style={{ backgroundColor: "#fff", top: '10px', left: '10px', height: "2px", width: "25px", marginBottom: "5px" }}></div>
          <div className="line" style={{ backgroundColor: "#fff", top: '10px', left: '10px', height: "2px", width: "25px" }}></div>
        </div>
   
      
      )}
    </>
  );
}
