import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import { Container, Table } from 'react-bootstrap';

const Contatos = () => {
    const [contatos, setContatos] = useState([]);
    const [loading, setLoading] = useState(true); // Para exibir um indicador de carregamento

    useEffect(() => {
        AOS.init({ duration: 1000 });
        fetchContatos(); // Chama a função de busca ao montar o componente
    }, []); // O array vazio garante que o efeito execute apenas uma vez após o componente ser montado

    // Função para buscar contatos da API
    const fetchContatos = async () => {
        setLoading(true); // Inicia o carregamento
        try {
            const sessionName = localStorage.getItem('uid'); // Obtém o nome da sessão do localStorage
            if (!sessionName) {
                console.error('Nome da sessão não encontrado no localStorage');
                setContatos([]); // Define contatos como vazio se o sessionName não estiver presente
                return;
            }

            const response = await fetch(`http://localhost:8000/connect/pegar?sessionName=${sessionName}`);
            if (!response.ok) throw new Error('Erro na resposta da API');

            const data = await response.json();

            // Ajuste para garantir que 'contacts' esteja presente na resposta
            if (data.contacts) {
                setContatos(data.contacts);
            } else {
                console.error('Resposta da API não contém contatos:', data);
                setContatos([]); // Define contatos como vazio em caso de erro
            }
        } catch (error) {
            console.error('Erro ao buscar contatos:', error);
            setContatos([]); // Define contatos como vazio em caso de erro
        } finally {
            setLoading(false); // Finaliza o carregamento
        }
    };

    const handleCardClick = (telefone) => {
        const url = `https://wa.me/${telefone}`;
        window.open(url, '_blank');
    };

    if (loading) {
        return <div>Carregando...</div>; // Indicador de carregamento
    }

    return (
        <div id="contatos" className="bg-[#010317] mt-[8vh] sm:mt-[9vh] lg:mt-[10vh]">
            <Container className="flex flex-col items-center min-h-screen p-4 overflow-hidden">
                <div className="w-full flex justify-center">
                    <h2
                        className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-maincolor mb-8 text-center"
                        data-aos="fade-up"
                    >
                        Chamados abertos
                    </h2>
                </div>

                <Table striped bordered hover variant="dark" data-aos="fade-up">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Última Mensagem</th>
                            <th>Horário</th>
                            <th>Telefone</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contatos.length > 0 ? (
                            contatos.map(({ nome, ultimaMensagem, horario, telefone }, index) => (
                                <tr key={index}>
                                    <td>{nome}</td>
                                    <td>{ultimaMensagem}</td>
                                    <td>{horario}</td>
                                    <td>{telefone}</td>
                                    <td>
                                        <button onClick={() => handleCardClick(telefone)} className="btn btn-primary">
                                            Abrir no WhatsApp
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5">Nenhum contato encontrado.</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
};

export default Contatos;
