import React from 'react'
import Icon from '../assets/png/dev-icon.png';

export default function Footer() {
  return (
    <div className='absolute bottom-0 w-full bg-transparent rounded-t-lg flex justify-center w-auto'>
        <img className='rounded-x4 h-10 mb-5' src={Icon} alt="" />
    </div>
  )
}
