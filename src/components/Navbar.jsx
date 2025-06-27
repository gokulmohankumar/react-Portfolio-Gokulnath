import React from 'react'
import Logo from '../assets/Assests/logo11.png'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaInstagram} from 'react-icons/fa'
import Resume from '../assets/constants/Gokulnath_newResume.pdf'

const Navbar = () => {
  return (
    <nav className=' flex items-center justify-between py-2'>
      <div className='flex-shrink-0 items-center'>
        <img src={Logo} alt="logo " className='mx-2 w-[80px] rounded-full' />
      </div>
      <div className='m-8 flex items-center justify-center gap-5 text-2xl '>
       
      <a href="https://www.linkedin.com/in/gokulnath-mohankumar" target="_blank" rel="noopener noreferrer">
      <FaLinkedin/>
      </a>
      <a href="https://github.com/gokulmohankumar" target="_blank" rel="noopener noreferrer">
      <FaGithub/>
      </a>
      <a href="https://www.instagram.com/gokul_en_beemaljalaam/?hl=en" target="_blank" rel="noopener noreferrer">
      <FaInstagram/>
      </a>
{/*       <a  href={Resume}download="Gokulnath_Resume.pdf" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 font-bold mr-[20px] p-1 rounded text-white'>
          Resume
        </a> */}
        <a
  href={Resume}
  download="Gokulnath_Resume.pdf"
  className="text-white bg-[#FF9119] hover:bg-[#FF9119]/80 focus:ring-4 focus:outline-none focus:ring-[#FF9119]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#FF9119]/80 dark:focus:ring-[#FF9119]/40 me-2 mb-2"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6 mr-2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3-3m0 0-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
    />
  </svg>
  Resume
</a>

      </div>
    </nav>
  )
}

export default Navbar
