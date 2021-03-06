import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from '../Social/Social';
import auth from '../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useToken from '../../hooks/useToken';
import PageTitle from '../PageTitle/PageTitle';

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
    const [signInWithGoogle, user1] = useSignInWithGoogle(auth);
    const [token] = useToken(user || user1);
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    if (loading) {
        return <Loading></Loading>
    }
    if (token) {
        navigate(from, { replace: true });
    }
    
    const handleSignIn = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        await signInWithEmailAndPassword(email, password);
    }

    const handlePasswordReset = async event => {
        event.preventDefault();
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            setMessage('');
            toast("Password reset email sent!");

        }
        else {
            setMessage("Enter your email!");
        }
    }
    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    }
    return (
        <div className='login-style'>
                  <PageTitle title="Login"></PageTitle>
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
                            required
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
                            required
                        />
                        <label htmlFor="floatingPasswordCustom">Password</label>
                    </Form.Floating>
                    {error && <p className='text-start text-danger mb-0 mt-2'>{error.message}</p>}
                    {message && <p className='text-start text-danger  mb-0 mt-2'>{message}</p>}
                    <div className='d-flex justify-content-between'>
                        <Form.Group className="mt-2" id="formGridCheckbox">
                            <Form.Check className='text-light' type="checkbox" label="Remember me" />
                        </Form.Group>
                        <a className='reset-pass mt-2' onClick={handlePasswordReset}>Reset Password</a>
                    </div>
                    <input className='submit-btn mt-1' type="submit" value="Login" />
                </form>
                <p className='text-start mt-2'>Don't have an account? <Link to='/register'>Register now</Link></p>
                <Social
                    handleSignInWithGoogle={handleSignInWithGoogle}
                    token={token}
                ></Social>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Login;