import React from "react";
import "./BestSellingProductsSection.css"
import { formatToRupiah } from "../../Utils/FormatCurrency";
import { Container } from "react-bootstrap";
import HealthProducts from "../../Assets/HealthProducts";
import SmartHomeProducts from "../../Assets/SmartHomeProducts";
import SmartIndustryProducts from "../../Assets/IndustryProducts";
import BestSellingProductCard from "./BestSellingProductCard";

const BestSellingProductsSection = () => {
    const SelectedProduct = [HealthProducts[1], SmartHomeProducts[1], SmartIndustryProducts[1], SmartIndustryProducts[2]];

    return (
        <div className='best-selling-products-section my-4 my-sm-5'>
            <Container>
                <h2 className='text-capitalize fw-semibold mb-4 mb-sm-5'>Best Selling Products</h2>
                <div className='row g-4'>
                    {
                        SelectedProduct.map((item) => <BestSellingProductCard id={item.Id} productImage={item.ProductImage} productName={item.ProductName} productCompany={item.ProductCompany} productDesc={item.ProductDesc} productStock={item.ProductStock} productPrice={formatToRupiah(item.ProductPrice)} />)
                    }
                </div>
            </Container>
        </div>
        // <div className="top-product-section my-4 my-sm-5">
        //     <Container>
        //         <h2 className='text-uppercase fw-semibold my-4 my-sm-5 pt-lg-4'>Top Products</h2>
        //         <div className="row g-4">
        //             {
        //                 SelectedProduct.map((item) => <TopProductCard id={item.Id} productImage={item.ProductImage} productTitle={item.ProductTitle} productMaker={item.ProductMaker} productDesc={item.ProductDesc} />)
        //             }
        //         </div>
        //     </Container>
            
        // </div>
    )
}

export default BestSellingProductsSection;
