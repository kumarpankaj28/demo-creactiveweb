import React from 'react';

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
        <div className='lg:col-span-2 my-4'>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-4'>
          <span className='text-[#f15e31]'>/ {' '}</span>Services provided by CreativeWebo
          </h1>
          <p className='text-gray-500'>We promote digital evolutions to help you achieve business objectives effortlessly.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
