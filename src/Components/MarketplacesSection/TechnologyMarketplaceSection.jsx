import React from "react";
import "./MarketplacesSection.css";
import Container from "react-bootstrap/Container";
import TechItems from "../../Assets/TechItems";
import ProductCard from "../../Pages/Marketplaces/ProductCard";

function TechMarketplaceSection () {
    return (
        <div className="art-marketplace-section my-4 my-sm-5">
            <Container>
                <h3 className='mb-4 mb-sm-5 text-start text-uppercase fw-semibold'>Technology Marketplace</h3>
                <div className="row g-4">
                    {
                        TechItems.map((item) => <ProductCard id={item.id} ProductImage={item.ProductImage} ProductTitle={item.ProductTitle} ProductSubTitle={item.ProductSubTitle} ProductStock={item.ProductStock} ProductPrice={item.ProductPrice} />)
                    }
                </div>
            </Container>
        </div>
    )
}

export default TechMarketplaceSection;