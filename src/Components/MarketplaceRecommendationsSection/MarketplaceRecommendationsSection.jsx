import React from "react";
import "./MarketplaceRecommendationsSection.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function MarketplaceRecommendationsSection() {
    return (
    <div className='marketplace-recommendations-section py-5 position-relative'>
        <div className='bg-shape position-absolute'></div>
        <Container>
            <div className="row">
                <div className='col-md-4 z-2'>
                    <h2 className='text-start text-light text-capitalize fw-semibold'>Visit the Marketplace Now</h2>
                    <p className='text-start text-light'>Explore our wide range of innovative IoT products crafted by talented students. From smart home solutions to advanced healthcare and industrial devices, find everything you need to transform your life with cutting-edge technology.</p>
                    <a className="text-decoration-none" href="/marketplace/health"><Button variant="outline-light" className="d-flex">View Marketplace</Button></a>
                    {/* <div className='d-flex'>
                        <h5 className='text-light text-capitalize fw-semibold text-nowrap'>Call us:</h5>
                        <a href="/" className='text-light mx-2 text-decoration-none h5 fw-semibold'>0900800700</a>
                    </div> */}
                </div>
            </div>
        </Container>
    </div>
    )
}

export default MarketplaceRecommendationsSection;

