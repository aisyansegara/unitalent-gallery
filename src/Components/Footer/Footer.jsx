import React from 'react';
import "./Footer.css";
import { Container, Row, Col, Form, Button, ListGroup } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="py-5 mt-5 bg-dark">
            <Container>
                <Row className=''>
                    <Col xs={6} md={2} className="mb-3">
                        <h5 className='text-light'>Section</h5>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="p-0 mb-2 border-0 bg-dark"><a href="/" className="nav-link p-0 text-light">Home</a></ListGroup.Item>
                            <ListGroup.Item className="p-0 mb-2 border-0 bg-dark"><a href="/blogs" className="nav-link p-0 text-light">Blogs</a></ListGroup.Item>
                            <ListGroup.Item className="p-0 mb-2 border-0 bg-dark"><a href="/" className="nav-link p-0 text-light">Pricing</a></ListGroup.Item>
                            <ListGroup.Item className="p-0 mb-2 border-0 bg-dark"><a href="/" className="nav-link p-0 text-light">FAQs</a></ListGroup.Item>
                            <ListGroup.Item className="p-0 mb-2 border-0 bg-dark"><a href="/about-us" className="nav-link p-0 text-light">About Us</a></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col xs={6} md={2} className="mb-3">
                        <h5 className='text-light'>Categories</h5>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="p-0 mb-2 border-0 bg-dark"><a href="/marketplace/health" className="nav-link p-0 text-light">Health Care</a></ListGroup.Item>
                            <ListGroup.Item className="p-0 mb-2 border-0 bg-dark"><a href="/marketplace/smart-home" className="nav-link p-0 text-light">Smart Home</a></ListGroup.Item>
                            <ListGroup.Item className="p-0 mb-2 border-0 bg-dark"><a href="/marketplace/smart-industry" className="nav-link p-0 text-light">Smart Industry</a></ListGroup.Item>
                        </ListGroup>
                    </Col>

                    <Col md={6} className="offset-md-1 m-auto mt-3 me-0">
                        <Form>
                            <h5 className='text-light'>Subscribe to our newsletter</h5>
                            <p className='text-light'>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-sm-row w-100 gap-1">
                                <Form.Control type="email" placeholder="Email address" className="me-1"/>
                                <Button variant="success" type="button">Subscribe</Button>
                            </div>
                        </Form>
                    </Col>
                </Row>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p className='text-secondary'>&copy; 2024 UniTalent Gallery, Inc. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
