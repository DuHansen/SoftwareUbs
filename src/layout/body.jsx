import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../layout/footer';
import Header from '../layout/header';

export default function Body() {
  const [isConnected, setIsConnected] = useState(false);

  // Atualize o estado quando a conexão for bem-sucedida
  const handleConnected = (status) => {
    console.log('Estado de conexão atualizado:', status); // Adicione este log
    setIsConnected(status);
  };

  return (
    <>
      <Header />
      
      {/* Passar a função handleConnected via contexto do Outlet */}
      <Outlet context={{ onConnected: handleConnected }} />

      {/* Mostrar o footer apenas se o WhatsApp estiver conectado */}
      {isConnected && <Footer />}
    </>
  );
}
