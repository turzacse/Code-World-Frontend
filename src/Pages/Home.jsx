import React from 'react';
import img from '../assets/Image/learn.png'
import chapter1 from '../assets/Image/chapter1.jpg'
import chapter2 from '../assets/Image/chapter2.png'
import chapter3 from '../assets/Image/chapter3.jpg'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <div className='mt-10 md:px-10 px-0'>
            <img className='shadow-2xl rounded-2xl' src={img} alt="" />


            <div className='mt-20'>
              <div className='grid grid-cols-3 justify-between gap-24'>
                <NavLink to='/ict1' className='bg-[#003366] h-[400px] w-[350px] flex flex-col justify-center items-center shadow-2xl rounded-2xl hover:shadow-none'>
                    <h2 className='text-3xl font-bold shadow-2xl'>প্রথম অধ্যায়</h2>
                    <img className='h-[100px] rounded-full mt-5' src={chapter1} alt="" />
                    <p className='text-xl font-medium mt-10 mx-4 text-center'>বিশ্ব ও বাংলাদেশ প্রেক্ষিত</p>
                </NavLink>

                <div className='bg-[#003366] h-[400px] w-[350px] flex flex-col justify-center items-center shadow-2xl rounded-2xl hover:shadow-none'>
                    <h2 className='text-3xl font-bold shadow-2xl'>দ্বিতীয় অধ্যায়</h2>
                    <img className='h-[100px] w-[100px] rounded-full mt-5' src={chapter2} alt="" />
                    <p className='text-xl font-medium mt-10 mx-4 text-center'>কমিউনিকেশন সিস্টেমস ও নেটওয়ার্কিং</p>
                </div>

                <div className='bg-[#003366] h-[400px] w-[350px] flex flex-col justify-center items-center shadow-2xl rounded-2xl hover:shadow-none'>
                    <h2 className='text-3xl font-bold shadow-2xl'>তৃতীয় অধ্যায়</h2>
                    <img className='h-[100px] w-[100px] rounded-full mt-5' src={chapter3} alt="" />
                    <p className='text-xl font-medium mt-10 mx-4 text-center'>সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস</p>
                </div>

              </div>
            </div>
        </div>
    );
};

export default Home;