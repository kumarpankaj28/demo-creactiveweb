import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <>
    <div className='max-w-[1240px] mx-auto  mt-8 py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
        <h1 className='w-full text-3xl font-bold text-[#fff]'>creativew<span className='text-[#f15e31]'>/</span>ebo</h1>
        <p className='py-4'>CreativeWebo is a Mumbai based digital agency. We are equipped with cutting-edge technologies to empower businesses online. Our solutions ensure a comprehensive digital transformation of your brand. We use multiple channels are proven strategies to provide you with the best in class digital solutions</p>
      </div>
      <div className='lg:col-span-2  flex justify-between '>
        <div>
          <h6 className='font-medium text-2xl text-white'>Quick Links</h6>
          <ul>
            <li className='py-2 text-sm'> <a href="/">Home</a> </li>
            <li className='py-2 text-sm'><a href="/service">Services</a></li>
            <li className='py-2 text-sm'><a href="/">Solutions</a></li>
            <li className='py-2 text-sm'><a href="/career">Career</a></li>
            <li className='py-2 text-sm'><a href="/caseStudie">Case Studies</a></li>
            <li className='py-2 text-sm'><a href="/blog">Blog</a></li>
            <li className='py-2 text-sm'><a href="/contact">Contact Us</a></li>
            <li className='py-2 text-sm'><a href="/">Sitemap</a></li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-2xl text-white'>Mumbai</h6>
          <ul>
            <li className='py-2 text-sm'><a href="/">+919004480375 /+918928309813</a></li>
            <li className='py-2 text-sm'><a href="/">Info@Creativewebo.Com</a></li>
            <li className='py-2 text-sm'><a href="/">1805, Haware Infotech Park, Vashi, Navi<br /> Mumbai - 400703</a></li>
          </ul>
          <h6 className='font-medium text-2xl pt-6 text-white'>Toronto, Canada</h6>
          <ul>
            <li className='py-2 text-sm'><a href="/">+1 647-948-9165</a></li>
            <li className='py-2 text-sm'><a href="/">30 Eglinton West Commercial Center,<br /> Mississauga, Ontario L5R 3E7</a></li>
          </ul>
          <h6 className='font-medium text-2xl pt-6 text-white'>Pune</h6>
          <ul>
            <li className='py-2 text-sm'><a href="/">+918879102729</a></li>
            <li className='py-2 text-sm'><a href="/">Tupe Patil Road, Amanora Park Town,<br /> Hadapsar, Pune, Maharashtra 411028</a></li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-white text-2xl'>Locations</h6>
          <ul>
            <li className='py-2 text-sm'><a href="/">Mumbai</a></li>
            <li className='py-2 text-sm'><a href="/">Pune</a></li>
            <li className='py-2 text-sm'><a href="/">Dubai</a></li>
            <li className='py-2 text-sm'><a href="/">Toronto</a></li>
          </ul>
          <h6 className='font-medium text-white text-2xl'>Follow Us</h6>
          <div className='flex  flex-wrap gap-2 md:w-[70%] my-6'>
            <FaFacebookSquare size={30} className='rounded-lg overflow-hidden transition duration-300 transform text-[#0077b5] hover:scale-105 ' />
            <FaInstagram size={30} className='rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 text-[#df437e]' />
            <FaTwitterSquare size={30} className='rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 text-[#00c3ff]' />
            <FaGithubSquare size={30} className='rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 ' />
            <FaDribbbleSquare size={30} className='rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 ' />
          </div>
        </div>
      </div>
    </div>
    <div className='pb-4'>
    <hr/>
    <div className='text-white flex justify-center  mx-auto '>
      <p className='text-gray-300'>© 2023 CreativeWebo Private Limited. All rights reserved.</p>
    </div>

    </div>
    </>
  );
};

export default Footer;
