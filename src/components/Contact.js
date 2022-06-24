// import { MdEmail } from 'react-icons/md';
import SocialLinks from './SocialLinks';
import Heading from './Heading';
import Footer from './Footer';
import Tiny from '../assets/gif/mail.gif';

// const endpoint = 'https://public.herotofu.com/v1/'; 

export default function Contact() {   
    
  return (
    <div data-aos="fade-right" data-aos-duration="1000" id='contact' className='relative flex flex-col items-center justify-center'>
        <div className='w-full max-w-5xl'>
            <div 
                className='w-full px-6 mb-4 xs:px-10'
            >
                <Heading section='Contact' heading={'Let\'s chat!'} />
            </div>
        </div>
        <div 
            className='w-full px-10 xs:mx-auto xs:max-w-md xs:px-8 md:px-6'
        >
            <div className='flex justify-center w-auto '>
            <img className='h-32 mb-10 rounded-md shadow-lg' src={Tiny} alt="" />
                {/* <MdEmail className='w-auto h-20 mb-8 shadow-md text-slate-100' /> */}
            </div>
            <form
                className='w-auto mb-20' 
                // action={endpoint}
                method='POST'
                name='contact-form'
                data-netlify="true"
                netlify
                onSubmit="submit"
            >
                <div className='mb-6 xs:mb-8'>
                    <input 
                        type="text" 
                        placeholder='Your name *'
                        name='name'
                        className='contact-input'
                        required
                    />
                </div>
                <div className='mb-6 xs:mb-8'>
                    <input 
                        type="email" 
                        placeholder='Your email *'
                        name='email'
                        className='contact-input'
                        required
                    />
                </div>
                <div className='mb-8 xs:h-20'>
                    <textarea
                        placeholder='Your message *'
                        name='message'
                        className='h-full contact-input' 
                        required
                    />
                </div>
                <div className="flex flex-col items-center w-full">
                    <button
                        className="px-6 py-2 mb-8 text-black font-bold transition-all duration-150 ease-linear rounded-lg shadow outline-none xxs:w-full md:text-lg active:bg-hotpink-100 hover:bg-green-600 hover:text-white hover:scale-105 hover:shadow-lg focus:outline-none bg-hotpink-200"
                        type="submit">
                        Send a message
                    </button>
                    <SocialLinks />
                </div>
            </form>
        </div>
        <Footer />
    </div>
    )
}
