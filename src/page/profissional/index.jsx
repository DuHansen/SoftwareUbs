import { Card, Container } from 'react-bootstrap';
import img2 from "../../img/baixados (3).jpeg";
import img1 from "../../img/OIP (6).jpeg";
import img3 from "../../img/OIP (7).jpeg";



export default function Index() {


    const images = [
        img1, img2, img3
    ];

    return (
        <Container style={{marginTop: 100}}>
           
                 {images.map((img, index) => (
            <Card style={{marginTop: 10, border: "none"}} className="content" key={index}>
                <img src={img} width="100%" height="100%" alt={`Imagem ${index + 1}`} />
            </Card>
        ))}
       
        </Container>
    );
}
