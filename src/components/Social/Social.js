import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';
import './Social.css';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';

const Social = ({handleSignInWithGoogle}) => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    let location = useLocation();

    let from = location.state?.from?.pathname || "/"
    if(user){
        navigate(from, { replace: true });
    }
    return (
        <div>
            <div className='d-flex mt-3 align-items-center justify-content-center mb-3'>
                <div className='line-style'></div><div className='ms-1 me-1 fw-bold text-light'>Or</div><div className='line-style'></div>
            </div>
            <div >
                <button  onClick={handleSignInWithGoogle}  className='d-flex align-items-center justify-content-center mx-auto social-login-button'>
            <span className='google-size me-2'>sign in with</span>
                <FontAwesomeIcon className='fs-5 logo-backgound' icon={faGoogle}></FontAwesomeIcon>
                </button>
            </div>
        </div>
    );
};

export default Social;