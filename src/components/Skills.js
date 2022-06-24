import React, { useEffect } from 'react'
import { skills } from '../config/skillsArr';
import Heading from './Heading';

export default function Skills() {
   
    const skillsArr = skills; 

  return (
    <div id='skills' className='bg-architect'>
        <div data-aos="flip-left" data-aos-duration="1000" className='flex flex-col items-center w-full max-w-5xl px-6 py-20 sm:px-10 xs:mx-auto'>
            <div 
                className='w-full'
            >
                <Heading section='Skills' heading='Technologies and languages' />
            </div>
            <div 
                className='flex flex-row justify-center w-full px-6 py-12 shadow-lg xs:px-12 sm:px-16 bg-space rounded-xl'
            >
                <ul 
                    className='grid w-full max-w-4xl grid-cols-2 text-sm text-slate-200 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 lg:gap-y-12'
                >
                    {skillsArr.map((skill, index) => {
                        return (
                            <li
                                custom={index}
                                key={index} 
                                className='flex flex-col items-center'
                            >
                                <SkillBadge skill={skill} />
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    </div>
  )
}

const SkillBadge = ({ skill }) => {
    return (
        <>
            <div data-aos="flip-up" data-aos-duration="1500" className={`skill-badge ${skill.background} ${skill.text}`}>
                {skill.icon}
            </div>
            <span>{skill.title}</span>
        </>
    )
}