import Accordion from '@/components/Accordion';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import NavBar from '@/components/NavBar';
import React from 'react';

const page = () => {
    return (
        <div>
            <NavBar />
            <HeroSection />
            <Accordion />
            Home page
            <Footer />
        </div>
    );
};

export default page;