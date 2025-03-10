import React from 'react'
import ExperienceInfo from './ExperienceInfo'

const ExperienceTopLeft = () => {
  return (
    <div className='flex flex-col gap-6 w-[300px]'>
        <p className='text-orange font-bold uppercase text-3xl font-special text-center'>Since 2013</p>
        <div className='flex justify-center items-center gap-4'>
            <ExperienceInfo number="12" text="Years"/>
            <p className='font-bold text-6xl text-lightBrown'>-</p>
            <ExperienceInfo number="25" text="Apps"/>
        </div>
        <p className='text-center text-white'>
            With over 12 years of experience building and leading product & technology team.
        </p>
    </div>
  )
}

export default ExperienceTopLeft