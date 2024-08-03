import React from "react";
import "./ProductCard.css"
import { ListGroup, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

function ProductCard(param) {
    return (
    <div className='col-md-6 col-xl-3'>
        <Card className='shadow h-100 overflow-hidden'>
            <Card.Img className='product-image img-hover' variant='top' src={param.ProductImage} />
            <Card.Title className='text-start text-capitalize text-center fw-bold fs-6 mt-3'>{param.ProductName}</Card.Title>
            <Card.Body>
                <ListGroup className="rounded-0">
                    <ListGroup.Item className="text-start border-0 p-0"><small>By. {param.ProductCompany}</small></ListGroup.Item>
                    <ListGroup.Item className="text-start border-0 p-0">
                        <small>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-reception-4" viewBox="0 0 16 16"><path d="M0 11.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5zm4-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5z"/></svg>: {param.ProductConnectivity}
                        </small>
                    </ListGroup.Item>
                    <ListGroup.Item className="text-start border-0 p-0">
                        <small>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-gear-fill" viewBox="0 0 16 16"><path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/></svg>: {param.ProductCompatibility}
                        </small>
                    </ListGroup.Item>
                    <ListGroup.Item className='text-end fw-bold text-success border-0 mt-2 pb-0'>{param.ProductPrice}</ListGroup.Item>
                </ListGroup>
            </Card.Body>
            <Card.Footer className="bg-white border-0">
                <Button className="w-100" variant="outline-success">Order Now</Button>
            </Card.Footer>
        </Card>
    </div>
    )
}

export default ProductCard;