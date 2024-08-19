import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { auth } from "../config/firebase";

export default function FormLogin() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate(); 

  async function handlerLogin(event){
    event.preventDefault();
  
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, senha);
      const usuarioLogado = userCredential.user;
      if (usuarioLogado.uid) {
        sessionStorage.setItem('uid', usuarioLogado.uid);
        alert('Usuário logado');
        navigate('/principal');
      } 
      
      setEmail("");
      setSenha("");
    } catch (error) {
      console.error('Erro ao logar', error);
    }
  }
  
  return (
    <Container>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Sua senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </Form.Group>
        <Container className="d-flex justify-content-center">
          <Button variant="primary" type="submit" onClick={handlerLogin}>
            Entrar
          </Button>
        </Container>
      </Form>
    </Container>
  );
}
