import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className='footer-style'>
            <Container fluid>
                <Row>
                    <Col xs={12} md={6} lg={4}>
                        <div className='text-start p-5'>
                            <h5>Services</h5>
                            <p>Buy a new Car</p>
                            <p>By an used Car</p>
                            <p>Sell my Car</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='text-start p-5'>
                            <h5>CUSTOMER SERVICE</h5>
                            <p>info@car.com</p>
                            <p>240-865-3730</p>
                            <p>3926 Calvin Street,
                            Baltimore, Maryland,
                            21201,
                            United State</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='text-start p-5'>

                            <h6>All rights reserved by AutoHunt</h6>
                            <p>Copyright © 2022</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;