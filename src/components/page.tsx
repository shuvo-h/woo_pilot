import React from 'react';

import NavBar from './NavBar';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Accordion from './Accordion';

const Page: React.FC = () => (
    <div>
        <NavBar />
        <HeroSection />
        <Footer />
        <Accordion />
    </div>
);

export default Page;