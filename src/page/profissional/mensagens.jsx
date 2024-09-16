import React, { useState } from 'react';
import { Button, Container, Form, Table } from 'react-bootstrap';

const Conversas = () => {
    const [perguntas, setPerguntas] = useState([]);
    const [novaPergunta, setNovaPergunta] = useState('');
    const [novaResposta, setNovaResposta] = useState('');

    const adicionarPergunta = () => {
        if (novaPergunta && novaResposta) {
            setPerguntas([...perguntas, { pergunta: novaPergunta, resposta: novaResposta }]);
            setNovaPergunta('');
            setNovaResposta('');
        }
    };

    return (
        <div id="conversas" className="bg-[#010317] mt-[8vh] sm:mt-[9vh] lg:mt-[10vh]">
            <Container className="flex flex-col items-center min-h-screen p-4 overflow-hidden">
                <div className="w-full flex justify-center mb-4">
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-maincolor">
                        Conversas
                    </h1>
                </div>
                
                <Form className="mb-4">
                    <Form.Group className="mb-3">
                        <Form.Label>Pergunta</Form.Label>
                        <Form.Control
                            type="text"
                            value={novaPergunta}
                            onChange={(e) => setNovaPergunta(e.target.value)}
                            placeholder="Digite a pergunta"
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Resposta</Form.Label>
                        <Form.Control
                            type="text"
                            value={novaResposta}
                            onChange={(e) => setNovaResposta(e.target.value)}
                            placeholder="Digite a resposta"
                        />
                    </Form.Group>
                    <Button variant="success" onClick={adicionarPergunta}>
                        Adicionar Pergunta
                    </Button>
                </Form>
                
                {perguntas.length > 0 ? (
                    <Table striped bordered hover variant="dark" data-aos="fade-up">
                        <thead>
                            <tr>
                                <th>Pergunta</th>
                                <th>Resposta</th>
                            </tr>
                        </thead>
                        <tbody>
                            {perguntas.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.pergunta}</td>
                                    <td>{item.resposta}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p className="text-white">Nenhuma pergunta adicionada.</p>
                )}

               
            </Container>
        </div>
    );
};

export default Conversas;
