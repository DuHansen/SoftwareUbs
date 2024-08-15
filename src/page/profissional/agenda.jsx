import { Container } from "react-bootstrap";

export default function Agenda() {
    return (
        <Container 
            style={{
                marginTop: 100, 
                display: "flex", 
                alignItems: "center", 
                justifyContent: "center", 
                minHeight: "100vh", 
                backgroundColor: "#fff", 
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
                border: "1px solid black"
            }}
        >
            <h1>Agenda</h1>
        </Container>
    );
}
