import React from "react";
import "./MarketplacesSection.css";
import Container from "react-bootstrap/Container";
import ArtItems from "../../Assets/HealthProducts";
import ProductCard from "../../Pages/Marketplaces/ProductCard";

function ArtMarketplaceSection () {
    return (
        <div className="art-marketplace-section my-4 my-sm-5">
            <Container>
                <h3 className='mb-4 mb-sm-5 text-start text-uppercase fw-semibold'>Art Marketplace</h3>
                <div className="row g-4">
                    {
                        ArtItems.map((item) => <ProductCard id={item.id} ProductImage={item.ProductImage} ProductTitle={item.ProductTitle} ProductSubTitle={item.ProductSubTitle} ProductStock={item.ProductStock} ProductPrice={item.ProductPrice} />)
                    }
                </div>
            </Container>
        </div>
    )
}

export default ArtMarketplaceSection;