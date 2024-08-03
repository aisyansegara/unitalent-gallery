import React from 'react';
import SecondHeroSection from "../../Components/SecondHeroSection/SecondHeroSection";
import EveryBlogsSection from "../../Components/EveryBlogsSection/EveryBlogsSection";

function Blogs() {
    return (
        <div className="blogs-page">
            <SecondHeroSection secondHeroTitle="Blogs Page" />
            <EveryBlogsSection />
        </div>
    )
}

export default Blogs;