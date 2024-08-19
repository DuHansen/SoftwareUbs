import React from 'react';
import { Container } from 'react-bootstrap';
import Grafico from '../../components/grafico';

export default function RelatorioConsultas() {
    return (
        <div  className="bg-[#010317]  flex flex-col min-h-screen ">
            <div className="flex-grow">
                <Container className="bg-[#010317] p-6 shadow-md rounded-lg mt-20 mb-16">
                <h1 className="text-white text-2xl font-bold mb-4 text-center">Relatório de Consultas</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Grafico />
                        <Grafico />
                        <Grafico />
                        <Grafico />
                    </div>
                </Container>
            </div>
         
        </div>
    );
}
