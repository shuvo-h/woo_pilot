import React from 'react';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Footer from './components/Footer';
import Accordion from './components/Accordion';

const Page: React.FC = () => (
    <div>
        <NavBar />
        <HeroSection />
        <Footer />
        <Accordion />
    </div>
);

export default Page;