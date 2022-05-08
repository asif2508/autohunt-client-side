import React from 'react';
import { Col, Container, FloatingLabel, Form, Row} from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import './AddItem.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PageTitle from '../PageTitle/PageTitle';
const AddItem = () => {
    const [user, loading] = useAuthState(auth);

    const handleAddItem = event =>{
        event.preventDefault();
        const email = user?.email;
        const name = event.target.name.value;
        const brand = event.target.brand.value;
        const desc = event.target.desc.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const sold = event.target.sold.value;
        const img = event.target.img.value;
        const data ={email, name, brand, desc, price, quantity, sold, img};
        fetch('https://enigmatic-sands-65553.herokuapp.com/additems', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                })
        event.target.reset();
        toast('Information added successfully');
        
    }
    return (
        <div className='add-items-style'>
                  <PageTitle title="Add Item"></PageTitle>
            <Container>
                <h3>Add Items</h3>
                <form onSubmit={handleAddItem} className='addItem-form-style mx-auto p-3'>
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
                        <Form.Control type="name" name='name' placeholder="Car Name" required/>
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
            <ToastContainer/>
        </div>
    );
};

export default AddItem;