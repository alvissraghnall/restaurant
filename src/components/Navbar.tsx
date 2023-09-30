import { MdOutlineRestaurantMenu } from 'react-icons/md'
import { GiHamburgerMenu } from 'react-icons/gi';

import images from "@constants/images";
import { useState } from 'react';

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className='w-full flex items-center justify-between bg-blaque py-4 px-8 max-ss:p-4'>
      <div className={"flex justify-start items-center"}>
        <p className='text-white leading-9 font-extrabold font-cormorant text-3xl w-36 min-[2000px]:w-52 max-ss:w-28'>
          DRACULA
        </p>
      </div>

      <ul className='flex flex-1 justify-center items-center list-none max-sm:hidden'>
        <li className='text-base my-0 mx-4 cursor-pointer hover:text-yarg leading-7 font-openSans font-normal text-white'>
          <a href="#">Home</a>
        </li>
        <li className='text-base my-0 mx-4 cursor-pointer hover:text-yarg leading-7 font-openSans font-normal text-white'>
          <a href="#">About</a>
        </li>
        <li className='text-base my-0 mx-4 cursor-pointer hover:text-yarg leading-7 font-openSans font-normal text-white'>
          <a href="#">Menu</a>
        </li>
        <li className='text-base my-0 mx-4 cursor-pointer hover:text-yarg leading-7 font-openSans font-normal text-white'>
          <a href="#">Contact</a>
        </li>
        <li className='text-base my-0 mx-4 cursor-pointer hover:text-yarg leading-7 font-openSans font-normal text-white'>
          <a href="#">Awards</a>
        </li>
      </ul>

      <div className="flex text-white justify-end items-center max-sm:hidden">
        <a href="#login" className='font-openSans my-0 mx-4 no-underline transition ease-in duration-300 hover:border-b hover:border-solid hover:border-golden'>
          Login
        </a>
        <div className='w-[1px] h-7 bg-yarg' />
        <a href="#" className='font-openSans my-0 mx-4 no-underline transition ease-in duration-300 hover:border-b hover:border-solid hover:border-golden'>
          Book a Table
        </a>
      </div>

      <div className="sm:hidden flex">
        <GiHamburgerMenu className={'text-white text-xl cursor-pointer'} onClick={() => setMenuOpen(true)} />

        {
          menuOpen && (
            <div className="overlay fixed inset-0 w-full h-screen bg-blaque transition duration-500 ease-in-out flex-col z-10 flex justify-center items-center slide-bottom">
              <MdOutlineRestaurantMenu className='absolute top-5 right-5 text-xl text-golden cursor-pointer' onClick={() => setMenuOpen(false)} />

              <ul className='flex flex-1 justify-center items-center list-none flex-col'>
                <li className='text-2xl text-center m-8  cursor-pointer font-cormorant hover:text-white leading-7 font-normal text-golden'>
                  <a href="#">Home</a>
                </li>
                <li className='text-2xl text-center m-8  cursor-pointer leading-7 font-cormorant hover:text-white font-normal text-golden'>
                  <a href="#">About</a>
                </li>
                <li className='text-2xl text-center m-8  cursor-pointer leading-7 font-cormorant hover:text-white font-normal text-golden'>
                  <a href="#">Menu</a>
                </li>
                <li className='text-2xl text-center m-8  cursor-pointer leading-7 font-cormorant hover:text-white font-normal text-golden'>
                  <a href="#">Contact</a>
                </li>
                <li className='text-2xl text-center m-8  cursor-pointer leading-7 font-cormorant hover:text-white font-normal text-golden'>
                  <a href="#">Awards</a>
                </li>
              </ul>
            </div>

          )
        }
      </div>
    </nav>
  )
}

export default Navbar;