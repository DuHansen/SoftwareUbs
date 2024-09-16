import { useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { auth } from "../config/firebase";
import Body from "../layout/body";
import BodyLan from "../layout/BodyLan";
import Agenda from "../page/profissional/agenda";
import Chamados from "../page/profissional/chamados";
import Favoritas from "../page/profissional/favoritos";
import QrCode from '../page/profissional/gerarQrcode';
import Home from "../page/profissional/home";
import Index from "../page/profissional/index";
import Institucional from '../page/profissional/Institucional';
import Login from "../page/profissional/login";
import Mensagens from "../page/profissional/mensagens";
import Perfil from '../page/profissional/perfilProfissional';
import Principal from '../page/profissional/Principal';
import Dashboard from "../page/profissional/relatorioConsultas";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleConnectionNotification = (isConnected) => {
    if (isConnected) {
      // Logic to handle connection success
      console.log('Connected successfully');
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BodyLan />}>
          <Route index element={<Index />} />
          <Route path="Institucional" element={<Institucional />} />
        </Route>
        
        <Route path="/login" element={<Login />} />
        <Route path="/" element={currentUser ? <Body onConnected={handleConnectionNotification} /> : <Navigate to="/login" />}>
          <Route path="principal" element={<Principal />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="conversas" element={<Mensagens />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="abertos" element={<Chamados />} />
          <Route path="home" element={<Home />} />
          <Route path="favoritas" element={<Favoritas />} />
          <Route path="perfilPaciente" element={<Perfil />} />
          <Route path="qrcode" element={<QrCode />} />
        </Route>
        
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
