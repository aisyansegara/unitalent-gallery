import React from "react";
import "./ProductDiscountSection.css";
import Container from "react-bootstrap/Container";
import GreenBtn from "../GreenBtn/GreenBtn";

function ProductDiscountSection(param) {
    return (
        <div className="product-discount-section py-5">
            <Container className="h-100 d-flex flex-column align-items-start justify-content-end">
                <h3 className='text-start text-light text-capitalize fw-semibold'>{param.ProductDiscountTitle}</h3>
                <p className='text-start text-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laudantium soluta! Quibusdam eligendi fugiat dolores minima, perferendis, aliquid reprehenderit nam quidem repellendus mollitia, officiis nulla nihil reiciendis ullam sunt accusamus?</p>
                <GreenBtn btnTitle='View More...'></GreenBtn>
            </Container>
        </div>
    )
}

export default ProductDiscountSection;