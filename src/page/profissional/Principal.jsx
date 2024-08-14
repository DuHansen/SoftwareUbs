import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap'; // Importando componentes do react-bootstrap
import { Link } from 'react-router-dom'; // Importa o Link para navegação
import img from "../../img/logo-whatsapp-sem-fundo 1.png";
import { TfiAgenda } from "react-icons/tfi";
import { BiConversation } from "react-icons/bi";

export default function Layout() {
  return (
    <Container className="mt-24 d-flex flex-column align-items-center min-vh-100">
      <Row className="w-100 mb-4">
        {/* Primeiro cartão */}
        <Col lg={6} md={12} className="mb-4">
          <Link to="/conversas" className="text-decoration-none">
            <Card className="d-flex h-100 text-white cursor-pointer shadow-lg hover:bg-orange-600 transition-colors" style={{ background: "linear-gradient(to right, orange, white)", border: "2px solid orange" }}>
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
            <Card className="d-flex h-100 text-white cursor-pointer shadow-lg hover:bg-pink-600 transition-colors" style={{ background: "linear-gradient(to right, pink, white)", border: "2px solid pink" }}>
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
      <Row className="w-100">
        {/* Terceiro cartão */}
        <Col lg={12} md={12}>
          <Link to="/qrcode" className="text-decoration-none">
            <Card className="d-flex h-100 text-white cursor-pointer shadow-lg hover:bg-green-600 transition-colors" style={{ background: "linear-gradient(to right, green, white)", border: "2px solid green" }}>
              <Card.Body className="d-flex align-items-center justify-between h-100">
                <span className="font-weight-bold">Conectar ao WhatsApp</span>
                <img src={img} alt="Logo do WhatsApp" style={{ height: '60px' }} />
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
