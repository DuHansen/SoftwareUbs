import { getAuth, onAuthStateChanged } from "firebase/auth";
import { onValue, ref, remove } from "firebase/database";
import { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import { auth, database } from '../config/firebase'; // Importe as instâncias de auth e database
// No início do seu arquivo Postagens.jsx, adicione a seguinte importação
import { update } from "firebase/database";

const ListarPostagens = () => {
  const [postagens, setPostagens] = useState([]);
  const [postagemAtual, setPostagemAtual] = useState(null);
  const [postCount, setPostCount] = useState(0);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const userId = user.uid;
        const postagensRef = ref(database, 'postagens/' + userId);
        onValue(postagensRef, (snapshot) => {
          const dados = snapshot.val();
          let postagensLista = [];
          if (dados) {
            Object.keys(dados).forEach((key) => {
              const postagem = dados[key];
              postagensLista.push({
                postId: key, // Usando o ID único gerado pelo push como postId
                ...postagem
              });
            });
          }
          setPostagens(postagensLista);
          setPostCount(postagensLista.length);
        });
      }
    });
  }, []); // Adicione dependências aqui se necessário
  

    


// Função para excluir uma postagem pelo identificador único (ex: 'post1')
const excluirPostagem = async (postUniqueId) => {
  const auth = getAuth();
  const user = auth.currentUser;

  if (user) {
    const userId = user.uid;
    const postRef = ref(database, 'postagens/' + userId + '/' + postUniqueId);

    try {
      await remove(postRef);
      alert("Excluído com sucesso");
      // Atualize o estado local para remover a postagem da lista
      setPostagens((prevPostagens) => prevPostagens.filter(postagem => postagem.postId !== postUniqueId));
      
    } catch (error) {
      console.error("Erro ao excluir postagem:", error);
    }
  } else {
    alert("Usuário não autenticado.");
  }
};



  const iniciarAlteracao = (postagem) => {
    setPostagemAtual(postagem);
  };
  
  
  
  const alterarPostagem = async (postId, postagemAtualizada) => {
    
    const postagemRef = ref(database, 'postagens/' + auth.currentUser.uid + '/' + postId);
  
    // Estrutura correta do objeto para atualização
    const dadosParaAtualizar = {
      titulo: postagemAtual.titulo,
      conteudo: postagemAtual.conteudo
    };
  
    update(postagemRef, dadosParaAtualizar)
      .then(() => {
        console.log("Postagem atualizada com sucesso!");
        alert("Postagem alterada com sucesso!");
      })
      .catch((error) => {
        console.error("Erro ao atualizar postagem:", error);
      });

    setPostagens(postagens.map(postagem => {
      if (postagem.postId === postId) {
        return { ...postagem, ...postagemAtualizada };
      }
      return postagem;
    }));
  };

  return (
  
    <Card style={{paddingBottom: "5%", paddingTop: "5%", border: "none", alignItems: "center"}}>  
      <h5>Total de Postagens: {postCount}</h5> 
      {postagens.map((postagem) => {
        console.log(postagem);
        return (
          
        <Row key={postagem.postId}  style={{paddingBottom: "10px", paddingTop: "10px"}}>
          <Card style={{textAlign: "center", alignItems: "center", height: "200px", paddingBottom: "5%", borderColor: "black"}} key={postagem.id}>
            <Card.Body>
              <Card.Title>
                {postagem.titulo}
              </Card.Title>
              <Card.Text style={{paddingTop: "20px", color: 'black'}}>
                {postagem.conteudo}
              </Card.Text> 
            </Card.Body>
            <Row>
              <Col style={{paddingRight: "45px"}}>
              <Dropdown> 
                <div onClick={() => iniciarAlteracao(postagem)}>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  Alterar
                  </Dropdown.Toggle>
                </div>
                <Dropdown.Menu  style={{backgroundColor: "black", padding: "5% 5%"}}>
              
                    {postagemAtual && (
                      <Card style={{  padding: "5% 5%", alignItems: "center", justifyContent: "center", borderColor: "black", width:"200px"}}>
                        <p className="brygada-1918" ><strong>Alterar Postagem</strong></p>
                        <Form onSubmit={(e) => {
                          e.preventDefault();
                          
                          alterarPostagem(postagem.postId, postagemAtual);
                        }}>
                            
                              <Form.Group as={Col} controlId="formGridNome">
                              <Form.Label>Titulo</Form.Label>
                                <Form.Control
                                value={postagemAtual.titulo} onChange={(e) => setPostagemAtual({...postagemAtual, titulo: e.target.value})} 
                                />
                              </Form.Group>
                              <Form.Group as={Col} controlId="formGridNome">
                              <Form.Label>O que está pensando?</Form.Label>
                              <Form.Control
                              value={postagemAtual.conteudo} onChange={(e) => setPostagemAtual({...postagemAtual, conteudo: e.target.value})}
                              />
                            </Form.Group>
                            <Row style={{textAlign:"center", marginTop:"5%", padding: "0% 20%"}}>
                              <Button variant="btn btn-outline-success" type="Input" value="button">Salvar </Button>
                            </Row>
                            
                            </Form>
                      </Card>
                    )}
                </Dropdown.Menu>
              </Dropdown>
              </Col>
              <Col >
             
<button type="button" class="btn btn-outline-danger" onClick={() => excluirPostagem(postagem.postId)}>Excluir</button>

              </Col>
            </Row>
          </Card>
          
        </Row>
        );
      })} 
    </Card>
  );
};

export default ListarPostagens;

