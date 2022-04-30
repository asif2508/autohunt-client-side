import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';

const InventoryItem = (props) => {
    const {name, desc, brand, price, img, quantity} = props.inventory;
    return (
        <Col xs={12} md={6} lg={4}>
            <Card>
                <Card.Img variant="top" src={img} height={180} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default InventoryItem;