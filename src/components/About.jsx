import React from 'react'
import Aboutme from '../assets/Assests/about_me.jpg'
import { ABOUT_TEXT } from '../assets/constants'
import { motion } from 'framer-motion';
const About = () => {
  return (
    <div className='border-b  border-neutral-900 pb-4  '>
        <h1 className='my-20 text-center text-4xl'>About 
            <span className='text-neutral-500'> Me</span></h1>
    <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 p-8'>
        <motion.div 
         whileInView={{opacity:1, x:0, }}
         initial={{opacity:0, x:-100}}
         transition={{duration:1.5}}
        className='flex items-center justify-center'>
                <img  className='rounded-2xl'src={Aboutme} alt="about image" />
        </motion.div>
        </div>
        <motion.div 
        whileInView={{opacity:1, x: 0}}
        initial={{opacity:0, x:100}}
        transition={{duration:1.5}}
        className='w-full lg:w-1/2'>
             <div className=' lg:justify-start'>
                <p className='my-20 m1-20 max-w-xl py-6'>{ABOUT_TEXT}</p>
             </div>
        </motion.div>
    </div>
      
    </div>
  )
}

export default About
