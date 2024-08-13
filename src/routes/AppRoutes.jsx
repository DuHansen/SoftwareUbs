import { React, useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { auth } from "../config/firebase";
import Body from "../layout/body";
import BodyLan from "../layout/BodyLan";
import Perfil from "../page/profissional/home";
import Index from "../page/profissional/index";
import Institucional from '../page/profissional/Institucional';
import Login from "../page/profissional/login";
import Principal from "../page/profissional/perfilPaciente";
import Dashboard from "../page/profissional/relatorioConsultas";
import Agenda from "../page/profissional/agenda";
import Conversa from "../page/profissional/listaPaciente";
import Favoritas from "../page/profissional/favoritos";
import Chamados from "../page/profissional/chamados";
import Home from "../page/profissional/home";
function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    // Limpar a inscrição ao desmontar
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <Routes>
        {/* Rota para a landing page com seu próprio layout */}
        <Route path="/" element={<BodyLan />}>
        <Route index element={<Index/>} />
        <Route path="Institucional" element={<Institucional />} />
        </Route>
        
        {/* Rotas para o sistema após o login com outro layout */}
        <Route path="/login" element={<Login />} />
        <Route path="/" element={currentUser ? <Body /> : <Navigate to="/login" />}>
          <Route path="principal" element={<Principal />} />
          <Route path="agenda" element={<Agenda />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="conversas" element={<Conversa/>} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="abertos" element={<Chamados />} />
          <Route path="home" element={<Home />} />
          <Route path="favoritas" element={<Favoritas/>} />
        </Route>
        
        {/* Rota para lidar com URLs desconhecidas */}
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
