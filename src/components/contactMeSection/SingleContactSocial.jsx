import React from 'react'

const SingleContactSocial = ({Icon, link}) => {
  return (
    <div className='text-2xl h-12 w-12 border border-cyan text-cyan rounded-full p-3 flex items-center justify-center'>
        <a href={link} target='_blank' className='cursor-pointer'>
            <Icon />
        </a>
    </div>
  )
}

export default SingleContactSocial