import React from 'react'
import SingleExperience from './SingleExperience';
import { FaArrowRight } from "react-icons/fa";
import { motion } from 'framer-motion';
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
    {
        job: "VP of Product & Tech",
        company: "Danamas",
        date: "2022-2025",
        responsibilities: [
            "Led the technical and product strategy.",
            "aligning team efforts with business objectives.",
            "Infrastructure cost optimization by 68%.",
            "Restructured the product & tech team.",
            "Managed stakeholders, investors, and ecosystem partners to drive business growth.",
        ]
    },{
        job: "Head of Product & Tech",
        company: "Kawan Cicil",
        date: "2020-2021",
        responsibilities: [
            "Led the development of a full-scale loan platform, including borrower/lender apps and finance portals.",
            "Managed SCRUM and Agile processes, ensuring timely and efficient delivery.",
            "Managed international engineering vendor",
            "Define product & technology roadmap",
            "Groomed 10+ product and tech teams",
        ]
    },{
        job: "Technical Lead",
        company: "Various Startups",
        date: "2017-2020",
        responsibilities: [
            "Designed and implemented scalable technical architectures.",
            "Managed SCRUM processes and optimized workflows.",
            "Designed robust software architecture and ensured technical best practices were followed.",
            "Spearheaded product migration and development for scaling business needs.",
        ]
    },
];

const AllExperience = () => {
  return (
    <div className='flex md:flex-row sm:flex-col items-center justify-between'>
        {experiences.map((experience, index) => {
            return (
                <>
                    <SingleExperience key={index} experience={experience} />;
                    {index < 2 ? (
                        <motion.div
                            variants={fadeIn("right", 0.2)}
                            initial="hidden"
                            whileInView="show"
                            viewport={{once: false, amount: 0.7}}
                        >
                            <FaArrowRight className='text-6xl text-orange lg:block sm:hidden' />
                        </motion.div>
                    ) : ""}
                </>
            )
        })}
    </div>
  )
}

export default AllExperience