import React, { useEffect } from 'react';
import './Home1.css'
const Home1 = () => {
    useEffect(() => {
        const getBlogs = () => {
            fetch('blogs.json')
                .then(res => res.json())
                .then(data => (data))
        }
        getBlogs();
    }, [])
    return (
        <div className='lg:mr-24'>
            <div className='lg:mt-36 text-center'>
                <h1 className='lg:text-5xl text-4xl text-white'>Sayed Rafiul Islam</h1>
                <h2 className='text-2xl text-gray-600 mt-3'>Junior Web Developer</h2>
            </div>
            <div className='lg:mt-20'>
                <img className='w-24 inline-block p-5 skills mx-2 rounded-lg' src="https://i.ibb.co/JrMsxTZ/css.png" alt="" />
                <img className='w-24 inline-block p-5 skills mx-2 rounded-lg' src="https://i.ibb.co/Jz8Sg1x/express.png" alt="" />
                <img className='w-24 inline-block p-5 skills mx-2 rounded-lg' src="https://i.ibb.co/8XkSbLj/html.png" alt="" />
                <img className='w-24 inline-block p-5 skills mx-2 rounded-lg' src="https://i.ibb.co/YDHCHPk/java-Script.png" alt="" />
                <img className='w-24 inline-block p-5 skills mx-2 rounded-lg' src="https://i.ibb.co/7KtrjJY/mongo.png" alt="" />
                <img className='w-24 inline-block p-5 skills mx-2 rounded-lg' src="https://i.ibb.co/b7RWYxm/node.png" alt="" />
                <img className='w-24 inline-block p-5 skills mx-2 rounded-lg' src="https://i.ibb.co/p1PR6Vk/react.png" alt="" />
            </div>
        </div>
    );
};

export default Home1;