import React from "react";
import './Slider.css'
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../assets/img/slide-1.jpg";
import slide2 from "../../assets/img/slide-2.jpg";
import slide3 from "../../assets/img/slide-3.jpg";
import slide4 from "../../assets/img/slide-4.jpg";

function Slider() {

    let images=[
        slide1,
        slide2,
        slide3,


    ]
    return (
        <>

            <Carousel>

                    <Carousel.Item>
                        <img
                            className="d-block sliderImage "
                            src={slide1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <section className="header-section">
                                <div className="center-div">
                                    <h1 className="font-weight-bold">Ali Marble</h1>
                                    <p>A Pakistani Marble Export Company</p>

                                </div>
                            </section>

                        </Carousel.Caption>
                    </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block sliderImage "
                        src={slide2}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <section className="header-section">
                            <div className="center-div">
                                <h1 className="font-weight-bold">Ali Marble</h1>
                                <p>A Pakistani Marble Export Company</p>

                            </div>
                        </section>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block sliderImage "
                        src={slide3}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <section className="header-section">
                            <div className="center-div">
                                <h1 className="font-weight-bold">Ali Marble</h1>
                                <p>A Pakistani Marble Export Company</p>

                            </div>
                        </section>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block sliderImage "
                        src={slide4}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <section className="header-section">
                            <div className="center-div">
                                <h1 className="font-weight-bold">Ali Marble</h1>
                                <p>A Pakistani Marble Export Company</p>

                            </div>
                        </section>

                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </>
    )
}

export default Slider