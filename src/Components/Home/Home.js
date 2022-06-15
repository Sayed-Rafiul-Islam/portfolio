import React, { useEffect, useState } from 'react';
import './Home.css'
const Home = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getBlogs = () => {
            fetch('blogs.json')
                .then(res => res.json())
                .then(data => setData(data))
        }
        getBlogs();
    }, [])
    return (
        <div >
            {
                data.length &&
                <div className='lg:mr-24 lg:mt-0 mt-36' data-aos="zoom-in-up" data-aos-anchor-placement="top-center">
                    <div className='lg:mt-36 lg:ml-0 ml-4 text-center'>
                        <h1 className='lg:text-5xl text-4xl text-white'>Sayed Rafiul Islam</h1>
                        <h2 className='text-2xl text-gray-600 mt-3'>Junior Web Developer</h2>
                    </div>
                    <div className='lg:mt-20 mt-10 lg:ml-0 ml-10'>
                        <img className='w-24 inline-block m-3 p-5 skills mx-2 rounded-lg' src="https://i.ibb.co/JrMsxTZ/css.png" alt="" />
                        <img className='w-24 inline-block m-3 p-5 skills mx-2 rounded-lg' src="https://i.ibb.co/Jz8Sg1x/express.png" alt="" />
                        <img className='w-24 inline-block m-3 p-5 skills mx-2 rounded-lg' src="https://i.ibb.co/8XkSbLj/html.png" alt="" />
                        <img className='w-24 inline-block m-3 p-5 skills mx-2 rounded-lg' src="https://i.ibb.co/YDHCHPk/java-Script.png" alt="" />
                        <img className='w-24 inline-block m-3 p-5 skills mx-2 rounded-lg' src="https://i.ibb.co/7KtrjJY/mongo.png" alt="" />
                        <img className='w-24 inline-block m-3 p-5 skills mx-2 rounded-lg' src="https://i.ibb.co/b7RWYxm/node.png" alt="" />
                        <img className='w-24 inline-block m-3 p-5 skills mx-2 rounded-lg' src="https://i.ibb.co/p1PR6Vk/react.png" alt="" />
                    </div>
                </div>
            }
        </div>
    );
};

export default Home;