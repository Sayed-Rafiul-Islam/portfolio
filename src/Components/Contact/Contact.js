import React, { useEffect, useState } from 'react';
import './Contact.css'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const getBlogs = () => {
            fetch('blogs.json')
                .then(res => res.json())
                .then(data => setData(data))
        }
        getBlogs();
    }, [])

    const { register, handleSubmit, reset } = useForm();
    const onSend = async data => {
        const { name, email, subject, message } = data;
        const templateParams = {
            name,
            email,
            subject,
            message
        };

        await emailjs.send('gmail', 'template_x433h8r', templateParams, 'yPLPt_6HKyTfB4Y2L');
        toast.success('Message Sent');
        reset();
    }
    return (
        <div className='lg:w-3/5 w-3/4 lg:mx-0 mx-auto'>
            {
                data.length &&
                <div className='' data-aos="flip-down" data-aos-anchor-placement="top-center" >
                    <b className='text-5xl text-center block text-white mt-12 mb-8'>Contact <span className='text-teal-500'>Me</span></b>
                    <form className='lg:ml-48 ml-8' onSubmit={handleSubmit(onSend)}>
                        <div className='lg:flex w-1/2'>
                            <div className='mr-3'>
                                <input
                                    className='contact'
                                    type="text"
                                    name='name'
                                    placeholder='Name'
                                    {...register('name', {
                                        required: { value: true, message: 'Please enter your name' }
                                    })}
                                ></input>
                            </div>
                            <div>
                                <input
                                    className='contact'
                                    type="email"
                                    name='email'
                                    placeholder='Email'
                                    {...register('email', {
                                        required: { value: true, message: 'Please enter your email' }
                                    })}
                                ></input>
                            </div>
                        </div>
                        <div className='lg:w-3/4'>
                            <input
                                className='contact lg:w-11/12'
                                type="text"
                                name='subject'
                                placeholder='Email Subject here'
                                {...register('subject', {
                                    required: { value: true, message: 'Please enter email subject' }
                                })}
                            />
                        </div>
                        <div className='lg:w-3/4'>
                            <textarea
                                className='contact w-60 lg:w-11/12'
                                type='text'
                                name="message"
                                placeholder='Message'
                                cols="40"
                                rows="7"
                                {...register('message', {
                                    required: { value: true, message: 'Write a message' }
                                })}
                            ></textarea>
                        </div>
                        <button className='btn lg:w-1/4 w-60'>Send</button>
                    </form>
                    <ToastContainer
                        theme="dark"
                        position='top-center'
                    />
                </div>
            }

        </div>
    );
};

export default Contact;