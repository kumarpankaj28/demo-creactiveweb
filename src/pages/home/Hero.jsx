import React from 'react';


const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-white font-bold p-2 md:text-4xl'>
        <span className='text-[#f15e31]'>/ {' '}</span> We blend
        </p>
        <h1 className='md:text-6xl sm:text-6xl text-4xl font-bold md:py-6'>
        Experience and Expertise
        </h1>
        <p className='md:text-2xl text-6xl font-bold text-wgitwe'>to facilitate robust Digital Solutions.</p>
        <button className='bg-[#f15e31] w-[200px]  font-medium my-6 mx-auto py-3 text-white'>Book An Appointment</button>
      </div>
    </div>
  );
};

export default Hero;
