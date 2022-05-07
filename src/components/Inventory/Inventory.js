import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import './Inventory.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Inventory = () => {
    const { id } = useParams();
    const [inventory, setInventory] = useState({});
    useEffect(() => {
        const url = `https://enigmatic-sands-65553.herokuapp.com/inventory/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setInventory(data))
    }, [inventory]);
    const { _id, name, price, brand, img, quantity, desc, sold } = inventory;

    const updateReq = (id, data) => {
        fetch(`https://enigmatic-sands-65553.herokuapp.com/inventory/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })

    }
    const manageDelivery = id => {
        if (quantity <= 0) {
            toast('No car available to delever');
        } else {
            const newQuantity = quantity - 1;
            const newSold = sold + 1;
            const data = { quantity: newQuantity, sold: newSold }
            updateReq(id, data);
            toast('Car has been delivered!');
        }
    }

    const handleIncreaseQuantity = event => {
        event.preventDefault();
        const number = event.target.add.value;
        const updatedQuantity = quantity + parseInt(number);
        console.log(number);
        const data = { quantity: updatedQuantity };
        updateReq(id, data);
        event.target.reset();
        toast('Car Quantity increased successfully!');
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
                                            <p>Quantity: {quantity}</p>
                                            <p>Sold: {sold}</p>
                                            <p>Price: ${price}</p>
                                        </Card.Text>
                                        <button onClick={() => manageDelivery(_id)} className='manage-btn'>Delivered</button>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={12} md={12} lg={12}>
                                <div className='inventory-card-style mt-3 p-3 h-100'>
                                    <h3 className='mb-3'>Restock Items</h3>
                                    <form onSubmit={handleIncreaseQuantity} className='w-50 mx-auto'>
                                        <Form.Group className="mb-3 text-start" controlId="formBasicNumber">
                                            <Form.Label >Number of Items</Form.Label>
                                            <Form.Control name='add' type="number" placeholder="Enter Quantity" />
                                        </Form.Group>
                                        <input className='manage-btn' type="submit" value="Increase" />
                                    </form>
                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
                <ToastContainer />
            </Container>
        </div>
    );
};

export default Inventory;