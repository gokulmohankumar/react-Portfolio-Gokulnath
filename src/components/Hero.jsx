import React from 'react'
import {HERO_CONTENT} from '../assets/constants/index'
import profilePic from '../assets/Assests/ProfileLi.jpg'
import { motion } from "framer-motion"
const container=(delay)=>({
  hidden:{x: -100, opacity: 0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5, delay:delay}}
})

const Hero = () => {
  return (
    <div className='border-b border-neutral-950 pb-4 lg:mb-35'>
      <div className='flex flex-wrap '>
          <div className='w-full lg:w-1/2 '>
             <div className='flex flex-col items-center lg:items-start'>
              <motion.h1 
              variants={container(0)}
              initial='hidden'
              animate='visible'
              className='pb-16 text-6xl ml-[25px] font-thin tracking-tight lg:mt-16 lg:text-8xl bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-transparent'>
              Gokulnath M
              </motion.h1>
              <motion.span
               variants={container(0.5)}
               initial='hidden'
               animate='visible'
              className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text ml-[40px] text-4xl tracking-tight text-transparent'>Full Stack developer</motion.span>
              <motion.p 
              variants={container(1)}
              initial='hidden'
              animate='visible'
              className='my-2 max-w-xl py-6 font-light ml-[40px]  text-white text-lg tracking-normal text-justify'>{HERO_CONTENT}</motion.p>
             </div>
          </div>
          <div className='w-full lg:w-1/2 p-8 '>
              <div className="flex justify-center" >
                <motion.img
                initial={{x:100,opacity:0}}
                animate={{x:0,opacity:1}}
                transition={{duration:1, delay:1.2}}
                className='rounded-md'
                src={profilePic} alt="profile picture" />
               
              </div>
          </div>
      </div>
    </div>
  )
}

export default Hero
