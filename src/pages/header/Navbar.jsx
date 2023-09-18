// eslint-disable-next-line
import { React, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HiMenuAlt3 } from 'react-icons/hi';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
    if (!nav) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className='flex justify-between items-center h-24  mx-auto px-4 text-white'>
      <a className='w-full  text-4xl lg:pl-20 font-bold text-[#fff] ' href="/">creativew<span className='text-[#f15e31]'>/</span>ebo</a>
      <ul className='hidden md:flex  w-[950px]  md:w-[1400px] gap-2 text-white '>
        <li className='p-4'><a href="/">+91-9004480375</a></li>
        <li className='p-4 relative inline-block group' onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <button className="text-white ">
            Services
          </button>
          {isOpen && (
            <div className="absolute w-[250px] left-0 mt-2 py-2 bg-black shadow-md">
              <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31] ">Software Solutions</a>
              <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31]">Mobile App Development</a>
              <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31]"> Website Development</a>
              <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31]"> Website Development Service</a>
              <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31]"> Emerging Technologies</a>
              <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31]"> Managed Services</a>
              <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31]"> Branding</a>
              <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31]"> Digital Marketing</a>
              <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31]"> Android App Development</a>
              <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31]">  iOS App Development</a>
              <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31]"> Ecommerce Development</a>
            </div>
          )}
        </li>
        <li className='p-4 relative inline-block group'>
          <button className="hover:text-gray-300">Location</button>
          <div className="absolute w-[100px] left-0 hidden mt-2 space-y-2 group-hover:block bg-black text-white  shadow-md">
            <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31]">Mumbai</a>
            <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31]">Pune</a>
            <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31]">UAE</a>
            <a href="/" className="block px-4 py-2 text-white hover:bg-white hover:text-[#f15e31]">Toronto</a>
          </div>

        </li>
        <li className='p-4'><a href="/caseStudie">Case Studies</a></li>
        <li className='p-4'><a href="/contact">Contact Us</a></li>
      </ul>
      <HiMenuAlt3 onClick={handleNav} className='z-20 text-white  cursor-pointer' size={50} />
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div className={nav ? 'ease-in duration-300 fixed text-white left-0 top-0 w-full h-screen bg-black px-8 py-32 flex-col z-10' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10'}>
        <div className='flex '>
          <ul className='flex flex-col  w-full h-full lg:p-32  items-right justify-left'>
            <li className='p-4  text-3xl hover:text-[#df437e]'><a className="hover:border-b-4 border-transparent hover:border-[#df437e] transition duration-100" href="/">HOME</a></li>
            <li className='p-4  text-3xl hover:text-[#df437e]'><a className="hover:border-b-4 border-transparent hover:border-[#df437e] transition duration-100" href="/about">ABOUT US</a></li>
            <li className='p-4  text-3xl hover:text-[#df437e]'><a className="hover:border-b-4 border-transparent hover:border-[#df437e] transition duration-100" href="/service">SERVICES</a></li>
            <li className='p-4  text-3xl hover:text-[#df437e]'><a className="hover:border-b-4 border-transparent hover:border-[#df437e] transition duration-100" href="/caseStudie">CASE STUDIES</a></li>
            <li className='p-4  text-3xl hover:text-[#df437e]'><a className="hover:border-b-4 border-transparent hover:border-[#df437e] transition duration-100" href="/career">CAREER</a></li>
            <li className='p-4  text-3xl hover:text-[#df437e]'><a className="hover:border-b-4 border-transparent hover:border-[#df437e] transition duration-100" href="/blog">BLOG</a></li>
            <li className='p-4  text-3xl hover:text-[#df437e]'><a className="hover:border-b-4 border-transparent hover:border-[#df437e] transition duration-100" href="/location">LOCATIONS</a></li>
            <li className='p-4  text-3xl hover:text-[#df437e]'><a className="hover:border-b-4 border-transparent hover:border-[#df437e] transition duration-100" href="/contact">CONTACT US</a></li>
          </ul>
          <div className=' hidden md:block  flex-col pt-32 w-full h-full pl-32  items-right justify-left '>
            <h1 className='flex flex-col  text-2xl '>Visit Our Office</h1>
            <br />
            <h4 className='text-gray-500 '>1805, Haware Infotech Park, Vashi, Navi Mumbai - 400703<br /><br />
              30 Eglinton West Commercial Center, Mississauga, Ontario L5R 3E7<br /><br />
              Tupe Patil Road, Amanora Park Town, Hadapsar,<br />
              Pune, Maharashtra 411028</h4>
            <h1 className='flex flex-col pt-8 text-2xl '>Contact Us</h1>
            <br />
            <ul className='text-gray-500'>
              <li>+91-9004480375</li>
              <li>+91-9004480375</li>
              <li>+91-9004480375</li>
            </ul>
            <h1 className='flex flex-col pt-8 text-2xl '>Follow Us</h1>
            <br />
            <div className='flex  flex-wrap gap-2 md:w-[70%] '>
              <FaFacebookSquare size={30} className='rounded-lg overflow-hidden transition duration-300 transform text-[#0077b5] hover:scale-105 ' />
              <FaInstagram size={30} className='rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 text-[#df437e]' />
              <FaTwitterSquare size={30} className='rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 text-[#00c3ff]' />
              <FaGithubSquare size={30} className='rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 ' />
              <FaDribbbleSquare size={30} className='rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 ' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
