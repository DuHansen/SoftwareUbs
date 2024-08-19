import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function QrCode() {
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const [sessionName, setSessionName] = useState('');
    const [loading, setLoading] = useState(false); // Estado para controle do carregamento


    // Carregar o UID do sessionStorage ao montar o componente
    useEffect(() => {
        const savedSessionName = sessionStorage.getItem('uid');
        if (savedSessionName) {
            setSessionName(savedSessionName);
        }
    }, []);

    const fetchQrCode = async () => {
        setLoading(true); // Inicia o carregamento
        try {
            const response = await axios.post('http://localhost:8000/connect/gerar', { sessionName });
            console.log('Resposta do servidor:', response.data);
            
            const base64Image = response.data.startsWith('data:image/png;base64,') 
                ? response.data 
                : `data:image/png;base64,${response.data}`;
            
            setQrCodeUrl(base64Image);
            
            // Salvar o nome da sessão no localStorage (não necessário se sessionName é o UID)
            localStorage.setItem('sessionName', sessionName);
            
         
        } catch (error) {
            console.error('Error fetching QR code:', error);
        } finally {
            setLoading(false); // Finaliza o carregamento
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchQrCode();
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen pt-10">
            {loading ? (
                <div className="flex items-center justify-center">
                    <svg className="animate-spin h-10 w-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="none" d="M4 12a8 8 0 1 1 16 0A8 8 0 0 1 4 12z"></path>
                    </svg>
                </div>
            ) : qrCodeUrl ? (
                <div className="mb-5">
                    <img
                        src={qrCodeUrl}
                        alt="QR Code"
                        className="max-w-full h-auto"
                    />
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="w-full max-w-md text-center">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Conectar
                    </button>
                </form>
            )}
        </div>
    );
}
