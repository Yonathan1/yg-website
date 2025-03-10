import React from 'react'
import SingleContactSocial from './SingleContactSocial'
import { FiGithub } from 'react-icons/fi';
import { FaLinkedinIn } from 'react-icons/fa';

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link="https://www.linkedin.com/in/yonathan-gunawan-25447995/" Icon={FaLinkedinIn} />
        <SingleContactSocial link="https://github.com/Yonathan1/" Icon={FiGithub} />
    </div>
  )
}

export default ContactSocial