import React from 'react'
import Logo from '../assets/Assests/Logo.jpg'
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
      <a  href={Resume}download="Gokulnath_Resume.pdf" className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 font-bold mr-[20px] p-1 rounded text-white'>
          Resume
        </a>
      </div>
    </nav>
  )
}

export default Navbar
