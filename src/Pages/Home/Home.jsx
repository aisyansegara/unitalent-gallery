import React from "react";
import "./Home.css";
import HeroSection from "../../Components/HeroSection/HeroSection";
import TopProductsSection from "../../Components/TopProductsSection/TopProductsSection";
import TopProductsRecommendationsSection from "../../Components/TopProductsRecommendationsSection/TopProductsRecommendationsSection";
import ProductCategoriesRecommendationsSection from "../../Components/ProductCategoriesRecommendationsSection/ProductCategoriesRecommendationsSection";
import ProductCategoriesSection from "../../Components/ProductCategoriesSection/ProductCategoriesSection";
import BestSellingProductsSection from "../../Components/BestSellingProductsSection/BestSellingProductsSection";
import MarketplaceRecommendationsSection from "../../Components/MarketplaceRecommendationsSection/MarketplaceRecommendationsSection";

function Home() {
    return (
        <div className="home-page">
            <HeroSection />
            <TopProductsSection />
            <div className="my-4 my-sm-5">
                <TopProductsRecommendationsSection topProductsRecommendationsTitle='Chosen for You' />
            </div>
            <ProductCategoriesRecommendationsSection productCategoriesRecommendationsTitle="Discover Your Needs by Category" />
            <ProductCategoriesSection />
            <BestSellingProductsSection />
            <MarketplaceRecommendationsSection />
        </div>
    )
}

export default Home;

