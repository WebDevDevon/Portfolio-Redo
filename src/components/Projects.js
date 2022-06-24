import React, { useEffect } from 'react';
import { BsGithub } from 'react-icons/bs';
import { projects } from '../config/projectsArr';
import Heading from './Heading';

export default function Projects() {


    const projectsArr = projects; 

   

    return (
        <div id='projects' className='flex flex-row justify-center'>
            <div data-aos="flip-left" data-aos-duration="1000" className='w-full max-w-5xl px-6 py-20 text-white xs:px-10'>
                <div 
                    className='mb-4'
                >
                    <Heading section='Projects' heading={'Check out what I\'ve built!'} />
                </div>
                <ul 
                    className='bg-transparent'
                >
                    {projectsArr.map((project, index) => {
                        return (
                            <li
                                custom={index}
                                initial='hidden'
                                key={project.id}
                            >
                                <ProjectCard project={project} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

const ProjectCard = ({ project }) => {
    return (
        <>
            <div data-aos="flip-up" data-aos-duration="1000" className='px-4 py-8 mb-16 text-slate-300 md:flex md:flex-row md:items-center md:px-3 bg-space rounded-xl'>
                <div className='md:w-4/5'>
                    <div className='h-65 my-4 opacity-80'>
                        <a href={project.live_url} target='_blank' rel='noreferrer'>
                            <img className='object-cover object-top w-full h-full rounded-md shadow-lg' src={project.img_url} alt="" />
                        </a>
                    </div>
                </div>
                <div className='md:w-1/2 md:pl-6'>
                    <div>
                        <span className='text-[.85rem] text-hotpink-200'>{project.type}</span>
                        <a href={project.live_url} target='_blank' rel='noreferrer'>
                            <h2 className='mb-2 text-base font-bold text-white md:text-2xl'>{project.title}</h2>
                        </a>
                    </div>
                    <div className='mb-2'>
                        <a href={project.live_url} target='_blank' rel='noreferrer'>
                            {/* <h2 className='mb-2 text-base font-bold text-white md:text-xl md:hidden'>{project.title}</h2> */}
                        </a>
                        <p className='h-20 overflow-hidden md:h-16 md:text-lg md:text-justify'>{project.description}</p>
                    </div>
                    <div className='flex flex-row items-center mb-4'>
                        <a className='transition-all duration-200 ease-linear text-slate-400 hover:text-aqua hover:scale-110' href={project.github_url} target='_blank' rel='noreferrer'>
                            <BsGithub className='w-6 h-6 mr-6 md:w-7 md:h-7' />
                        </a>
                        <a className='px-3 py-1 text-base font-bold text-black rounded-md shadow outline-none bg-hotpink-200 hover:scale-105 active:bg-hotpink-100 hover:shadow-lg focus:outline-none md:px-5 md:py-2' href={project.live_url} target='_blank' rel='noreferrer'>
                            Live
                        </a>
                    </div>
                    <div>
                        <span className='text-sm text-slate-500'>{project.tech}</span>
                    </div>
                </div>
            </div>
        </>
    )
}