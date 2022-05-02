import React from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
const Login = () => {
    return (
        <div className='login-style'>
            <div className='login-form-style mx-auto'>
                <h3 className='mb-3'>Login into Your account</h3>
                <form>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                            className='input-box'
                        />
                        <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                            className='input-box'
                        />
                        <label htmlFor="floatingPasswordCustom">Password</label>
                    </Form.Floating>
                    <div className='d-flex justify-content-between'>
                        <Form.Group className="mt-2" id="formGridCheckbox">
                            <Form.Check className='text-light' type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button variant="link">Reset Password</Button>
                    </div>
                    <input className='submit-btn mt-1' type="submit" value="Login" />
                </form>
                <p className='text-start mt-2'>Don't have an account? <Link to='/register'>Register now</Link></p>
                <Social></Social>
            </div>
            
        </div>
    );
};

export default Login;