import React from 'react';
import { NavLink, } from 'react-router-dom';
import img from '../assets/Image/chap-1.png'

const IctChapter1 = () => {
    const chapter = [
        {
            id: 1,
            title: 'তথ্য ও যোগাযোগ প্রযুক্তি',
            routes: 'ict'
        },
        {
            id: 2,
            title: 'বিশ্বগ্রাম ও এর ধারণা',
            routes: 'global',
        },
        {
            id: 3,
            title: 'টেলিকনফারেন্সিং',
            routes: 'teleconferencing',
        },
        {
            id: 4,
            title: 'ভার্চুয়াল রিয়েলিটি',
            routes: 'vl',
        },
        {
            id: 5,
            title: 'কৃত্তিম বুদ্ধিমত্তা',
            routes: 'ai',
        },
        {
            id: 6,
            title: 'ক্রায়োসার্জারি',
            routes: 'cs',
        },
        {
            id: 7,
            title: 'বায়োমেট্রিক্স',
            routes: 'bm',
        },
        {
            id: 8,
            title: 'বায়োইনফরমেট্রিক্স',
            routes: 'bi',
        },
        {
            id: 9,
            title: 'জেনেটিং ইঞ্জিনিয়ারিং',
            routes: 'ge',
        },
        {
            id: 10,
            title: 'ন্যানোটেকনোলজি',
            routes: 'nt',
        },
        {
            id: 11,
            title: 'ICT ব্যাবহারের নৈতিকতা',
            routes: 'roles',
        },
    ];
    return (
        <div className='mx-10'>
            <h2 className='text-4xl text-center font-bold mt-5'>তথ্য ও যোগাযোগ প্রযুক্তি</h2>
            <h3 className='text-3xl font-semibold mt-5'>প্রথম অধ্যায় : <span className='text-[#FF2DF7]'>বিশ্ব ও বাংলাদেশ প্রেক্ষিত</span></h3>
            

            <img className='mt-5 rounded-xl shadow-2xl mb-10' src={img} alt="" />

            
            <hr />
            <div className='mt-10 grid md:grid-cols-5 md:gap-2 gap-10'>
                {chapter.map((item) => (
                    <NavLink to={item.routes} key={item.id}>
                        <div className='bg-[#003366] h-[200px] md:w-[250px] flex justify-center items-center px-2 text-center rounded-2xl'>
                            <h2 className='font-bold text-2xl'>{item.title}</h2>
                        </div>
                    </NavLink>
                ))}
            </div>

            
        </div>
    );
};

export default IctChapter1;
