import React from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItem.css';
const AddItem = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <div className='add-items-style'>
            <Container>
                <h3>Add Items</h3>
                <form className='addItem-form-style mx-auto p-3'>
                    {/* <p>Name</p> */}
                   <Row>
                       <Col xs={12} md={6} lg={6}>
                       <FloatingLabel
                        controlId="floatingInput"
                        label={user?.email}
                        className="mb-3">
                        <Form.Control type="email" name='email' placeholder="Email" disabled />
                    </FloatingLabel>

                    <FloatingLabel
                        controlId="floatingInput"
                        label="Car Name"
                        className="mb-3">
                        <Form.Control type="name" name='name' placeholder="Car Name" />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Supplier Name"
                        className="mb-3">
                        <Form.Control type="text" name='brand' placeholder="Supplier Name" required />
                    </FloatingLabel>
                    <FloatingLabel controlId="floatingTextarea2" label="Description">
                        <Form.Control
                            as="textarea"
                            placeholder="Description"
                            style={{ height: '100px' }}
                            className='mb-3'
                            name='desc'
                        />
                    </FloatingLabel>
                       </Col>
                       <Col xs={12} md={6} lg={6}>
                       <FloatingLabel
                        controlId="floatingInput"
                        label="Price"
                        className="mb-3">
                        <Form.Control type="number" name='price' placeholder="Price" required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Quantity"
                        className="mb-3">
                        <Form.Control type="number" name='quantity' placeholder="Quantity" required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Sold"
                        className="mb-3">
                        <Form.Control type="number" name='sold' placeholder="Sold" required />
                    </FloatingLabel>
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Image URL"
                        className="mb-3">
                        <Form.Control type="text" name='img' placeholder="Image URL" required />
                    </FloatingLabel>
                    <input className='submit-btn mt-1' type="submit" value="Add" />
                       </Col>
                   </Row>
                    
                </form>
            </Container>
        </div>
    );
};

export default AddItem;