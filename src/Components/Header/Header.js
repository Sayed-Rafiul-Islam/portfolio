import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink';
import './Header.css'


const Header = () => {
    return (
        <div className='grid-cols-1'>
            <div className='flex flex-col w-28 overflow-x-hidden display'>
                <CustomLink className='link text-left text-sm' to='/home'><span className='tab'>HOME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className='tab1'>HOME</span></CustomLink >
                <CustomLink className='link text-left text-sm' to='/portfolio'><span className='tab'>PROJECTS</span><span className='tab1'>PROJECTS</span></CustomLink>
                <CustomLink className='link text-left text-sm' to='/blogs'><span className='tab'>BLOGS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span className='tab1'>BLOGS</span></CustomLink>
                <CustomLink className='link text-left text-sm' to='/contact'><span className='tab'>CONTACT&nbsp;&nbsp;</span><span className='tab1'>CONTACT</span></CustomLink>
                <CustomLink className='link text-left text-sm' to='/aboutMe'><span className='tab'>ABOUT&nbsp;ME&nbsp;</span><span className='tab1'>ABOUT&nbsp;ME</span></CustomLink>
            </div >
        </div>
    );
};

export default Header;