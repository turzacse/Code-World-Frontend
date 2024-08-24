import React from 'react';
import img from '../assets/Image/ch3.png'

const ICTChapter3 = () => {
    return (
        <div className='mx-10'>
        <h2 className='text-4xl text-center font-bold mt-5'>তথ্য ও যোগাযোগ প্রযুক্তি</h2>
        <h3 className='text-3xl font-semibold mt-5'>প্রথম অধ্যায় : <span className='text-[#FF2DF7]'>বিশ্ব ও বাংলাদেশ প্রেক্ষিত</span></h3>
        

        <img className='mt-5 rounded-xl shadow-2xl mb-10' src={img} alt="" />

        
        <hr />
        {/* <div className='mt-10 grid md:grid-cols-5 md:gap-2 gap-10'>
            {chapter.map((item) => (
                <NavLink to={item.routes} key={item.id}>
                    <div className='bg-[#003366] h-[200px] md:w-[250px] flex justify-center items-center px-2 text-center rounded-2xl'>
                        <h2 className='font-bold text-2xl'>{item.title}</h2>
                    </div>
                </NavLink>
            ))}
        </div> */}

        
    </div>
    );
};

export default ICTChapter3;