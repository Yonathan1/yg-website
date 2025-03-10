import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn } from "../../framerMotion/variants";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0}}
    className='h-full flex items-center justify-center'>
        <img src='../../images/HexaPic.png' alt="Yonathan Gunawan" className='max-h-[250px] w-auto rounded-lg'/>
    </motion.div>
  )
}

export default HeroPic;