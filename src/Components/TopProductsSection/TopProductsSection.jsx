import React from "react";
import "./TopProductsSection.css";
import { Container } from "react-bootstrap";
import HealthProducts from "../../Assets/HealthProducts";
import SmartHomeProducts from "../../Assets/SmartHomeProducts";
import IndusrtyProducts from "../../Assets/IndustryProducts";
import TopProductCard from "./TopProductCard";

const TopProductsSection = () => {
    const SelectedProduct = [HealthProducts[1], SmartHomeProducts[1], IndusrtyProducts[1]];

    return (
        <div className="top-products-section my-4 my-sm-5">
            <Container>
                <h2 className='text-capitalize fw-semibold my-4 my-sm-5'>Our Top Innovations</h2>
                <div className="row g-4">
                    {
                        SelectedProduct.map((item) => <TopProductCard id={item.Id} productImage={item.ProductImage} productName={item.ProductName} productCompany={item.ProductCompany} productDesc={item.ProductDesc} />)
                    }
                </div>
            </Container>
            
        </div>
    )
}

export default TopProductsSection;

