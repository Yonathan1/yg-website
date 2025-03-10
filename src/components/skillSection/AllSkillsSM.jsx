import React from 'react'
import { FaSwift } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";
import { motion } from 'framer-motion';
import { fadeIn } from "../../framerMotion/variants";

const skills = [
    {
        skill: "Swift",
        icon: FaSwift,
    },
    {
        skill: "ReactJS",
        icon: RiReactjsLine,
    },
    {
        skill: "TypeScript",
        icon: SiTypescript,
    },
    {
        skill: "NextJS",
        icon: RiNextjsLine,
    },
    {
        skill: "Golang",
        icon: FaGolang,
    },
    {
        skill: "Python",
        icon: FaPython,
    },
    {
        skill: "Java",
        icon: FaJava,
    },
    {
        skill: "Solidity",
        icon: SiSolidity,
    },
]

const AllSkillsSM = () => {
  return (
    <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12'>
        {skills.map((item, index) => {
            return (
                <motion.div 
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{once: false, amount: 0.7}}
                    key={index} 
                    className='flex flex-col items-center'>
                    <item.icon className='text-7xl text-cyan hover:text-grey transform transition-all duration-500' />
                    <p className='text-center mt-4 text-white'>{item.skill}</p>
                </motion.div>
            );
        })}
    </div>
  )
}

export default AllSkillsSM