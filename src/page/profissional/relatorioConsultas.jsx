import { Container } from "react-bootstrap";
import Grafico  from "../../components/grafico";

export default function relatorioConsultas() {
    return(
        
            <Container style={{marginTop: 100, alignItems: "center", justifyContent: "center", minHeight: "100vh"}}>
                   <h1>Relatório de Consultas</h1>
                   <Grafico></Grafico>
            </Container>
    );
}