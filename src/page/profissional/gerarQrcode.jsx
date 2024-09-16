import axios from 'axios';
import { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

export default function QrCode() {
    const { onConnected } = useOutletContext(); // Receber o onConnected via contexto
    const [qrCodeUrl, setQrCodeUrl] = useState('');
    const [sessionName, setSessionName] = useState('');
    const [loading, setLoading] = useState(false);
    const [isButton, setIsButton] = useState(true); // Estado adicional para o botão
    const [showFooter, setShowFooter] = useState(false); // Estado para controlar a exibição do footer
    const [isConnected, setIsConnected] = useState(false); // Novo estado para controlar conexão bem-sucedida

    useEffect(() => {
        const savedSessionName = localStorage.getItem('sessionName'); // Recupera do localStorage
        if (savedSessionName) {
            setSessionName(savedSessionName);
        }
    }, []);

    useEffect(() => {
        // Atualizar o footer quando voltar ao estado de botão após loading ou qrCodeUrl
        if (isButton && showFooter) {
            onConnected(true); // Notificar que a conexão foi bem-sucedida
            setIsConnected(true); // Atualizar o estado de conexão bem-sucedida
            setShowFooter(false); // Resetar o estado para não mostrar o footer novamente
        }
    }, [isButton, showFooter, onConnected]);

    const fetchQrCode = async (e) => {
        e.preventDefault(); // Previne o comportamento padrão do formulário
        setLoading(true);
        setIsButton(false); // Muda o estado para não botão
        setShowFooter(true); // Indicar que o footer deve ser mostrado quando voltar para botão
        try {
            const response = await axios.post('http://localhost:8080/connect/gerar', { sessionName });

            // Log para verificar o formato de response.data
            console.log('Response:', response.data);

            // Verifica se a resposta contém um campo 'contacts'
            if (response.data && response.data.contacts) {
                // Presumindo que o QR Code é uma string base64 na resposta
                const qrCode = response.data.contacts[0]?.qrCode; // Ajuste conforme a estrutura real do seu objeto
                if (qrCode) {
                    const base64Image = qrCode.startsWith('data:image/png;base64,')
                        ? qrCode
                        : `data:image/png;base64,${qrCode}`;
                    
                    setQrCodeUrl(base64Image);
                    localStorage.setItem('sessionName', sessionName); // Atualizar o nome da sessão no localStorage
                } else {
                    console.error('QR Code não encontrado na resposta:', response.data);
                }
            } else {
                console.error('Resposta inesperada do servidor:', response.data);
            }
        } catch (error) {
            console.error('Error fetching QR code:', error);
        } finally {
            setLoading(false);
            setIsButton(true); // Retorna ao estado de botão
        }
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
            ) : isConnected ? ( // Mostrar mensagem de sucesso ao invés do botão
                <div className="text-green-500 text-xl font-bold">Conectado com sucesso!</div>
            ) : (
                <form onSubmit={fetchQrCode} className="w-full max-w-md text-center">
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
                        Conectar
                    </button>
                </form>
            )}
        </div>
    );
}
