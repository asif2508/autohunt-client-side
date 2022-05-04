import React, { useRef, useState } from 'react';
import { Button, Form, ToastContainer } from 'react-bootstrap';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import Social from '../Social/Social';
import auth from '../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { toast } from 'react-toastify';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
      const navigate = useNavigate();
      const emailRef = useRef('');
      const passwordRef = useRef('');
      const [message, setMessage] = useState('');
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    
    if(loading ){
        return <Loading></Loading>
    }
    if(user){
      navigate('/home');;
    }
    
  const handleSignIn =async event =>{
      event.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;
      await signInWithEmailAndPassword(email, password);
    }

  const handlePasswordReset = async event =>{
      event.preventDefault();
      const email = emailRef.current.value;
      if(email){
          await sendPasswordResetEmail(email);
          toast("Password reset email sent!");
      }
      else{
          setMessage("Enter your email!");
      }
  }
    const handleSignInWithGoogle =() =>{
        signInWithGoogle();
    }
    return (
        <div className='login-style'>
            <div className='login-form-style mx-auto'>
                <h3 className='mb-3'>Login into Your account</h3>
                <form onSubmit={handleSignIn}>
                    <Form.Floating className="mb-3">
                        <Form.Control
                            id="floatingInputCustom"
                            type="email"
                            placeholder="name@example.com"
                            className='input-box'
                            ref={emailRef}
                        />
                        <label htmlFor="floatingInputCustom">Email address</label>
                    </Form.Floating>
                    <Form.Floating>
                        <Form.Control
                            id="floatingPasswordCustom"
                            type="password"
                            placeholder="Password"
                            className='input-box'
                            ref={passwordRef}
                        />
                        <label htmlFor="floatingPasswordCustom">Password</label>
                    </Form.Floating>
                    {error && <p className='text-start text-danger'>{error.message}</p> }
                    {message && <p className='text-start text-danger'>{message}</p> }
                    <div className='d-flex justify-content-between'>
                        <Form.Group className="mt-2" id="formGridCheckbox">
                            <Form.Check className='text-light' type="checkbox" label="Remember me" />
                        </Form.Group>
                        <Button onClick={handlePasswordReset} variant="link">Reset Password</Button>
                    </div>
                    <input className='submit-btn mt-1' type="submit" value="Login" />
                </form>
                <p className='text-start mt-2'>Don't have an account? <Link to='/register'>Register now</Link></p>
                <Social
                handleSignInWithGoogle = {handleSignInWithGoogle}
                ></Social>
            </div>
            <ToastContainer/>
        </div>
    );
};

export default Login;