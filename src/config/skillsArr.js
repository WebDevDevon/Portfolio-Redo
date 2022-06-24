import { AiFillHtml5 } from 'react-icons/ai'
import { DiCss3, DiJavascript1 } from 'react-icons/di'
import { 
    SiSass, 
    SiMongodb, 
    SiReact, 
    SiExpress, 
    SiAdobephotoshop
} from 'react-icons/si'
import { ImGit } from 'react-icons/im'
import { IoLogoNodejs } from 'react-icons/io'

export const skills = [
    {
        title: 'HTML',
        icon: <AiFillHtml5 className='w-auto h-10' />,
        text: 'text-[#ffffff]',
        background: 'bg-[#E44D26]'
    },
    {
        title: 'CSS',
        icon: <DiCss3 className='w-auto h-10' />,
        text: 'text-[#ffffff]',
        background: 'bg-[#264DE4]'
    },
    {
        title: 'JavaScript',
        icon: <DiJavascript1 className='w-auto h-10' />,
        text: 'text-[#ffffff]',
        background: 'bg-[#e8cd00]'
    },
    {
        title: 'React',
        icon: <SiReact className='w-auto h-10' />,
        text: 'text-[#15ebd9]',
        background: 'bg-[#000000]'
    },
    {
        title: 'Express',
        icon: <SiExpress className='w-auto h-10' />,
        text: 'text-[#ffffff]',
        background: 'bg-[#00AF6F]'
    },
    {
        title: 'MongoDB',
        icon: <SiMongodb className='w-auto h-10' />,
        text: 'text-[#ffffff]',
        background: 'bg-[#52A74B]'
    },
    {
        title: 'NodeJS',
        icon: <IoLogoNodejs className='w-auto h-10' />,
        text: 'text-[#91F086]',
        background: 'bg-[#000000]'
    },
    {
        title: 'Git',
        icon: <ImGit className='w-auto h-10' />,
        text: 'text-[#ffffff]',
        background: 'bg-[#E44D26]'
    },
    {
        title: 'SASS',
        icon: <SiSass className='w-auto h-10' />,
        text: 'text-[#ffffff]',
        background: 'bg-[#CF649A]'
    },
    {
        title: 'Photoshop',
        icon: <SiAdobephotoshop className='w-auto h-10' />,
        text: 'text-[#001d26]',
        background: 'bg-[#31c5f0]'
    }
]

