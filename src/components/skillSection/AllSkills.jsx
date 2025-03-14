import React from 'react';
import { FaSwift } from "react-icons/fa";
import { RiReactjsLine } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";
import { FaGolang } from "react-icons/fa6";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { SiSolidity } from "react-icons/si";
import SingleSkill from './SingleSkill';
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

const AllSkills = () => {
  return (
    <div>
        <div className='flex items-center justify-center relative gap-4 max-w-[1200px] mx-auto'>
            {skills.map((item, index) => {
                return (
                    <motion.div
                        variants={fadeIn("up", `0.${index}`)}
                        initial="hidden"
                        whileInView="show"
                        viewport={{once: false, amount: 0}}
                    >
                        <SingleSkill key={item.skill} text={item.skill} imgSvg={<item.icon />} />
                    </motion.div>
                )
            })}
        </div>
    </div>
  )
}

export default AllSkills