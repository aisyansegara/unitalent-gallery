import React from "react";
import "./ProductCategoriesRecommendationsSection.css";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function ProductCategoriesRecommendationsSection(props) {
    return (
    <div className='product-categories-recommendations-section py-5'>
        <Container className='h-100 d-flex flex-column align-items-start justify-content-end'>
            <h3 className='text-start text-light fw-semibold'>{props.productCategoriesRecommendationsTitle}</h3>
            <p className='text-start text-light'>Select IoT Devices by Category for Personalized Solutions.</p>
            <a className="text-decoration-none" href="#product-categories"><Button variant="success">Check Categories</Button></a>
        </ Container>
    </div>
    )
}

export default ProductCategoriesRecommendationsSection;