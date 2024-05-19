import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';

const Main = () => {
    return (
        <div className='bg-[#090125] text-white '>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;