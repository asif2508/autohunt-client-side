import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../firebase.init';
import Loading from '../Loading/Loading';
import Social from '../Social/Social';
import './Register.css';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        loading,
        user,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [message, setMessage] = useState('');   
    const [checkValue, setCheckValue] = useState(false);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();

    if(loading || updating){
        return <Loading></Loading>
    }
    if(user){
        navigate('/home');
    }
    const handleCreateUser = async (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const confirmPassword = event.target.confirmPassword.value;
        if(password.length >= 6){
            if(password === confirmPassword){
                await createUserWithEmailAndPassword(email, password);
                await updateProfile({displayName : name});
                await sendEmailVerification();
                
            }else{
                setMessage("Passwords didn't match!");
            }
        }else{
            setMessage('Password length should be at least 6!');
        }
        if(user){
            navigate('/home');
        }
    }
    const handleSignInWithGoogle =() =>{
        signInWithGoogle();
    }
    return (
        <div className='register-style'>
            <div className='login-form-style mx-auto'>
                <h3 className='mb-3'>Create a New account</h3>
                <form onSubmit={handleCreateUser}>
                <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="name"
                            placeholder="Your name"
                            className='input-box'
                            name='name'
                            required
                        />
                        <label htmlFor="floatingInputCustom">Your name</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                            className='input-box'
                            name='email'
                            required
                        />
                        <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                            className='input-box'
                            name='password'
                            required
                        />
                        <label htmlFor="floatingPasswordCustom">Password</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="ConfirmPassword"
                            className='input-box'
                            name='confirmPassword'
                            required
                        />
                        <label htmlFor="floatingPasswordCustom">Confirm Password</label>
                    </Form.Floating>
                        <Form.Group className="mt-3 mb-2" id="formGridCheckbox">
                            <Form.Check onClick={()=> setCheckValue(!checkValue)} className='text-light text-start' type="checkbox" label="Accept terms and conditions" />
                        </Form.Group>
                        
                        {error && <p className='text-danger mb-0 text-start'>{error.message}</p>}
                        {message && <p className='text-danger mb-0 text-start'>{message}</p>}
                    <input className={!checkValue ? 'w-100 mt-2 register-disabled' : 'submit-btn mt-2'} type="submit" value="Register" disabled={!checkValue}/>
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