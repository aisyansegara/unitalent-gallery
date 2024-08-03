import React from "react";
import Card from "react-bootstrap/Card";

function EveryBlogsCard(props) {
    return (
    <div className='col-md-6 col-xl-4'>
        <Card className="h-100">
            <Card.Img className="img-hover" src={props.itemImage} />
            <Card.Title className="fs-5 mt-3"><small>{props.itemTitle}</small></Card.Title>
            <Card.Body>
                <Card.Subtitle className="fs-6 mb-2 text-muted">By. {props.itemAuthor}</Card.Subtitle>
            </Card.Body>
            <Card.Footer className="d-flex align-items-center justify-content-between bg-white border-1">
                <p className="ms-0 my-auto fs-6 text-muted"><small>Updated 6m ago.</small></p>
                <a className="text-decoration-none" href="/blogs">View blog</a>
            </Card.Footer>
        </Card>
    </div>
    )
}

export default EveryBlogsCard;