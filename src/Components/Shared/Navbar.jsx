import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';

const Navbar = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const links = (
        <>
            <li className='font-semibold text-[20px]'>
                <NavLink
                    to='/'
                    className={({ isActive }) =>
                        isActive ? 'text-[#00F0FF]' : 'md:text-white'
                    }
                >
                    Home
                </NavLink>
            </li>
            <li className='font-semibold text-[20px]'>
                <NavLink
                    to='/services'
                    className={({ isActive }) =>
                        isActive ? 'text-[#00F0FF]' : 'md:text-white'
                    }
                >
                    Services
                </NavLink>
            </li>
            <li className='font-semibold text-[20px]'>
                <NavLink
                    to='/pricing'
                    className={({ isActive }) =>
                        isActive ? 'text-[#00F0FF]' : 'md:text-white'
                    }
                >
                    Pricing
                </NavLink>
            </li>
            <li className='font-semibold text-[20px]'>
                <NavLink
                    to='/contact'
                    className={({ isActive }) =>
                        isActive ? 'text-[#00F0FF]' : 'md:text-white'
                    }
                >
                    Contact Us
                </NavLink>
            </li>
        </>
    );
    return (
        <div className='bg-[#090125] w-full'>
            <div className=" text-white md:px-10 px-0">
                <div className="flex justify-between items-center p-4">
                    <a className="text-2xl font-bold">
                        <span className='text-[#FF2DF7]'>CODE</span>
                        {/* <span>MIND</span> */}
                        <span className='text-[#00F0FF]'>WORLD</span>
                    </a>
                    <div className="relative lg:hidden">
                        <button
                            tabIndex={0}
                            className="p-2"
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </button>
                        {isDropdownOpen && (
                            <ul
                                tabIndex={0}
                                className="absolute right-0 mt-3 z-10 p-2 shadow-lg bg-gradient-to-b-custom rounded-2xl w-60 h-[360px] space-y-2 pl-[26px] bg-[#FF2DF7]"
                            >
                                <li className="flex justify-end pr-[38px] pt-[38px]">
                                    <button onClick={() => setIsDropdownOpen(false)}>
                                        <IoCloseOutline className="h-6 w-6 text-white" />
                                    </button>
                                </li>
                                <div className='space-y-8'>
                                    {links}
                                </div>
                            </ul>
                        )}
                    </div>
                    <div className="hidden lg:flex">
                        <ul className="flex space-x-16">
                            {links}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;