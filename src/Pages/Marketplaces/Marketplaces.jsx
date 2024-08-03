import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Marketplaces.css";
import Container from "react-bootstrap/Container";
import Pagination from "react-bootstrap/Pagination";
import SecondHeroSection from "../../Components/SecondHeroSection/SecondHeroSection";
import ProductSearchFormSection from "../../Components/ProductSearchFormSection/ProductSearchFormSection";
import HealthProducts from "../../Assets/HealthProducts";
import SmartHomeProducts from "../../Assets/SmartHomeProducts";
import IndustryProducts from "../../Assets/IndustryProducts";
import ProductCard from "./ProductCard";
import SuggestProductsForYouSection from "../../Components/SuggestProductsForYouSection/SuggestProductsForYouSection";
import { formatToRupiah } from "../../Utils/FormatCurrency";

const Marketplace = () => {
    const { category } = useParams();
    const [products, setProducts] = useState([]);
    const [secondHeroTitle, setSecondHeroTitle] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const [searchResults, setSearchResults] = useState([]);

    const productsPerPage = 8;

    useEffect(() => {
        let productList = [];
        let heroTitle = "";
        switch (category) {
            case 'health':
                productList = HealthProducts;
                heroTitle = "Health Care";
                break;
            case 'smart-home':
                productList = SmartHomeProducts;
                heroTitle = "Smart Home";
                break;
            case 'smart-industry':
                productList = IndustryProducts;
                heroTitle = "Smart Industry";
                break;
            default:
                productList = [];
        }
        setProducts(productList);
        setSecondHeroTitle(heroTitle);
        setSearchResults(productList);
        setCurrentPage(1); 
    }, [category]);

    const handleSearch = (query) => {
        if (query === '') {
            setSearchResults(products);
        } else {
            const filteredProducts = products.filter(product =>
                product.ProductName.toLowerCase().includes(query.toLowerCase())
            );
            setSearchResults(filteredProducts);
            setCurrentPage(1); 
        }
    };

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

    const currentProducts = searchResults.slice(indexOfFirstProduct, indexOfLastProduct);

    const totalPages = Math.ceil(searchResults.length / productsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <div className="marketplaces-page">
            <SecondHeroSection secondHeroTitle={secondHeroTitle} />
            <ProductSearchFormSection onSearch={handleSearch} />
            <div className="art-marketplace-section my-4 my-sm-5">
                <Container>
                    <h3 className='mb-4 mb-sm-5 text-start text-capitalize fw-semibold'>{secondHeroTitle} Products</h3>
                    {searchResults.length > 0 ? (
                        <>
                            <div className="row g-4">
                                {currentProducts.map((item) => (
                                    <ProductCard 
                                        key={item.id}
                                        id={item.id}
                                        ProductImage={item.ProductImage}
                                        ProductName={item.ProductName}
                                        ProductCompany={item.ProductCompany}
                                        ProductDesc={item.ProductDesc}
                                        ProductConnectivity={item.ProductConnectivity}
                                        ProductCompatibility={item.ProductCompatibility}
                                        ProductPrice={formatToRupiah(item.ProductPrice)}
                                    />
                                ))}
                            </div>
                            <div className="d-flex justify-content-end mt-4">
                                <Pagination className="pagination-success">
                                    <Pagination.First onClick={() => handlePageChange(1)} disabled={currentPage === 1} />
                                    <Pagination.Prev onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1} />
                                    {[...Array(totalPages).keys()].map(number => (
                                        <Pagination.Item
                                            key={number + 1}
                                            active={number + 1 === currentPage}
                                            onClick={() => handlePageChange(number + 1)}
                                        >
                                            {number + 1}
                                        </Pagination.Item>
                                    ))}
                                    <Pagination.Next onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages} />
                                    <Pagination.Last onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages} />
                                </Pagination>
                            </div>
                        </>
                    ) : (
                        <p className="text-center text-muted">Maaf, produk yang anda cari tidak ditemukan.</p>
                    )}
                </Container>
            </div>
            <SuggestProductsForYouSection />
        </div>
    );
}

export default Marketplace;
