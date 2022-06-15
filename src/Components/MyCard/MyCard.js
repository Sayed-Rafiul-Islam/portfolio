import React, { useState } from 'react';
import './MyCard.css'
import myImage from '../../images/myImage.png'
import { Link } from 'react-router-dom';

const MyCard = () => {
    const [visible, setVisible] = useState(false)
    return (
        <div className='z-50'>
            <div className='display card grid-cols-4 ml-5 rounded-lg text-center text-white shadow-xl'>
                <img className='w-1/2 mx-auto pt-20' src={myImage} alt="" />
                <h1 className='text-4xl mt-5'><b>Sayed Rafiul Islam</b></h1>
                <h1 className='text-xl mt-3'>Junior Web Developer</h1>
                <div className='mt-5'>
                    <a className='mx-3' target=' _blank' href='https://www.linkedin.com/in/sayed-rafiul-islam/'><img className='w-1/12 link-pic' src="https://i.ibb.co/Wxp1dLr/linkedin.png" alt="" /></a>
                    <a className='mx-3' target=' _blank' href='https://github.com/Sayed-Rafiul-Islam'><img className='w-1/12 link-pic' src="https://i.ibb.co/fF2DJ7F/github.png" alt="" /></a>
                    <a className='mx-3' target=' _blank' href='https://www.facebook.com/rafid.rafid.336'><img className='w-1/12   link-pic' src="https://i.ibb.co/x7TnXXp/facebook.png" alt="" /></a>
                </div>
                <a className='resume block mt-16 w-1/2 mx-auto' target=' _blank' href='https://drive.google.com/file/d/14iglwy_vSYwPTxFA-tzzUP42Dcon3AKT/view?usp=sharing'>Download Resume</a>

                <footer className='mt-36'><small>© 2022 All rights reserved</small></footer>
            </div>

            <button onClick={() => setVisible(true)} className='text-teal-500 btn-menu'>Menu</button>

            <div className={visible ? 'card-sm2 ml-2 rounded-lg text-center text-white shadow-xl' : 'card-sm1 ml-2 rounded-lg text-center text-white shadow-xl'}>
                <button onClick={() => setVisible(false)} className='text-white ml-80 pl-10 mt-2'>X</button>
                <img className='w-1/2 mx-auto pt-10' src={myImage} alt="" />
                <h1 className='text-4xl mt-5'><b>Sayed Rafiul Islam</b></h1>
                <h1 className='text-xl mt-3'>Junior Web Developer</h1>
                <div>
                    <div className='flex flex-col w-3/4 mx-auto mt-6'>
                        <Link className='link-sm my-2 text-white' to='/home'>HOME</Link >
                        <Link className='link-sm my-2 text-white' to='/portfolio'>PROJECTS</Link>
                        <Link className='link-sm my-2 text-white' to='/blogs'>BLOGS</Link>
                        <Link className='link-sm my-2 text-white' to='/contact'>CONTACT</Link>
                        <Link className='link-sm my-2 text-white' to='/aboutMe'>ABOUT ME</Link>
                    </div >
                </div>
                <div className='mt-5'>
                    <a className='mx-3' target=' _blank' href='https://www.linkedin.com/in/sayed-rafiul-islam/'><img className='w-1/12 link-pic' src="https://i.ibb.co/Wxp1dLr/linkedin.png" alt="" /></a>
                    <a className='mx-3' target=' _blank' href='https://github.com/Sayed-Rafiul-Islam'><img className='w-1/12 link-pic' src="https://i.ibb.co/fF2DJ7F/github.png" alt="" /></a>
                    <a className='mx-3' target=' _blank' href='https://www.facebook.com/rafid.rafid.336'><img className='w-1/12 link-pic' src="https://i.ibb.co/x7TnXXp/facebook.png" alt="" /></a>
                </div>
                <a className='resume block mt-16 w-1/2 mx-auto' target=' _blank' href='https://drive.google.com/file/d/14iglwy_vSYwPTxFA-tzzUP42Dcon3AKT/view?usp=sharing'>Download Resume</a>

                <footer className='mt-20'><small>© 2022 All rights reserved</small></footer>
            </div>

        </div>
    );
};

export default MyCard;