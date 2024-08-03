import React from "react";
import "./ProductCategoriesSection.css";
import { Container } from "react-bootstrap";

function ProductCategoriesSection() {
    return (
    <div className='product-categories-section my-4 my-sm-5' id="product-categories">
        <Container>
            <h3 className='text-start text-capitalize fw-semibold mb-4 mb-sm-5'>Product Categories</h3>
            <div className='row g-4'>
                <div className='col-sm-12 col-lg-4'>
                    <a className="text-decoration-none" href="/marketplace/health">
                        <div className='art-div img-hover d-flex align-items-end justify-content-center rounded'>
                            <h4 className='text-light mb-4 h2 fw-semibold'>Health Care</h4>
                        </div>
                    </a>
                </div>
                <div className='col-sm-12 col-lg-4'>
                    <a className="text-decoration-none" href="/marketplace/smart-home">
                        <div className='construction-div img-hover d-flex align-items-end justify-content-center rounded'>
                            <h4 className='text-light mb-4 h2 fw-semibold'>Smart Home</h4>
                        </div>
                    </a>
                </div>
                <div className='col-sm-12 col-lg-4'>
                    <a className="text-decoration-none" href="/marketplace/smart-industry">
                        <div className='technology-div img-hover d-flex align-items-end justify-content-center rounded'>
                            <h4 className='text-light text-capitalize mb-4 h2 fw-semibold'>Smart Industry</h4>
                        </div>
                    </a>
                </div>
            </div>
        </Container>
    </div>
    )
}

export default ProductCategoriesSection;