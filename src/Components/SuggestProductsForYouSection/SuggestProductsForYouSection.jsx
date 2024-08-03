import React from "react";
import "./SuggestProductsForYouSection.css";
import Container from "react-bootstrap/Container";

function SuggestProductsForYouSection() {
    return(
    <div className='suggest-products-for-you-section py-5 position-relative'>
        <div className='bg-shape position-absolute'></div>
        <Container>
            <div className="row">
                <div className='col-md-4 z-2'>
                    <h2 className='text-start text-light text-capitalize fw-semibold'>Some Products We Recommend</h2>
                    <p className='text-start text-light'>Explore our standout IoT products, chosen for their innovation and efficiency. For home, health, or industry, these picks meet your needs.</p>
                    <div className='d-flex'>
                        <h5 className='text-light text-capitalize fw-semibold text-nowrap'>Call us:</h5>
                        <a href="/" className='text-light mx-2 text-decoration-none h5 fw-semibold'>08213214589</a>
                    </div>
                </div>
            </div>
        </Container>
    </div>
    )
}

export default SuggestProductsForYouSection;