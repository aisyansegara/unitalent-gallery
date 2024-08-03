import React from "react";
import "./HeroSection.css";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import GreenBtn from "../GreenBtn/GreenBtn";

function HeroSection() {
    return (
        <div className="hero-section">
            <Carousel>
                <Carousel.Item className="carousel-item1 vh-100">
                    <Carousel.Caption className="h-100 d-flex flex-column align-items-center justify-content-top">
                        <div className="row h-100">
                            <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                                <h1 className="text-start">Discover the Future of IoT</h1>
                                <p className="text-start">Explore innovative IoT products by talented students. From smart home solutions to advanced health and industrial devices, our unique creations are designed to transform your life.</p>
                                <a className="text-decoration-none" href="#product-categories"><Button variant="success">Shop Now</Button></a>
                            </div>
                            <div className="col-lg-6 d-none d-lg-block"></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item2 vh-100">
                    <Carousel.Caption className="h-100">
                        <div className="row h-100">
                            <div className="col-lg-6 d-flex flex-column align-items-start justify-content-center">
                                <h1 className="text-capitalize text-start">Latest IoT Inspirations</h1>
                                <p className="text-start">Discover insightful articles on the latest IoT innovations. Enjoy expert analyses, student projects, and tips to integrate smart technology into your life.</p>
                                <GreenBtn btnTitle="View Blogs" btnLink="/blogs" />
                            </div>
                            <div className="col-lg-6 d-none d-lg-block"></div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="carousel-item3 vh-100">
                    <Carousel.Caption className="h-100">
                        <div className="row h-100">
                            <div className="col-lg-6 d-none d-lg-block"></div>
                            <div className="col-lg-6 d-flex flex-column align-items-end justify-content-center">
                                <h1 className="text-start">About Us</h1>
                                <p className="text-end">Learn about our mission to showcase student-created IoT products and empower the next generation of innovators. Join us in supporting young talent and transforming technology's future.</p>
                                <GreenBtn btnTitle="Get to Know" btnLink="/about-us" />
                            </div>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HeroSection;