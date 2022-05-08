import React from 'react';
import { Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import './Home.css';
import banner1 from '../../images/banner/Rectangle 78.png';
import banner2 from '../../images/banner/banner2.jpg';
import banner3 from '../../images/banner/banner3.jpg';
import useInventory from '../../hooks/useInventory';
import InventoryItem from '../InventoryItem/InventoryItem';
import brand1 from '../../images/brands/Frame 85.png';
import brand2 from '../../images/brands/Frame 86.png';
import brand3 from '../../images/brands/Frame 87.png';
import brand4 from '../../images/brands/Frame 88.png';
import brand5 from '../../images/brands/Frame 89.png';
import brand6 from '../../images/brands/Frame 90.png';
import about from '../../images/about/Rectangle 110.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import Loading from '../Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';
const Home = () => {
    const [inventories] = useInventory();
    if(!inventories){
        return <Loading></Loading>
    }
    return (
        <div className='home-style'>
                  <PageTitle title="Home"></PageTitle>
            <section className="banner-section">
                <Container fluid className='p-0'>
                    <Carousel fade className='p-0'>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner1}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <h3>Hunt Your Favorite Car</h3>
                                <p>We are selling the car of your favourite brand.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner2}
                                alt="Second slide"
                            />

                            <Carousel.Caption>
                                <h3>Hunt Your Dream</h3>
                                <p>Your Dream car is waiting for you. what are you waiting for?</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={banner3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Hunt Your Choice</h3>
                                <p>We are giving you a lot of choices at a great discount.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Container>
            </section>

            <section className='inventory-section'>
                <h2 className='mb-5'>Inventory Items</h2>
                <div className='inventories'>
                    <Container>
                        <Row className='gy-5'>
                            {
                                inventories.slice(0,6).map(inventory => <InventoryItem
                                    key={inventory._id}
                                    inventory={inventory}
                                ></InventoryItem>)
                            }
                        </Row>
                        <div className='mt-5'>
                        <Link className='manage-inventories-btn d-flex align-items-center justify-content-center mx-auto' to='/manageinventories'>Manage Inventories
                        <FontAwesomeIcon className='me-2 ms-2'icon={faLongArrowAltRight}></FontAwesomeIcon>
                        </Link>
                        </div>
                    </Container>
                    
                </div>
            </section>

            <section className="brand-section">
                <Container>
                    <h2 className="mb-3 mt-5">Available brands</h2>

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
                            <div className='text-start pe-5 '>
                                <h3>About Us</h3>
                                <p>We are the most well known car seller in the city.
                                    We sell all the cars from best and well known brands.
                                    We give so much discounts and we provide you the best
                                    cashback policy. Our customer service is always open for you.
                                </p>
                            </div>
                            <div>
                                <Row className='g-5'>
                                    <Col xs={6} md={6} lg={6}>
                                        <h3>150</h3>
                                        <hr />
                                        <p>Vehicle In Stock</p>
                                    </Col>
                                    <Col xs={6} md={6} lg={6}>
                                    <h3>40</h3>
                                        <hr />
                                        <p>Sold Car</p>
                                    </Col>
                                    <Col xs={6} md={6} lg={6}>
                                    <h3>38</h3>
                                        <hr />
                                        <p>Happy Customer</p>
                                    </Col>
                                    <Col xs={6} md={6} lg={6}>
                                    <h3>5</h3>
                                        <hr />
                                        <p>Awards</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col xs={12} md={6} lg={6}>
                            <Image src={about} fluid></Image>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    );
};

export default Home;