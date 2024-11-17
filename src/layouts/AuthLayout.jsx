import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
    return (
        <div className='bg-[#f3f3f3] min-h-screen'>
            <header className='w-11/12 mx-auto py-2'>
                <Navbar/>
                <Outlet/>
            </header>
        </div>
    );
};

export default AuthLayout;