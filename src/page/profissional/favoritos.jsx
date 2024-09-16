import React, { useEffect, useState } from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Favoritos = () => {
    const [favoritos, setFavoritos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            // Recuperar favoritos do localStorage ao carregar a página
            const savedFavoritos = JSON.parse(localStorage.getItem('favoritos')) || [];
            setFavoritos(savedFavoritos);
        } catch (e) {
            setError('Erro ao carregar favoritos.');
        } finally {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <div>Carregando...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div id="favoritos" className="bg-[#010317] mt-[8vh] sm:mt-[9vh] lg:mt-[10vh]">
            <Container className="flex flex-col items-center min-h-screen p-4 overflow-hidden">
                <div className="w-full flex justify-center mb-4">
                    <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-maincolor">
                        Favoritos
                    </h1>
                </div>
                {favoritos.length > 0 ? (
                    <Table striped bordered hover variant="dark" data-aos="fade-up">
                        <thead>
                            <tr>
                                <th>Telefone</th>
                                <th>Ação</th>
                            </tr>
                        </thead>
                        <tbody>
                            {favoritos.map((telefone, index) => (
                                <tr key={index}>
                                    <td>{telefone}</td>
                                    <td className='flex justify-center items-center'>
                                        <Button variant="success">Chamar</Button>
                                    </td>

                                </tr>
                            ))}
                        </tbody>
                    </Table>
                ) : (
                    <p className="text-white">Nenhum favorito encontrado.</p>
                )}
                <Link to="/contatos">
                    <Button variant="primary" className="mt-4">
                        Voltar para Contatos
                    </Button>
                </Link>
            </Container>
        </div>
    );
};

export default Favoritos;
