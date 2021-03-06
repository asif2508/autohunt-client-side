import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../Loading/Loading';
import PageTitle from '../PageTitle/PageTitle';
import Social from '../Social/Social';
import './Register.css';
const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error
      ] = useCreateUserWithEmailAndPassword(auth);
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [message, setMessage] = useState('');   
    const [checkValue, setCheckValue] = useState(false);
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [updateProfile, updating] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const [token] = useToken(user || user1);

    if(loading){
        return <Loading></Loading>
    }
    if(token){
        navigate('/');
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
    }
    const handleSignInWithGoogle =() =>{
        signInWithGoogle();
    }
    return (
        <div className='register-style'>
                  <PageTitle title="Register"></PageTitle>
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
                    {error && <p className='text-danger  mb-0 mt-2 text-start'>{error.message}</p>}
                        {message && <p className='text-danger  mb-0 mt-2 text-start'>{message}</p>}
                        <Form.Group className="mt-3 mb-2" id="formGridCheckbox">
                            <Form.Check onClick={()=> setCheckValue(!checkValue)} className='text-light text-start' type="checkbox" label="Accept terms and conditions" />
                        </Form.Group>
                        
                    <input className={!checkValue ? 'w-100 mt-2 register-disabled' : 'submit-btn mt-2'} type="submit" value="Register" disabled={!checkValue}/>
                </form>
                <p className='text-start mt-2'>Already have an account? <Link to='/login'>Login</Link></p>
                <Social
                handleSignInWithGoogle = {handleSignInWithGoogle}
                token={token}
                ></Social>
            </div>
            
        </div>
    );
};

export default Register;