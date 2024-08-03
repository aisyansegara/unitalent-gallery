import React from "react";
import SecondHeroSection from "../../Components/SecondHeroSection/SecondHeroSection";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AboutUsContactSection from "../../Components/AboutUsContactSection/AboutUsContactSection"
import "./AboutUs.css";

const AboutUs = () => {
    return (
        <div className="about-us-page">
            <SecondHeroSection secondHeroTitle="About Us" />
            <Container>
                <Row className="text-center my-4">
                    <Col>
                        <h3 className="fw-semibold mb-5">Get to Know Us Better</h3>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <h2>Our Mission</h2>
                        <p>
                            Our mission is to provide high-quality products and services
                            that enhance the quality of life for our customers. We strive
                            for innovation and excellence in everything we do.
                        </p>
                    </Col>
                    <Col md={6}>
                        <h2>Our Vision</h2>
                        <p>
                            We envision a world where technology seamlessly integrates
                            into daily life, creating smarter and more efficient solutions
                            for individuals and businesses alike.
                        </p>
                    </Col>
                </Row>
            </Container>
            <AboutUsContactSection />
        </div>
    );
};

export default AboutUs;
