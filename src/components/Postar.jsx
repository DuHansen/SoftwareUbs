import { onAuthStateChanged } from "firebase/auth";
import { push, ref, set } from "firebase/database";
import moment from 'moment-timezone';
import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { auth, database } from '../config/firebase'; // Importe as instâncias de auth e database
export default function FormPostar() {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");

  async function handlePostar(event) {
    event.preventDefault();
    const data = moment().tz("America/Sao_Paulo").format();
  
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        const postagensRef = ref(database, 'postagens/' + userId);
        const novaPostagemRef = push(postagensRef);
        set(novaPostagemRef, {
          titulo: titulo,
          conteudo: conteudo,
          data: data,
          postId: novaPostagemRef.key // Aqui estamos usando a chave gerada pelo push como postId
        })
        .then(() => {
          alert('Postagem criada com sucesso!');
          setTitulo("");
          setConteudo("");
        })
        .catch((error) => {
          console.error("Erro ao criar postagem: ", error);
        });
      }
    });
  }
  

  return (
    <Container>
      <Form onSubmit={handlePostar}>
        <Form.Group as={Col} controlId="formGridTitulo">
          <Form.Label>Título</Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite o título da postagem"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridConteudo">
          <Form.Label>Conteúdo</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="O que você está pensando?"
            value={conteudo}
            onChange={(e) => setConteudo(e.target.value)}
          />
        </Form.Group>
        <Row className="justify-content-md-center">
          <Button variant="primary" type="submit">
            Postar
          </Button>
        </Row>
      </Form>
    </Container>
  );
}
