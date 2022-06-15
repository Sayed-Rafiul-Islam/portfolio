import React from 'react';
import './Blog.css'

const Blog = ({ blog }) => {
    const { heading, details } = blog;
    return (
        <div className='blog-container lg:mr-36 lg:ml-72 my-5 p-5' data-aos="fade-up">
            <h1 className='text-3xl mb-6 text-teal-500'>{heading}</h1>
            <i className='text-gray-600'>{details}</i>
        </div>
    );
};

export default Blog;