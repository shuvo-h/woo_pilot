import React from 'react';
import brandLogo from "@/assets/logo/nav_brand_logo.png"
import Image from 'next/image';
import Icon from '../icons/Icon';

type TNavbarProps = {
    isColored: boolean;
}
const Navbar = ({isColored}:TNavbarProps) => {
    return (
        <nav className={`sticky top-0 bg-${ isColored? '[#030b21]':"white"} h-[65px] text-slate-400 pt-4 font-normal`}>
            <div className='flex ml-[10%] mr-[5%]'>
                <div className='flex justify-center items-center'>
                    <div>
                        <Image className='h-[42px]' src={brandLogo} width={200} height={80} alt='logo' />
                    </div>
                </div>
                <div className='grow flex justify-center items-center'>
                    <ul className='flex justify-center align-center gap-4'>
                        <li className=''>Plugins</li>
                        <li className=''>WooCommerce Bundle</li>
                        <li className=''>Docs</li>
                        <li className=''>Support</li>
                        <li className=''>Blog</li>
                    </ul>
                </div>
                <div className='flex justify-center items-center min-w-[250px]'>
                    <ul className='flex justify-center align-center  gap-4'>
                        <li className=''>
                            <button
                                type="button"
                                className="rounded-md bg-transparent px-2 py-1 text-xs font-normal text-blue-500 shadow-sm ring-1 ring-inset ring-blue-400 hover:bg-[#1e3062]"
                            >
                                Pricing
                            </button>
                        </li>
                        <li className='flex items-center'>
                            <div>
                                <Icon icon='avatar' height={15} width={15} className='fill-slate-400' />
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;