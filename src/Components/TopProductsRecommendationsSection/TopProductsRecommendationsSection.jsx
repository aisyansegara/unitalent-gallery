import React from "react";
import "./TopProductsRecommendationsSection.css";
import { Container } from "react-bootstrap";

function TopProductsRecommendationsSection(props) {
    return (
        <div className="top-products-recommendations-section">
            <Container className='position-relative py-5 rounded'>
                <div className='bg-shape position-absolute' />
                <div className='row justify-content-end'>
                    <div className='col-md-6 col-lg-3 z-2'>
                        <h3 className='text-light fw-semibold'>{props.topProductsRecommendationsTitle}</h3>
                        <p className='text-light'>Buy our IoT products and transform your life with advanced technology and innovative solutions.</p>
                        <a className='text-light text-capitalize text-decoration-none fw-semibold' href="/marketplace/health">Order now</a>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default TopProductsRecommendationsSection;