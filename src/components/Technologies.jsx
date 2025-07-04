import React from 'react'
import {RiReactjsLine} from 'react-icons/ri'
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoNodejs} from "react-icons/io5";
import { SiPowerbi } from "react-icons/si";
import { DiMysql } from "react-icons/di";
import { FaGithub } from "react-icons/fa";
import { DiJava } from "react-icons/di";
import { animate, motion } from 'framer-motion';


const iconVariants=(duration)=>({
  initial:{y:-10},
  animate:{
    y:[10,-10],
    transition:{
      duration:duration,
      ease:"linear",
      repeat: Infinity,
      repeatType: "reverse"
    },
  },
})
const Technologies = () => {
  return (
    <div className='border-b border-neutral-800 pb-24 '> 
      <motion.h1
      whileInView={{opacity:1, y:0}}
      initial={{opacity:0, y:-100}}
      transition={{duration:1.5}}
      className='my-20 text-center text-4xl'>Technologies</motion.h1>
      <motion.div
      whileInView={{opacity:1,x:0}}
       initial={{opacity:0, x:-100}}
       transition={{duration:1.5}}
      className="flex flex-wrap items-center justify-center gap-8">

        <motion.div
          variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800">
              <FaGithub className="text-7xl text-white" />
        </motion.div>

        
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800">
          <DiJava className="text-7xl text-orange-500" />
          </motion.div>

        <motion.div 
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800">
            <RiReactjsLine className='text-7xl text-cyan-400 '/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800">
            <IoLogoNodejs className='text-7xl '/>
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800">
            <BiLogoMongodb className='text-7xl text-green-500 '/>
        </motion.div>
        <motion.div 
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-4 border-neutral-800">
            <DiMysql className='text-7xl text-pink-400 '/>
        </motion.div>
        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
         className="rounded-2xl border-4 border-neutral-800">
            <SiPowerbi className='text-7xl text-orange-400 '/>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Technologies
