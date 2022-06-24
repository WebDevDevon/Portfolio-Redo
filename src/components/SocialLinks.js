import React from 'react'
import { BsLinkedin, BsGithub, BsTwitter, } from 'react-icons/bs';
import { GiScrollUnfurled } from 'react-icons/gi';
import resume from '../assets/Devon-Batemon.pdf'

export default function SocialLinks() {
  return (
    <>
        <div className='flex px-2 py-2 bg-gray-900 rounded-full md:px-4 md:py-3 text-slate-400'>
            <a href={resume} target='_blank' rel='noreferrer'  data-bs-toggle="tooltip" data-bs-placement="top" title="Resume">
              <GiScrollUnfurled className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-amber-100 hover:scale-110'/>
            </a>
            <a href='https://github.com/WebDevDevon' target='_blank' rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="top" title="Github">
              <BsGithub className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-purple-500 hover:scale-110'/>
            </a>
            <a href='https://www.linkedin.com/in/devon-batemon-1a566b112/' target='_blank' rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="top" title="Linkedin">
              <BsLinkedin className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-blue-600 hover:scale-110'/>
            </a>
            <a href='https://twitter.com/BatemonDevon' target='_blank' rel='noreferrer' data-bs-toggle="tooltip" data-bs-placement="top" title="Twitter">
              <BsTwitter className='w-6 h-6 mx-2 transition-all duration-200 ease-linear hover:text-blue-400 hover:scale-110'/>
            </a>
        </div>
    </>
  )
}
