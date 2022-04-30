import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faMapMarkedAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
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
                            <p>
                            <FontAwesomeIcon className='me-2'icon={faEnvelope}></FontAwesomeIcon>
                                info@car.com</p>
                            <p>
                            <FontAwesomeIcon className='me-2'icon={faPhone}></FontAwesomeIcon>
                                240-865-3730</p>
                            <p>
                            <FontAwesomeIcon className='me-2'icon={faMapMarkedAlt}></FontAwesomeIcon>
                                3926 Calvin Street,
                            Baltimore, Maryland,
                            21201,
                            United State</p>
                        </div>
                    </Col>
                    <Col xs={12} md={6} lg={4}>
                        <div className='text-start p-5'>

                            <h6>All rights reserved by AutoHunt</h6>
                            <p>Copyright © 2022</p>
                            <div className='d-flex justify-content-start align-items-center'>
                            <p><FontAwesomeIcon className='me-2 social-logo'icon={faFacebook}></FontAwesomeIcon></p>
                            <p><FontAwesomeIcon className='me-2 social-logo'icon={faInstagram}></FontAwesomeIcon></p>
                            <p><FontAwesomeIcon className='me-2 social-logo'icon={faTwitter}></FontAwesomeIcon></p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;