import AOS from 'aos';
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import 'aos/dist/aos.css'; // Certifique-se de que o CSS do AOS está importado
import 'tailwindcss/tailwind.css'; // Certifique-se de que o Tailwind CSS está importado

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
            const sessionName = sessionStorage.getItem('uid'); // Obtém o nome da sessão do sessionStorage
            if (!sessionName) {
                console.error('Nome da sessão não encontrado no sessionStorage');
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
        return <div className="text-center text-white">Carregando...</div>; // Indicador de carregamento
    }

    return (
        <div id="contatos" className="bg-[#010317] mt-12 sm:mt-9">
            <Container className="flex flex-col items-center min-h-screen p-4 overflow-x-auto">
                <div className="w-full flex justify-center">
                    <h2
                        className="mt-10 text-xxs sm:text-xs md:text-sm lg:text-base font-bold text-maincolor mb-4 sm:mb-6 md:mb-8 lg:mb-10 text-center"
                        data-aos="fade-up"
                    >
                        Chamados abertos
                    </h2>
                </div>

                <div className="w-full overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-800 bg-gray-900 text-white">
                        <thead className="bg-gray-800">
                            <tr>
                                <th className="px-1 py-0.5 text-xxs sm:text-xs md:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">Nome</th>
                                <th className="px-1 py-0.5 text-xxs sm:text-xs md:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">Última Mensagem</th>
                                <th className="px-1 py-0.5 text-xxs sm:text-xs md:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">Horário</th>
                                <th className="px-1 py-0.5 text-xxs sm:text-xs md:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">Telefone</th>
                                <th className="px-1 py-0.5 text-xxs sm:text-xs md:text-sm lg:text-base font-medium text-gray-400 uppercase tracking-wider">Ação</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-800">
                            {contatos.length > 0 ? (
                                contatos.map(({ nome, ultimaMensagem, horario, telefone }, index) => (
                                    <tr key={index} className="hover:bg-gray-700">
                                        <td className="px-1 py-0.5 text-xxs sm:text-xs md:text-sm lg:text-base font-medium text-white">{nome}</td>
                                        <td className="px-1 py-0.5 text-xxs sm:text-xs md:text-sm lg:text-base text-gray-400">{ultimaMensagem}</td>
                                        <td className="px-1 py-0.5 text-xxs sm:text-xs md:text-sm lg:text-base text-gray-400">{horario}</td>
                                        <td className="px-1 py-0.5 text-xxs sm:text-xs md:text-sm lg:text-base text-gray-400">{telefone}</td>
                                        <td className="px-1 py-0.5 text-xxs sm:text-xs md:text-sm lg:text-base text-gray-400 flex space-x-1">
                                            <button 
                                                onClick={() => handleCardClick(telefone)} 
                                                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-0.5 px-1 rounded text-xxs sm:text-xs md:text-sm lg:text-base"
                                            >
                                                Abrir no WhatsApp
                                            </button>
                                            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-0.5 px-1 rounded text-xxs sm:text-xs md:text-sm lg:text-base">
                                              Add
                                            </button>
                                            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-0.5 px-1 rounded text-xxs sm:text-xs md:text-sm lg:text-base">
                                              X
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-1 py-0.5 text-center text-xxs sm:text-xs md:text-sm lg:text-base text-gray-400">Nenhum contato encontrado.</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </Container>
        </div>
    );
};

export default Contatos;
