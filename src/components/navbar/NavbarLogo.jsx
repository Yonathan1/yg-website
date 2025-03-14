 import React from 'react'
 
 const NavbarLogo = () => {
   return (
     <div>
        <div className='sm:hidden md:block'>
          <h1 className='text-white text-2xl'>
              Yonathan Gunawan
          </h1>
        </div>
        <div className='sm:block md:hidden'>
          <h1 className='text-white font-special font-extrabold text-4xl'>
              YG
          </h1>
        </div>
     </div>
   )
 }
 
 export default NavbarLogo;