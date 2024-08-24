import React, { useState } from 'react';
import img from '../assets/Image/learn.png'
import chapter1 from '../assets/Image/chapter1.jpg'
import chapter2 from '../assets/Image/chapter2.png'
import chapter3 from '../assets/Image/chapter3.jpg'
import { NavLink } from 'react-router-dom';
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const Home = () => {
    const  [ facebookUser, setFacebookUser] = useState();
    const [token, setToken] = useState();
    const provider = new FacebookAuthProvider();

    const handleLogin = ()  => {
        signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          const credential = FacebookAuthProvider.credentialFromResult(result);
          const accessToken = credential.accessToken;
          setFacebookUser(user);
          setToken(accessToken);
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);
          alert(error);
        });
    }

    console.log('facebook', facebookUser, token);
    return (
        <div className='mt-10 md:px-10 px-0'>
            <img className='shadow-2xl rounded-2xl mb-10' src={img} alt="" />

            <hr />

            {/* <div>
                <button className='btn btn-secondary mt-6' onClick={handleLogin}>Facebook</button>
            </div> */}
            <div className='mt-10'>
              <div className='grid md:grid-cols-3 grid-cols-1 md:justify-between justify-center gap-24'>
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

                <NavLink to='/Chapter-3' className='bg-[#003366] h-[400px] w-[350px] flex flex-col justify-center items-center shadow-2xl rounded-2xl hover:shadow-none'>
                    <h2 className='text-3xl font-bold shadow-2xl'>তৃতীয় অধ্যায়</h2>
                    <img className='h-[100px] w-[100px] rounded-full mt-5' src={chapter3} alt="" />
                    <p className='text-xl font-medium mt-10 mx-4 text-center'>সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস</p>
                </NavLink>

                <NavLink to='/Chapter-4' className='bg-[#003366] h-[400px] w-[350px] flex flex-col justify-center items-center shadow-2xl rounded-2xl hover:shadow-none'>
                    <h2 className='text-3xl font-bold shadow-2xl'>4th Chapter</h2>
                    <img className='h-[100px] w-[100px] rounded-full mt-5' src={chapter3} alt="" />
                    <p className='text-xl font-medium mt-10 mx-4 text-center'>HTML</p>
                </NavLink>

              </div>
            </div>
        </div>
    );
};

export default Home;