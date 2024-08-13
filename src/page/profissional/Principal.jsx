import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap'; // Importando componentes do react-bootstrap
import { Link } from 'react-router-dom'; // Importa o Link para navegação

export default function Layout() {
  return (
    <Container className="mt-24 flex items-center justify-center min-h-screen">
      <Row >
        {/* Primeiro cartão */}
        <Col lg={6} md={12} className="mb-4">
          <Link to="/pagina1" className="block">
            <Card className="relative h-48 text-white cursor-pointer shadow-lg hover:bg-blue-600 transition-colors" style={{ background: "linear-gradient(to right, blue, white)", border: "2px solid blue" }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400 rounded-full"></div>
              <Card.Body className=" items-center justify-center h-full text-black">
                Conversas
              </Card.Body>
            </Card>
          </Link>
        </Col>
        {/* Segundo cartão */}
        <Col lg={6} md={12} className="mb-4">
          <Link to="/pagina2" className="block">
            <Card className="relative h-48 text-white cursor-pointer shadow-lg hover:bg-pink-600 transition-colors" style={{ background: "linear-gradient(to right, pink, white)", border: "2px solid pink" }}>
              <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-400 rounded-full"></div>
              <Card.Body className="flex items-center justify-center h-full text-black">
                Agenda
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
      <Row className="w-full gap-4">
        {/* Terceiro cartão */}
        <Col lg={12} md={12} className="mb-4">
          <Link to="/pagina3" className="block">
            <Card className="relative h-24 text-white cursor-pointer shadow-lg hover:bg-green-600 transition-colors" style={{ background: "linear-gradient(to right, green, white)", border: "2px solid green" }}>
              <div className="absolute top-0 right-0 w-12 h-12 bg-yellow-400 rounded-full"></div>
              <Card.Body className="flex items-center justify-center h-full text-black">
                WhatsApp
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}
