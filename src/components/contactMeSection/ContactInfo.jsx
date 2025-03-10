import React from 'react'
import { HiOutlineMail } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4 text-white'>
        <SingleInfo text="nathan.gunawan93@gmail.com" Image={HiOutlineMail} />
        <SingleInfo text="BSD, Indonesia" Image={IoLocationOutline}/>
    </div>
  )
}

export default ContactInfo