import React from 'react';
import img from '../../assets/Image/global-village.png'
import { NavLink } from 'react-router-dom';

const Global = () => {
    return (
        <div className='mx-10 pb-20'>
            <img className='flex justify-center w-full md:h-[550px]' src={img} alt="" />
            {/* <h2 className='text-3xl font-bold text-[#FF2DF7]'>বিশ্বগ্রাম </h2> */}

            <div className='mt-5 space-y-4'>
                <h1 className='text-2xl font-bold'>বিশ্বগ্রাম কী? গ্লোবাল ভিলেজ কি ?</h1>
                <p className=''>বিশ্বগ্রাম হচ্ছে এমন একটি ধারণা যেখানে পৃথিবীর সকল মানুষ একটি একক সমাজের ন্যায় বসবাস করবে এবং  তথ্য ও যোগাযোগ প্রযুক্তি ব্যবহারের মাধ্যমে একে অপরের সাথে যোগাযোগ ও সেবা প্রদান করবে। অর্থাৎ তথ্য ও যোগাযোগ প্রযুক্তি নির্ভর বিশ্বকে বিশ্বগ্রাম বলা হয়। </p>
            </div>

            <div className='mt-5 space-y-4'>
                <h1 className='text-2xl font-bold'>বিশ্বগ্রাম প্রতিষ্ঠার উপাদানসমূহ কী কী ?</h1>
                <p className=''>
                    <li>হার্ডওয়্যার</li>
                    <li>সফটওয়্যার</li>
                    <li>নেটওয়ার্ক বা কানেক্টিভিটি</li>
                </p>
            </div>



            <div className='mt-5 space-y-4'>
                <h1 className='text-2xl font-bold'>হার্ডওয়্যার</h1>
                <p className=''>বিশ্বগ্রামে যে কোন ধরণের যোগাযোগ এর জন্য প্রয়োজন উপযুক্ত হার্ডওয়্যার। যেমন- কম্পিউটার এবং পেরিফেরাল যন্ত্রপাতি, মোবাইল, রেডিও, টেলিভিশন ইত্যাদি।</p>
            </div>
            <div className='mt-5 space-y-4'>
                <h1 className='text-2xl font-bold'>সফটওয়্যার</h1>
                <p className=''>কোন সমস্যা সমাধানের লক্ষ্যে প্রোগ্রামিং ভাষায় লিখিত নির্দেশনার সমাবেশকে প্রোগ্রাম বলে। আবার কতগুলো প্রোগ্রামের সমাবেশকে সফটওয়্যার বলে। বিশ্বগ্রাম প্রতিষ্ঠার জন্য হার্ডওয়্যার এর পাশাপাশি বিভিন্ন প্রোগ্রাম বা সফটওয়্যার প্রয়োজন। বিভিন্ন ধরণের সফটওয়্যার যেমন- অপারেটিং সিস্টেম, ব্রাউজিং সফটওয়্যার,কমিউনিকেশন সফটওয়্যার ইত্যাদি।</p>
            </div>
            <div className='mt-5 space-y-4'>
                <h1 className='text-2xl font-bold'>নেটওয়ার্ক বা কানেক্টিভিটি</h1>
                <p className=''>বিশ্বগ্রামের মেরুদন্ড হলো নেটওয়ার্ক বা কানেকটিভিটি যার মাধ্যমে বিভিন্ন উপাত্ত ও তথ্য এই বিশ্বগ্রামের প্রতিটি মানুষের নিকট পৌছাতে পারে।</p>
            </div>


            <div className='mt-5 space-y-4'>
                <h1 className='text-2xl font-bold'>বিশ্বগ্রাম এর সুবিধা</h1>
                <p className=''>
                    <li>স্বল্প সময়ের মধ্যে বিশ্বব্যাপী নিরাপদ ও দ্রুত যোগাযোগ করা যায়।</li>
                    <li>পৃথিবীব্যাপী তথ্যের ব্যাপক উৎস সৃষ্টি হয়েছে এবং তথ্য পাওয়া সহজলভ্য হয়েছে।</li>
                    <li>প্রযুক্তি গ্রহণ ও ব্যবহারের ক্ষেত্রে মানুষের সক্ষমতা বৃদ্ধি পেয়েছে।</li>
                    <li>মানুষের জীবন যাত্রার মান উন্নয়ন হয়েছে।</li>
                    <li>মানুষের কাজের দক্ষতা বৃদ্ধি পেয়েছে।</li>
                    <li>ব্যবসা বাণিজ্যের প্রসার এবং লেনদেন সহজ ও দ্রুততর হচ্ছে।</li>
                    <li>ঘরে বসেই শিক্ষা গ্রহণ করা যায়।</li>
                    <li>ঘরে বসেই উন্নত স্বাস্থ্য ও চিকিৎসা সেবা পাওয়া যাচ্ছে।</li>
                    <li>অনলাইনে বিভিন্ন প্ল্যাটফর্মে লেখালেখি করার মাধ্যমে কোন বিষয়ে মতামত প্রদান এবং সচেতনতা বৃদ্ধি করা যাচ্ছে।</li>
                    <li>বিশ্বব্যাপী কর্মসংস্থানের ব্যপক সুযোগ সৃষ্টি হয়েছে।</li>
                </p>
            </div>

            <div className='mt-5 space-y-4'>
                <h1 className='text-2xl font-bold'>বিশ্বগ্রাম এর অসুবিধা</h1>
                <p className=''>
                    <li>ইন্টারনেট প্রযুক্তির ফলে অনেক ক্ষেত্রে তথ্যের গোপনীয়তা বজায় থাকছে না।</li>
                    <li>সহজেই অসত্য বা মিথ্যা এবং বানোয়াট সংবাদ ছড়িয়ে সামাজিক বিশৃঙ্খলা সৃষ্টি হচ্ছে।</li>
                    <li>প্রযুক্তি পরিবর্তনের কারণে গ্লোবাল নেটওয়ার্ক শেয়ার করার জন্য অনুন্নত দেশগুলো উন্নত দেশগুলোর প্রতি নির্ভরশীল হয়ে পড়ছে।</li>
                    <li>সাইবার আক্রমন বাড়ছে।</li>
                    <li>ইন্টারনেটের ফলে পর্ণোগ্রাফি সহজলভ্য হওয়ায় যুবসমাজে সামাজিক অবক্ষয় সৃষ্টি হচ্ছে।</li>
                </p>
            </div>

            <div className='mt-10 space-y-4'>
                <h1 className='text-2xl font-bold'>বিশ্বগ্রামের ধারণা সংশ্লিষ্ট প্রধান উপাদান সমূহ</h1>
                <p className=''>
                    <li>যোগাযোগ (Communication)</li>
                    <li>কর্মসংস্থান (Employment)</li>
                    <li>শিক্ষা (Education)</li>
                    <li>চিকিৎসা (Treatment)</li>
                    <li>গবেষণা (Research)</li>
                    <li>অফিস (Office)</li>
                    <li>বাসস্থান (Residence)</li>
                    <li>ব্যবসা বাণিজ্য (Business)</li>
                    <li>বিনোদন ও সামাজিক যোগাযোগ (Entertainment and Social Communication)</li>
                    <li>সংবাদমাধ্যম (News)</li>
                    <li>সাংস্কৃতিক বিনিময় (Cultural Exchange)</li>
                </p>
            </div>

            <div className='mt-10 flex justify-between'>
                <NavLink to='/ict1/ict' className='btn btn-primary'>Previous</NavLink>
                <NavLink to='/ict1/ict' className='btn bg-orange-400 border-none text-white hover:bg-orange-500'>Next</NavLink>
            </div>
        </div>
    );
};

export default Global;