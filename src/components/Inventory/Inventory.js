import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import './Inventory.css';
const Inventory = () => {
    const { id } = useParams();
    const [newQuantity, setNewQuantity] = useState(0);
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `http://localhost:5000/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, []);
    const { _id, name, price, brand, img, quantity, desc, sold } = inventory;
    const manageDelivery =()=>{
        if(!newQuantity){
            const updatedQuantity = quantity - 1;
            setNewQuantity(updatedQuantity);
        }
        else{
            const updatedQuantity = newQuantity - 1;
            setNewQuantity(updatedQuantity);
        }
        
    }

    return (
        <div className='inventory-page-style'>
            <Container className='p-5'>
                <Row>
                    <Col xs={12} md={6} lg={6}>
                        <Card className='inventory-card-style inventory-photo'>
                            <Card.Img variant="top" src={img} />
                            <Card.Body>
                                <Card.Title className='text-start'>{name}</Card.Title>
                                <Card.Text className='description text-start'>
                                    {desc}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={6}>
                        <Row>
                            <Col xs={12} md={12} lg={12}>
                                <Card className='inventory-card-style  inventory-card-height'>
                                    <Card.Body>
                                        <Card.Title>Car Full Details</Card.Title>
                                        <Card.Text className='description text-start'>
                                            <p>Supplier name: {brand}</p>
                                            <p>Quantity: {!newQuantity ? quantity : newQuantity}</p>
                                            <p>Sold: {sold}</p>
                                            <p>Price: ${price}</p>
                                        </Card.Text>
                                        <button onClick={manageDelivery} className='manage-btn'>Delivered</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={12} lg={12}>
                                <div className='inventory-card-style mt-3 p-3 h-100'>
                                    <h3 className='mb-3'>Restock Items</h3>
                                    <form className='w-50 mx-auto'>
                                        <Form.Group className="mb-3 text-start" controlId="formBasicNumber">
                                            <Form.Label >Number of Items</Form.Label>
                                            <Form.Control type="number" placeholder="Enter Quantity" />
                                        </Form.Group>
                                        <input className='manage-btn' type="submit" value="Increase" />
                                    </form>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Inventory;