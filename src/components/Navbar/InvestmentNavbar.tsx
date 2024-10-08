import React from 'react';
import Link from 'next/link';

const InvestmentNavbar = () => {
  return (
    <div className='w-full h-24 bg-white flex py-4  shadow-navshadow'>
      <div className='flex w-full sm:w-[80%] m-auto justify-between items-center'>
        <img src="/YadeamNav.png" alt="Logo" className='w-[160px] h-[45px] sm:w-[260px] sm:h-[70px] ' />

        <div className=' mr-3 sm:mr-0 h-full md:w-[30%] lg:w-[23%] flex flex-col sm:flex-row justify-between items-center '>
          <Link href={'/'} className='text-[14px] sm:text-[20px] sm:mr-2 font-semibold text-nowrap hover:text-primary3 ease-in-out transition-all duration-200'>
            Help Center
          </Link>
          <Link href={'/signup'} className='bg-primary1 ml-1 px-2 sm:px-9 py-2 text-nowrap text-[14px] sm:text-[19px] font-semibold text-white cursor-pointer rounded-lg hover:bg-primary3 transition-all ease-in-out duration-200'>
            Join Us
          </Link>
        </div>

      </div>
    </div>
  );
}

export default InvestmentNavbar;
