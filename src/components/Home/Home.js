import React from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import './Home.css';
import banner1 from '../../images/banner/Rectangle 78.png';
import banner2 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';
import useInventory from '../../hooks/useInventory';
import InventoryItem from '../InventoryItem/InventoryItem';
import brand1 from '../../images/brands/Frame 85.png'
import brand2 from '../../images/brands/Frame 86.png'
import brand3 from '../../images/brands/Frame 87.png'
import brand4 from '../../images/brands/Frame 88.png'
import brand5 from '../../images/brands/Frame 89.png'
import brand6 from '../../images/brands/Frame 90.png'
const Home = () => {
    const [inventories] = useInventory();
    return (
        <div className='home-style'>
            <section clasName="banner-section">
                <Container fluid>
                    <Carousel fade className='p-0'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Second slide label</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Third slide label</h3>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>

            <section className='inventory-section'>
                <h3 className='mb-3'>Inventory Items</h3>
                <div className='inventories'>
                    <Container>
                        <Row className='g-5'>
                            {
                                inventories.map(inventory => <InventoryItem
                                    inventory={inventory}
                                ></InventoryItem>)
                            }
                        </Row>
                    </Container>
                </div>
            </section>

            <section className="brand-section">
                <Container>
                    <h3 className="mb-3">Available brands</h3>

                    <Row>
                        <Col xs={6} md={4} lg={2}>
                            <Image src={brand1}></Image>
                        </Col>
                        <Col xs={6} md={4} lg={2}>
                            <Image src={brand2}></Image>
                        </Col>
                        <Col xs={6} md={4} lg={2}>
                            <Image src={brand3}></Image>
                        </Col>
                        <Col xs={6} md={4} lg={2}>
                            <Image src={brand4}></Image>
                        </Col>
                        <Col xs={6} md={4} lg={2}>
                            <Image src={brand6}></Image>
                        </Col>
                        <Col xs={6} md={4} lg={2}>
                            <Image src={brand5}></Image>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className="about-us">
                <Container>
                    <Row className='g-3'>
                        <Col xs={12} md={6} lg={6}>

                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;