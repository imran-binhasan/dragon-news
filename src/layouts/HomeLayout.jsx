import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/LeftAside';
import RightAside from '../components/RightAside';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
    return (
        <>
        <Header/>
        <LatestNews/>
        <Navbar/>
        <Footer/>
        <main className='w-11/12 mx-auto grid grid-cols-12 gap-6'>
        <LeftAside/>
        <section className='col-span-6 border'>
        <Outlet/>
        </section>
        <RightAside/>
        </main>  
        </>

    );
};

export default HomeLayout;