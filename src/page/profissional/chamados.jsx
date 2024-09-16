import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Row, Table } from 'react-bootstrap';
import { FaHeart, FaRegHeart } from 'react-icons/fa'; // Importar ícones de coração
import { useNavigate } from 'react-router-dom'; // Importar useNavigate

const Contatos = () => {
    const [contatos, setContatos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [mensagem, setMensagem] = useState('');
    const [quantidade, setQuantidade] = useState(0); 
    const [selecionados, setSelecionados] = useState([]);
    const [favoritos, setFavoritos] = useState(new Set()); // Estado para favoritos

    useEffect(() => {
        AOS.init({ duration: 1000 });
        fetchContatos();
        const savedFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
        setFavoritos(new Set(savedFavoritos)); // Carregar favoritos do localStorage
    }, []);

    const navigate = useNavigate();

    // Função para navegar para a página de favoritos
    const goToFavoritos = () => {
        navigate('/favoritos', { state: { favoritos: Array.from(favoritos) } }); // Passar favoritos como array
    };

    const fetchContatos = async () => {
        setLoading(true);
        setError(null);
        try {
            const sessionName = localStorage.getItem('uid');
            if (!sessionName) {
                setError('Nome da sessão não encontrado.');
                setContatos([]);
                return;
            }

            const response = await fetch(`http://localhost:8080/connect/pegar?sessionName=${sessionName}`);
            if (!response.ok) {
                throw new Error(`Erro na resposta da API: ${response.statusText}`);
            }

            const data = await response.json();
            if (data.contacts && Array.isArray(data.contacts)) {
                setContatos(data.contacts);
            } else {
                setError('Dados dos contatos não encontrados.');
                setContatos([]);
            }
        } catch (error) {
            setError('Não foi possível carregar os contatos. Tente novamente mais tarde.');
            setContatos([]);
        } finally {
            setLoading(false);
        }
    };

    const handleCardClick = (telefone) => {
        const url = `https://wa.me/${telefone}`;
        window.open(url, '_blank');
    };

    const handleSelectAll = (e) => {
        if (e.target.checked) {
            setSelecionados(contatos.map(contato => contato.telefone));
            setQuantidade(contatos.length); 
        } else {
            setSelecionados([]);
            setQuantidade(0); 
        }
    };

    const handleSelect = (telefone) => {
        setSelecionados(prev => {
            if (!Array.isArray(prev)) {
                prev = [];
            }
            const selecionadosAtualizados = prev.includes(telefone)
                ? prev.filter(t => t !== telefone)
                : [...prev, telefone];
            setQuantidade(selecionadosAtualizados.length); 
            return selecionadosAtualizados;
        });
    };

    const toggleFavorito = (telefone) => {
        setFavoritos(prev => {
            const updatedFavoritos = new Set(prev);
            if (updatedFavoritos.has(telefone)) {
                updatedFavoritos.delete(telefone);
            } else {
                updatedFavoritos.add(telefone);
            }
            localStorage.setItem('favoritos', JSON.stringify(Array.from(updatedFavoritos))); // Salvar favoritos no localStorage
            return updatedFavoritos;
        });
    };

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div id="contatos" className="bg-[#010317] mt-[8vh] sm:mt-[9vh] lg:mt-[10vh]">
            <Container className="flex flex-col items-center min-h-screen p-4 overflow-hidden">
                <div className="w-full flex justify-center mb-4">
                    <Form inline>
                        <Row>
                        <Form.Group className="mr-2">
                            <Form.Control
                                type="text"
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                placeholder="Mensagem"
                            />
                        </Form.Group>
                        <Form.Group className="mr-2">
                            <Form.Control
                                type="number"
                                value={quantidade}
                                onChange={(e) => setQuantidade(e.target.value)}
                                placeholder="Quantidade"
                                readOnly
                            />
                        </Form.Group>
                        <Button variant="success" onClick={() => {/* lógica para enviar mensagem */}}>
                            Enviar
                        </Button>
                        </Row>
                    </Form>
                </div>
                <div className="w-full flex justify-center mb-4">
                    <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-maincolor" data-aos="fade-up">
                        Chamados abertos
                    </h2>
                </div>
                <Table striped bordered hover variant="dark" data-aos="fade-up">
                    <thead>
                        <tr>
                            <th><Form.Check type="checkbox" onChange={handleSelectAll} /></th>
                            <th>Nome</th>
                            <th>Telefone</th>
                            <th>Status</th>
                            <th>Ação</th>
                            <th>Favorito</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contatos.length > 0 ? (
                            contatos.map((contato, index) => (
                                <tr key={index}>
                                    <td><Form.Check type="checkbox" checked={selecionados.includes(contato.telefone)} onChange={() => handleSelect(contato.telefone)} /></td>
                                    <td>{contato.nome}</td>
                                    <td>{contato.telefone}</td>
                                    <td>{contato.status}</td>
                                    <td><Button onClick={() => handleCardClick(contato.telefone)}>WhatsApp</Button></td>
                                    <td>
                                        <Button 
                                            variant="link"
                                            onClick={() => toggleFavorito(contato.telefone)}
                                        >
                                            {favoritos.has(contato.telefone) ? <FaHeart color="red" /> : <FaRegHeart color='black' />}
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6">Nenhum contato encontrado</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
                <Button variant="primary" onClick={goToFavoritos}>Ir para Favoritos</Button> {/* Adiciona botão para acessar a página de Favoritos */}
            </Container>
        </div>
    );
};

export default Contatos;
