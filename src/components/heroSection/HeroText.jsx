import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className='flex flex-col fap-4 h-full justify-center md:text-left sm:text-center'>
        <motion.h2 
          variants={fadeIn("down", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0}}
          className='lg:text-2xl sm:text-xl uppercase text-lightGrey'>VP of Product & Engineering</motion.h2>
        <motion.h1 
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0}}
          className='md:text-[2.8rem] lg:text-6xl sm:text-4xl font-bold font-special text-cyan'>Yonathan Gunawan</motion.h1>
        <motion.p
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView="show"
          viewport={{once: false, amount: 0}}
          className='text-lg mt-4 text-white'>A results-driven leader specializing in building product & Technology with 12+ years of experience.</motion.p>
        {/* <p className='text-lg mt-4 text-white'>I help fintech and SaaS companies scale efficiently, optimize costs, and build high-impact products. <br/>With over 11 years of experience leading product and engineering teams,<br/>I specialize in product innovation, cloud cost reduction, and strategic execution that drive business growth.</p> */}
    </div>
  )
}

export default HeroText;