import React from "react";
import "./MarketplacesSection.css";
import Container from "react-bootstrap/Container";
import SmartHomeProducts from "../../Assets/SmartHomeProducts";
import ProductCard from "../../Pages/Marketplaces/ProductCard";

function ConstructionMarketplaceSection () {
    return (
        <div className="art-marketplace-section my-4 my-sm-5">
            <Container>
                <h3 className='mb-4 mb-sm-5 text-start text-uppercase fw-semibold'>Construction Marketplace</h3>
                <div className="row g-4">
                    {
                        SmartHomeProducts.map((item) => <ProductCard id={item.id} ProductImage={item.ProductImage} ProductTitle={item.ProductTitle} ProductSubTitle={item.ProductSubTitle} ProductStock={item.ProductStock} ProductPrice={item.ProductPrice} />)
                    }
                </div>
            </Container>
        </div>
    )
}

export default ConstructionMarketplaceSection;