import React from 'react';
import { Card } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

function BestSellingProductCard(props) {
    return (
    <div className='col-lg-6'>
        <Card className='shadow d-flex flex-sm-row h-100 overflow-hidden'>
            <div className='img-hover col-sm-6'><img className='img-div' src={props.productImage} alt="" /></div>
            <div className='col-sm-6'>
                <Card.Body className='p-4'>
                    <Card.Title className='text-center text-uppercase fw-bold'>{props.productName}</Card.Title>
                    <ul className='list-unstyled'>
                        <li className='text-center'>By. {props.productCompany}</li>
                        <li className='price text-center text-green mt-3'>
                            <strong>{props.productPrice}</strong>
                        </li>
                    </ul>
                </Card.Body>
                <Card.Footer className='bg-white border-0'><Button variant='dark'>View Now</Button></Card.Footer>
            </div>
        </Card>
    </div>
    )
}

export default BestSellingProductCard;