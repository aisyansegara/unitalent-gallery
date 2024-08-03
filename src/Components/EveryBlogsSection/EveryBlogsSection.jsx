import React from "react";
import "./EveryBlogsSection.css";
import Container from "react-bootstrap/Container";
import EveryBlogsItems from "../../Assets/EveryBlogsItems";
import EveryBlogsCard from "./EveryBlogsCard";

function EveryBlogsSection() {
    return (
        <div className="every-blogs-section my-4 my-sm-5">
            <Container>
                <div className="row g-4">
                    {
                        EveryBlogsItems.map((item) => <EveryBlogsCard key={item.Id} itemImage={item.ItemImage} itemTitle={item.ItemTitle} itemAuthor={item.ItemAuthor} itemText={item.ItemText} />)
                    }
                </div>
            </Container>
        </div>
    )
}

export default EveryBlogsSection;