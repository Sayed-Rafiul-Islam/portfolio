import React from 'react';
import { useNavigate } from 'react-router';
import './NotFound.css'

const NotFound = () => {
    const navigate = useNavigate();
    const handleHome = () => {
        navigate('/home')
    }
    return (
        <div className='body404 mx-auto text-center relative overflow-hidden'>
            <h1 className='absolute four text-teal-500'><b>404</b></h1>
            <p className='text-gray-400 lg:mt-80 mt-96 pt-12 lg:pt-0'>Looks like you are lost</p>
            <button onClick={handleHome} className='btn-home mt-6'>Go Back</button>
        </div>
    );
};

export default NotFound;