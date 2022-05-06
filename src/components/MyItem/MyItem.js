import React from 'react';
import { Card, Button, Col, Row, Image } from 'react-bootstrap';
import './MyItem.css';

const MyItem = ({ item, user, handleDeleteItem }) => {
    const { _id, name, brand, quantity, desc, price, sold, img } = item;
    return (
        <div className='mt-3'>
            <Card className='inventory-card-style'>
                <Card.Header as="h5">Item Added by you</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xs={12} md={6} lg={6}>
                            <Image className='p-3' src={img} fluid></Image>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <Card.Title className='text-start'>Name: {name}</Card.Title>
                            <Card.Text className='text-start'>
                                <p>Id: {_id}</p>
                                <p>Added by: {user?.email}</p>
                                <p>Supplier: {brand}</p>
                                <p>Description: {desc}</p>
                                <div className='d-flex justify-content-between'>
                                <p>Price: ${price}</p>
                                <p>Quantity: {quantity}</p>
                                <p>Sold: {sold}</p>
                                </div>

                            </Card.Text>
                        </Col>
                    </Row>
                    <Button onClick={()=>handleDeleteItem(_id)} className='myitem-delete' variant="primary">Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MyItem;