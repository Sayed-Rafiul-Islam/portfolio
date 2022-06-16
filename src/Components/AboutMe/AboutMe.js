import React, { useEffect, useState } from 'react';

const AboutMe = () => {
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
        <div className='lg:w-1/2 mx-5 text-center lg:mr-24'>
            {
                data.length &&
                <div data-aos="flip-up">
                    <h1 className='text-5xl text-white mt-12 mb-8'><b>About <span className='text-teal-500'>Me</span></b></h1>
                    <i className='text-gray-600'>I am a Junior Web Developer <br />
                        I build innovative and dynamic web applications. Extremely enthusiastic task-driven mentality and communication skills to deliver the perfect user interference suited to my employer's needs.
                        <br /> <br />
                        Why do I do it : <br />
                        I like creating things and solving puzzles. When I work on making a web application, first I'm needed to build the client-side brick by brick, and then I have to make interfaces that require a complex problem-solving mind. That's why I do what I do. It's like a painting to me or an unsolved puzzle
                        <br /> <br />
                        How do I provide value : <br />
                        Making a website isn't just about making it look good. It's more about how well it serves its true purpose. So I always intend to make web applications that don't just look good but serve it's the true purpose and give the user a great experience</i>
                </div>
            }
        </div>
    );
};

export default AboutMe;