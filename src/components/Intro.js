import React from 'react';
import { Link } from 'react-scroll';
import arrowDown from '../assets/gif/arrow-down.gif';
import SocialLinks from './SocialLinks';
import './intro.css';

export default function Intro() {

  return (
    <div className='relative flex flex-col justify-center h-screen' data-aos="flip-left" data-aos-duration="2500">
      <div className='flex flex-col items-start px-6 text-white xs:items-center xs:max-w-2xl sm:mx-auto z-[1]'>
        <div
        >
          {/* <h2 className='text-4xl font-archivo xs:text-center bg-clip-text bg-gradient-to-r test'>Hello, I'm</h2> */}
          <h1 className='text-6xl text-transparent font-archivo xs:text-center bg-clip-text bg-gradient-to-r from-violet to-hotpink-200'>Devon Batemon</h1>
          <p className='mt-4 mb-8 text-lg text-slate-300 xs:text-xl xs:text-center'>I am a <strong className='text-hotpink-200'>Software Developer</strong> that builds and designs responsive web applications.</p>
        </div>
        <div 
          className='flex items-center w-full sm:w-1/2 drop-shadow-lg xs:justify-center'
        >
          <Link className='w-1/2 px-6 py-3 mr-4 text-base font-bold text-center transition-all duration-150 ease-linear bg-transparent border-2 shadow outline-none md:mr-8 hover:scale-105 hover:cursor-pointer md:text-lg text-slate-300 rounded-tr-xl rounded-l-xl active:bg-hotpink-100 hover:shadow-lg focus:outline-none border-violet' to='contact' spy={true} smooth={true}>Contact</Link>
          <SocialLinks />
        </div>
      </div>
      <img className='absolute w-12 h-auto -translate-x-1/2 md:w-16 bottom-10 left-1/2' src={arrowDown} alt="Animated down arrow" />
    </div>
  )
}
