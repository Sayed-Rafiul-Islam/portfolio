import React, { useEffect, useState } from 'react';
import Blog from './Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        const getBlogs = () => {
            fetch('blogs.json')
                .then(res => res.json())
                .then(data => setBlogs(data))
        }
        getBlogs();
    }, [])
    return (
        <div className='w-3/4 mt-12 lg:mx-0 mx-auto'>
            <h1 className='text-5xl lg:ml-28 mb-8 text-center text-teal-500'><b>B<span className='text-white'>logs</span></b></h1>
            {
                blogs.map(blog => <Blog
                    key={blog.id}
                    blog={blog}
                ></Blog>)
            }
        </div>
    );
};

export default Blogs;