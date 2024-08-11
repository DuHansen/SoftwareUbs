import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom"; // Importe o useNavigate
import '../App.css';

export default function Landing() { // Nome do componente com letra maiúscula

    const navigate = useNavigate(); // Crie uma instância do useNavigate

    // Esta função será chamada quando o botão for clicado
    function handleLogar(event) {
        event.preventDefault(); // Previne o comportamento padrão do formulário
        navigate('/login'); // Redireciona para a página de login
    }

    return (
            <Button className="botaologin" style={{ fontSize:"20px", justifyContent: 'center'}} variant="outline-dark" type="submit" onClick={handleLogar}>Logar</Button>
    );
}
