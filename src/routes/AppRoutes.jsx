import { React, useEffect, useState } from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { auth } from "../config/firebase";
import Body from "../layout/body";
import BodyLan from "../layout/BodyLan";
import Home from "../page/profissional/home";
import Index from "../page/profissional/index";
import Institucional from '../page/profissional/Institucional';
import Login from "../page/profissional/login";
import Principal from "../page/profissional/perfilPaciente";
import Dashboard from "../page/profissional/relatorioConsultas";
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
          <Route path="home" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
        </Route>
        
        {/* Rota para lidar com URLs desconhecidas */}
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
