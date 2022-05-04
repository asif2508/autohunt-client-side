import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './InventoryItem.css';
import {Link} from 'react-router-dom';
const InventoryItem = (props) => {
    const {_id,name, desc, brand, price, img, quantity} = props.inventory;
    return (
        <Col xs={12} md={6} lg={4}>
            <Card className='card-style'>
                <Card.Img variant="top" src={img} height={200} />
                <Card.Body className='card-body-style'>
                    <h3>{name}</h3>
                    <p>{desc.slice(0,100)}</p>
                    <p>Supplier: {brand}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Price: ${price}</p>
                </Card.Body>
                <Link className='mx-auto mt-0 manage-btn' to={`inventory/${_id}`} >Update</Link>
            </Card>
        </Col>
    );
};

export default InventoryItem;