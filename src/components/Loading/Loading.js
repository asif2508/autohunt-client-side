
import React from 'react';
import { Spinner } from 'react-bootstrap';
import Header from '../Header/Header';
import './Loading.css';
const Loading = () => {
    return (
        <div>
            <div  className='loading-style'>
            <Spinner animation="border" variant="primary" />
            </div>
              
        </div>
    );
};

export default Loading;