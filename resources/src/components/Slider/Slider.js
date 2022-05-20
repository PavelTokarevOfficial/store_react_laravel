import React from 'react';
import {Carousel} from "react-bootstrap";
import img1 from "./img/slide_1.png"
import img2 from "./img/slide_2.png"
import img3 from "./img/slide_3.png"

function Slider() {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={img1} alt="First slide"/>
                    <Carousel.Caption>
                        <h3>Заводская нарезка</h3>
                        <p>Это делает срез ровным</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img2} alt="Second slide"/>
                    <Carousel.Caption>
                        <h3>Натуральность</h3>
                        <p>В основе наших десертов — сливочный сыр собственного производства</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={img3} alt="Third slide"/>
                    <Carousel.Caption>
                        <h3>Большой срок хранения</h3>
                        <p>Благодаря нашему рецепту десерты хорошо хранятся</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel></div>
    );
}

export default Slider;
