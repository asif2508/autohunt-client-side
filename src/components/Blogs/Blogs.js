import React from 'react';
import { Container, Table } from 'react-bootstrap';
const Blogs = () => {
    return (
        <div>
            <Container>
                <div className='mt-3'>
                    <h3>Q.13.1 Difference between javascript and nodejs</h3>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>JavaScript</th>
                                <th>Node js</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Javascript is a programming language.</td>
                                <td>Node js is a run time environment based on Javascript</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>JavaScript is often used in client-side</td>
                                <td>Node js is often used in server-side</td>
                            </tr>

                            <tr>
                                <td>3</td>
                                <td>Javascript can only run in the browsers.</td>
                                <td>We can run Javascript outside the browser with the help of node js</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>

                <div className='mt-5'>
                    <h3>Q13.2 When should you use nodejs and when should you use mongodb</h3>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Node js</th>
                                <th>MongoDB</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Node js is a javascript run time environment. It helps us to run javascript outside the browser. Mostly we use node js to run Javascript on the server and also creating api for backend. </td>
                                <td>MongoDB is a No-sql database. When we need to store data into the database, we use mongoDB.</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className='mt-5'>
                    <h3>Q13.3 Differences between sql and nosql databases.</h3>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>SQL </th>
                                <th>No-SQL</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td> Sql stands for Structured Query Language</td>
                                <td>No-Sql stands for Non Structured Query Language</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td> Relational Database Management System</td>
                                <td>Non Relational Database management System</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td> This has predefined and fixed schema</td>
                                <td>This has dyanmic and flexible schema</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>

                <div className='mt-5'>
                <h3>13.4 What is the purpose of jwt and how does it work</h3>
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>JWT(Json Web Token)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><p className='text-start'>
                                JWT stands for Json Web Token. It is used to share the information between the client and the server securely. So, to establish a secure connection between the client and the server we use JWT. <br />
                                JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. JWT has mainly three parts seperated by dots named header, payload and signature.    
                                </p></td>

                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    );
};

export default Blogs;