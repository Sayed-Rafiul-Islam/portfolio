import React from 'react';
import './project.css';
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import { EffectCube, Pagination } from "swiper";

const Project = ({ project }) => {
    const { title, image1, image2, image3, image4, description, liveLink, clientSide, serverSide, points } = project
    return (
        <div className='body' data-aos="fade-left">
            <div className='overflow-hidden'>
                <>
                    <Swiper
                        style={{ height: "200px" }}
                        effect={"cube"}
                        grabCursor={true}
                        cubeEffect={{
                            shadow: true,
                            slideShadows: true,
                            shadowOffset: 20,
                            shadowScale: 0.94,
                        }}
                        pagination={true}
                        modules={[EffectCube, Pagination]}
                        className="mySwiper"
                    >
                        <SwiperSlide>
                            <img className='img' src={image1} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='img' src={image2} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='img' src={image3} alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img className='img' src={image4} alt="" />
                        </SwiperSlide>
                    </Swiper>
                </>

            </div>
            <div className='h-36 mx-3 overflow-y-scroll'>
                <h1 className='text-3xl my-3 text-teal-500'><b>{title}</b></h1>
                <a className='text-cyan-500 hover:text-white mr-5' target=' _blank' href={liveLink}><i>Live Site</i></a>
                <a className='text-cyan-500 hover:text-white mr-5' target=' _blank' href={clientSide}><i>Client Side Code</i></a>
                {
                    serverSide && <a className='text-cyan-500 hover:text-white mr-5' target=' _blank' href={serverSide}><i>Server Side Code</i></a>
                }
                <p className='text-white my-3'>{description}</p>
                <b className='text-xl text-cyan-500'>Key Features :</b>
                <ul>
                    {
                        points.map((point, index) => <li className='text-white'>{index + 1}. {point}</li>)
                    }
                </ul>
            </div>
        </div>
    );
};

export default Project;