import React from 'react';
import './Contact.css'
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
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
        <div className='w-3/5' data-aos="flip-down">
            <b className='text-5xl text-center block text-white mt-12 mb-8'>Contact <span className='text-teal-500'>Me</span></b>
            <form className='ml-48' onSubmit={handleSubmit(onSend)}>
                <div className='flex w-1/2'>
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
                <div className='w-1/2'>
                    <input
                        className='contact w-full'
                        type="text"
                        name='subject'
                        placeholder='Email Subject here'
                        {...register('subject', {
                            required: { value: true, message: 'Please enter email subject' }
                        })}
                    />
                </div>
                <div className='w-1/2'>
                    <textarea
                        className='contact w-full'
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
                <button className='btn w-1/4'>Send</button>
            </form>
            <ToastContainer
                theme="dark"
                position='top-center'
            />

        </div>
    );
};

export default Contact;