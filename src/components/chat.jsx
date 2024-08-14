import React from 'react';

function Chat() {
    const messages = [
        { id: 1, type: 'received', text: 'Olá, como posso ajudar?' },
        { id: 2, type: 'sent', text: 'Estou procurando por um livro.' },
        { id: 3, type: 'received', text: 'Claro, qual livro você está procurando?' },
        // Adicione mais mensagens conforme necessário
    ];

    return (
        <div className="flex flex-col w-1/2 mx-auto mt-20 space-y-5">
            <h2 className="text-2xl font-bold text-center">Chat</h2>
            <div className="border border-gray-300 rounded-md p-4 space-y-4">
                {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.type === 'sent' ? 'justify-end' : ''}`}>
                        <div className={`py-2 px-4 rounded-md ${message.type === 'sent' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-900'}`}>
                            {message.text}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex space-x-2">
                <input className="flex-grow px-3 py-2 border border-gray-300 rounded-md" type="text" placeholder="Digite sua mensagem..." />
                <button className="px-3 py-2 bg-blue-500 text-white rounded-md">Enviar</button>
            </div>
        </div>
    );
}

export default Chat;
