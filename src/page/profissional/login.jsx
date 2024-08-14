import { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useNavigate } from "react-router-dom";
import "../../App.css";
import FormLogin from "../../components/FormLogin";
import logo from "../../img/Component 5.png";

export default function Login() {

  const [key, setKey] = useState("login");

  const navigate = useNavigate(); 

  async function handlerVoltar(event){
    event.preventDefault();
  
        navigate('/');
  
    
  }
  return (
    <Container
      fluid
      className="d-flex align-items-center justify-content-center"
      style={{height: "100vh", minHeight: "100vh", backgroundColor: '#ffffff', alignItems: "center", justifyContent: "center"}}
    >
      
      <Container
        className=" align-items-center shadow-lg p-3 mb-5  rounded p-5"
        style={{ maxWidth: 400, justifyContent: "center", alignItems: "center", backgroundColor: '#010317'}}
      >
   
        <Row className="brygada-1918">
          <Col>
       
             <Card style={{ backgroundColor: '#010317'}} className="border-0 align-items-center justify-content-center mb-[100px]">
              <img
           
            width="200"
            height="100"
            src= {logo}
            className="d-inline-block align-top align-items-center justify-content-center "
            alt="React Bootstrap logo"
          /> 
         </Card>
       
        
          
     
            <Tabs
              id="tabs-login"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="w-100"
              justify
              fluid
              
            >
              <Tab
                eventKey="login"
                title="Login"
                className="border border-top-0 p-2"
                style={{ backgroundColor: '#ffffff'}}
              >
                <p className="text-center">Entre com sua conta</p>
                <FormLogin />
              </Tab>
             
            </Tabs>
            
          </Col>
        </Row>
        <Row style={{ textAlign: 'center', alignItems: 'center' }}>
  <button
    style={{ 
      color: '#ffffff', 
      background: 'none', 
      border: 'none', 
      cursor: 'pointer',
      padding: '0',
      fontSize: 'inherit' // Adicione mais estilos conforme necessário
    }}
    onClick={handlerVoltar}
  >
    Voltar
  </button>
</Row>

      </Container>
    </Container>
  );
}
