import React, { useState } from 'react';
import { MenuIcon, XIcon, } from '@heroicons/react/outline';
import { EmojiHappyIcon, DocumentTextIcon, CollectionIcon, PhoneIcon } from '@heroicons/react/solid';
import { Link } from 'react-scroll';

export default function NavBar() {
  const [active, setActive] = useState(false);

  const toggleMenu = () => {
    setActive(!active);
    console.log('toggle');
  }

  return (
    <>
      <header className='fixed top-0 z-10 w-full px-6 py-4 text-slate-500 bg-navy sm:px-10 sm:py-6'>
          <div className='relative flex items-center justify-between lg:max-w-6xl lg:mx-auto font-archivo'>
            <h1 className='text-sm font-light text-transparent text-white bg-clip-text bg-gradient-to-r from-violet to-hotpink-200 md:text-base hover:cursor-pointer'>
              <div>DevonTheDev</div>
            </h1>
            <button onClick={toggleMenu}>
                <MenuIcon className='w-6 h-6 md:hidden'/>
            </button>
            <nav className='hidden w-1/2 md:block'>
                <ul className='flex'>
                    <li className='w-1/2 transition-all duration-200 ease-linear hover:text-aqua'>
                      <Link
                      className='block w-full text-right hover:cursor-pointer' to='skills' spy={true} smooth={true}>Skills</Link>
                    </li>
                    <li className='w-1/2 transition-all duration-200 ease-linear hover:text-aqua'>
                      <Link className='block w-full text-right hover:cursor-pointer' to='about' spy={true} smooth={true}>About</Link>
                    </li>
                    <li className='w-1/2 transition-all duration-200 ease-linear hover:text-aqua'>
                      <Link className='block w-full text-right hover:cursor-pointer' to='projects' spy={true} smooth={true} >Projects</Link>
                    </li>
                    <li className='w-1/2 transition-all duration-200 ease-linear hover:text-aqua'>
                      <Link className='block w-full text-right hover:cursor-pointer' to='contact' spy={true} smooth={true}>Contact</Link>
                    </li>
                </ul>
            </nav>
          </div>
      </header>
      <Menu active={active} setActive={setActive} />
    </>
  )
}

const Menu = ({ active, setActive}) => {
  return (
    <div className={active ? 'side-bar top-0 transition-all ease-in-out duration-300' : 'side-bar -top-1/2'}>
      <div className='flex items-center justify-between py-4 font-archivo'>
        <h1 className='text-sm font-light text-transparent text-white bg-clip-text bg-gradient-to-r from-violet to-hotpink-200 md:text-base hover:cursor-pointer' >nathankim.dev</h1>
        <button onClick={() => setActive(!active)}>
          <XIcon className='w-6 h-6'/>
        </button>
      </div>
      <nav className='pb-6'>
        <ul className='text-white text-md'>
          <li className='flex items-center justify-start h-10 px-2 border-slate-700 border-b-[1px]'>
            <DocumentTextIcon className='w-6 h-6 mr-4'/>
            <h3 className='w-full'>
              <Link onClick={() => setActive(false)} className='block w-auto transition-all duration-200 ease-linear hover:cursor-pointer hover:text-aqua' to='skills' spy={true} smooth={true}>Skills</Link>
            </h3>
          </li>
          <li className='flex items-center justify-start h-10 px-2 border-slate-700 border-b-[1px]'>
            <EmojiHappyIcon className='w-6 h-6 mr-4'/>
            <h3 className='w-full'>
              <Link onClick={() => setActive(false)} className='block w-auto transition-all duration-200 ease-linear hover:cursor-pointer hover:text-aqua' to='about' spy={true} smooth={true}>About</Link>
            </h3>
          </li>
          <li className='flex items-center justify-start h-10 px-2 border-b-[1px] border-slate-700'>
            <CollectionIcon className='w-6 h-6 mr-4'/>
            <h3 className='w-full'>
              <Link onClick={() => setActive(false)} className='block w-auto transition-all duration-200 ease-linear hover:cursor-pointer hover:text-aqua' to='projects' spy={true} smooth={true}>Projects</Link>
            </h3>
          </li>
          <li className='flex items-center justify-start h-10 px-2 border-b-[1px] border-slate-700'>
            <PhoneIcon className='w-6 h-6 mr-4'/>
            <h3 className='w-full'>
              <Link onClick={() => setActive(false)} className='block w-auto transition-all duration-200 ease-linear hover:cursor-pointer hover:text-aqua' to='contact' spy={true} smooth={true}>Contact</Link>
            </h3>
          </li>
        </ul>
      </nav>
    </div>
  )
}
