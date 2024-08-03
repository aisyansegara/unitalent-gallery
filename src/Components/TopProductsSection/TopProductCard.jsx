import React, {useState} from "react";
import "./TopProductCard.css";
import { Card } from "react-bootstrap";

function TopProductCard(props) {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    const truncateText = (text, length) => {
        if (text.length <= length) {
            return text;
        }
        return text.substring(0, length) + '...';
    };

    return (
    <div className='col-lg-4'>
        <Card className='shadow h-100 overflow-hidden'>
            <Card.Img className='product-image card-img-top img-hover' variant='top' src={props.productImage} />
            <Card.Body className='p-4'>
                <Card.Title className='text-center text-capitalize fw-bold'>{props.productName}</Card.Title>
                <Card.Subtitle className="mb-3 text-muted text-center">By: {props.productCompany}</Card.Subtitle>
                <Card.Text className='text-start'>
                    {showMore ? props.productDesc : truncateText(props.productDesc, 120)}
                    <span className="show text-primary" onClick={toggleShowMore}>
                        {showMore ? " Show less" : " Show more"}
                    </span>
                </Card.Text>
            </Card.Body>
            <Card.Footer className='pb-4 bg-white border-0 text-success'><u>Order now</u></Card.Footer>
        </Card>
    </div>
    )
};

export default TopProductCard;