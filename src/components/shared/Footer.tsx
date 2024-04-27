import Link from 'next/link';
import React from 'react';
import brandLogo from "@/assets/logo/Logo_white.png"
import Image from 'next/image';


const Footer = () => {
    return (
        <footer className=' '>
            
            <div className='border grid grid-cols-3 gap-12 mx-auto max-w-7xl '>
                <div>
                    <div>
                    <div className="flex flex-shrink-0 items-center">
                        <Image className='h-[42px]' src={brandLogo} width={200} height={80} alt='logo' />
                    </div>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolore dolor sit hic necessitatibus optio!</p>
                    <div>
                        icons 
                    </div>
                </div>
                <div>
                    resource
                    <div>
                        <Link href={"/about"} >About</Link>
                    </div>
                </div>
                <div>Services</div>
            </div>

            <div className='bg-gray-100 text-center py-2'><p className='text-sm text-gray-600'>Copyright © 2022 PluginEver. All Rights Reserved</p></div>
        </footer>
    );
};

export default Footer;