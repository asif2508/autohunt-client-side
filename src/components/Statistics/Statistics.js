import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';
import useInventory from '../../hooks/useInventory';
import PageTitle from '../PageTitle/PageTitle';
import './Statistics.css';
const Statistics = () => {
    const [inventories] = useInventory();
    return (
        <div>
                  <PageTitle title="Dashboard"></PageTitle>
            <Container>
                <Row>
                <Col xs={12} md={12} lg={12} className='chart-color'>
                    <h3 className='mt-2 mb-2'>1.1 Available car quantity and brands</h3>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart
                            width={500}
                            height={200}
                            data={inventories}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="brand" />
                            <YAxis />
                            <Tooltip />
                            <Line type="monotone" dataKey="quantity" stroke="#8884d8" fill="#8884d8" />
                        </LineChart>
                    </ResponsiveContainer>
                </Col>
                <Col xs={12} md={12} lg={12} className='chart-color'>
                    <h3 className='mt-2 mb-2'>1.2 Sold Cars and brands</h3>
                    <ResponsiveContainer width="100%" height={400}>
                        <BarChart width={150} height={40} data={inventories}>
                            <Bar dataKey="sold" fill="#8884d8" />
                            <XAxis dataKey="brand" />
                            <YAxis />
                        </BarChart>
                    </ResponsiveContainer>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Statistics;