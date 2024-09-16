import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap'; // Importando componentes do react-bootstrap
import { BiConversation } from "react-icons/bi";
import { TfiAgenda } from "react-icons/tfi";
import { Link } from 'react-router-dom'; // Importa o Link para navegação
import img from "../../img/logo-whatsapp-sem-fundo 1.png";

export default function Layout() {
  return (
    <div style={{ backgroundColor: "#010317" }}>
      <Container className="d-flex flex-column align-items-center justify-content-center min-vh-100">
        <Row className="w-100 mb-4 justify-content-center">
          {/* Primeiro cartão */}
          <Col lg={6} md={12} className="mb-4">
            <Link to="/conversas" className="text-decoration-none">
              <Card className="d-flex h-100 text-white cursor-pointer shadow-lg transition-colors" style={{ background: "orange", border: "none" }}>
                <Card.Body className="d-flex align-items-center justify-content-center h-100">
                  <div className="d-flex align-items-center">
                    <BiConversation className="me-2" style={{ fontSize: '2rem' }} />
                    <span className="font-weight-bold">Conversas</span>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
          {/* Segundo cartão */}
          <Col lg={6} md={12} className="mb-4">
            <Link to="/agenda" className="text-decoration-none">
              <Card className="d-flex h-100 text-white cursor-pointer shadow-lg transition-colors" style={{ background: "pink", border: "none" }}>
                <Card.Body className="d-flex align-items-center justify-content-center h-100">
                  <div className="d-flex align-items-center">
                    <TfiAgenda className="me-2" style={{ fontSize: '2rem' }} />
                    <span className="font-weight-bold">Agenda</span>
                  </div>
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
        <Row className="w-100 justify-content-center">
          {/* Terceiro cartão */}
          <Col lg={12} md={12}>
            <Link to="/qrcode" className="text-decoration-none">
              <Card className="d-flex h-100 text-white cursor-pointer shadow-lg transition-colors" style={{ background: "linear-gradient(to right, green, white)", border: "none" }}>
                <Card.Body className="d-flex align-items-center justify-content-between h-100">
                  <span className="font-weight-bold">Conectar ao WhatsApp</span>
                  <img src={img} alt="Logo do WhatsApp" style={{ height: '60px' }} />
                </Card.Body>
              </Card>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
