// Body.js
import { Outlet } from "react-router-dom";
import '../App.css';
import Footer from "../layout/footer";
import Header from "../layout/header";

export default function Body() {
  return (
    <>
      <Header/>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh', // Certifique-se de que o div ocupa pelo menos a altura da tela
        paddingBottom: '56px' // Ajuste este valor se necessário para evitar sobreposição do footer
      }}>
        <main style={{
          flex: 1, // Faz com que o conteúdo principal ocupe o espaço disponível
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          width: '100%'
        }}>
          <Outlet />
        </main>
        <Footer/>
      </div>
    </>
  );
}
