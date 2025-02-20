import { Card, Container } from 'react-bootstrap';
import img1 from "../../img/1.jpg";
import img10 from "../../img/10.jpg";
import img11 from "../../img/11.jpg";
import img12 from "../../img/12.jpg";
import img13 from "../../img/13.jpg";
import img2 from "../../img/2.jpg";
import img3 from "../../img/3.jpg";
import img4 from "../../img/4.jpg";
import img5 from "../../img/5.jpg";
import img6 from "../../img/6.jpg";
import img7 from "../../img/7.jpg";
import img8 from "../../img/8.jpg";
import img9 from "../../img/9.jpg";


export default function Institucional() {


    const images = [
        img1, img2, img3, img4, img5, img6,
        img7, img8, img9, img10, img11, img12, img13
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
