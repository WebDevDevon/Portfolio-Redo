import Heading from './Heading';
import React, { useState } from "react";
import Viewer from 'react-viewer';
import Code from '../assets/png/coding.jpg';
import Paint from '../assets/png/Paint.png';
import Banner from '../assets/png/Banner.png';



export default function About() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visible, setVisible] = useState(false);
    let images = [
      {
        src: Code,
        title: "image title 1"
      },
      {
        src: Banner,
        title: "image title 2"
      },
      {
        src: Paint,
        title: "image title 3"
      }
    ];

  return (
    <div id='about' className='h-auto text-white'>
        <div data-aos="flip-left" data-aos-duration="1000" className='w-full h-auto max-w-5xl px-6 py-20 shadow-lg xs:px-10 xs:mx-auto'>
            <div 
                className='mb-4'
            >
                <Heading section='About' heading='Get to know me!' />
            </div>
            <div data-aos="flip-left" data-aos-duration="1000"
                className='px-4 py-10 bg-space rounded-xl xs:py-14 xs:px-8'
            >
                <div className='text-base xs:text-lg text-slate-300 md:text-xl'>
                    <p className='mb-4 text-left xs:mb-6'>I am a software developer that has a background in digital art. I combine my skills as an artist and my passion for technology to make my ideas come to life. <strong className='font-bold text-hotpink-200'>I am a creator</strong>.</p>
                    <p className='hidden mb-4 text-left xs:mb-6 md:block'>
                    Programming allows me to showcase my artistic capabilities, and that makes me ecstatic at what my ever-growing skillset can achieve. I want to be working with cutting-edge technology and building tools that will leave people amazed everytime they visit a site I've worked on or created. The most fufilling thing about programming is manifesting your vision and your ideas. That's why I am passionate about programming. 
                    </p>
                    <p className='mb-4 text-left xs:mb-6'>Outside of coding I like to play competitive online games, Collect cards such as Pokemon and NBA Prizm, and create art with Photoshop and Clip Studio Paint.</p>
                    <div className='px-3 py-2 text-gray-400 border-l-8 border-hotpink-200 bg-denim xs:py-4 xs:px-6'>
                        <div>
                            <h1 className='text-center'>Things I've Created</h1>
                            <div className='flex'>
                                {images.map((item, index) => {
                                return (
                                    <div key={index.toString()} className="img-item m-5">
                                    <img
                                        alt="aaaaa"
                                        src={item.src}
                                        width="400px"
                                        onClick={() => {
                                        setVisible(true);
                                        setActiveIndex(index);
                                        }}
                                    />
                                    </div>
                                );
                                })}
                            </div>
                            <Viewer
                                visible={visible}
                                onClose={() => {
                                setVisible(false);
                                }}
                                zoomSpeed={0.2}
                                images={images}
                                activeIndex={activeIndex}
                                downloadable
                            />
                                {/* <button onClick={() => { setVisible(true); } }>show</button>
                                <Viewer
                                visible={visible}
                                onClose={() => { setVisible(false); } }
                                images={[{src: Code, alt: ''}]}
                                />
                                </div>
                                <img className='rounded-x4 h-64 mb-5' onClick={() => { setVisible(true); } } src={Code} alt="" />
                                <img className='rounded-x4 h-64 mb-5' src={Code} alt="" />  */}
                        </div>
                </div>
            </div>
        </div>
    </div>
  </div>)
}
