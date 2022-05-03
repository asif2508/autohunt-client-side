import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../firebase.init';
import Social from '../Social/Social';
import './Register.css';
const Register = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    const handleSignInWithGoogle =() =>{
        signInWithGoogle();
    }
    return (
        <div className='register-style'>
            <div className='login-form-style mx-auto'>
                <h3 className='mb-3'>Create a New account</h3>
                <form>
                <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="name"
                            placeholder="Your name"
                            className='input-box'
                        />
                        <label htmlFor="floatingInputCustom">Your name</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                            className='input-box'
                        />
                        <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                            className='input-box'
                        />
                        <label htmlFor="floatingPasswordCustom">Password</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="ConfirmPassword"
                            className='input-box'
                        />
                        <label htmlFor="floatingPasswordCustom">Confirm Password</label>
                    </Form.Floating>
                        <Form.Group className="mt-3 mb-2" id="formGridCheckbox">
                            <Form.Check className='text-light text-start' type="checkbox" label="Accept terms and conditions" />
                        </Form.Group>
                    <input className='submit-btn mt-1' type="submit" value="Register" />
                </form>
                <p className='text-start mt-2'>Already have an account? <Link to='/login'>Login</Link></p>
                <Social
                handleSignInWithGoogle = {handleSignInWithGoogle}
                ></Social>
            </div>
            
        </div>
    );
};

export default Register;