import React, { useEffect, useState } from 'react';
import Project from './Project';
import './project.css'

const Portfolio = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const handleAll = () => {

        fetch('projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))

    }

    const handleTypeScript = () => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                const typeScriptProjects = data.filter(project => project.code === 'typeScript');
                setProjects(typeScriptProjects)
            })
    }
    const handleJavaScript = () => {
        fetch('projects.json')
            .then(res => res.json())
            .then(data => {
                const typeScriptProjects = data.filter(project => project.code === 'javaScript');
                setProjects(typeScriptProjects)
            })
    }
    return (
        <div className='w-full lg:w-3/5 lg:mr-8 mx-5 lg:my-0 my-5' data-aos="fade-up">
            <h1 className='text-5xl text-white ml-80 my-10'><b>My <span className='text-teal-500'>Projects</span></b></h1>
            <div className='flex flex-col'>
                <div className='lg:ml-96 lg:pl-72' data-aos="fade-right">
                    <button className='code codex mr-3 text-teal-500' onClick={handleAll}>All</button>
                    <button className='code mr-3 text-teal-500' onClick={handleJavaScript}>JavaScript</button>
                    <button className='code mr-3 text-teal-500' onClick={handleTypeScript}>TypeScript</button>
                </div>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-10 mt-5'>
                    {
                        projects.map(project => <Project
                            key={project.id}
                            project={project}
                        ></Project>)
                    }
                </div>
            </div>
        </div >
    );
};

export default Portfolio;