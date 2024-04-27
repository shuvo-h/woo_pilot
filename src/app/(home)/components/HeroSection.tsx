import { fontFamily } from '@/utils/fonts';
import {  ArrowRightIcon } from '@heroicons/react/24/outline';
import React from 'react';
import twiloImg from "@/assets/images/home/hero/twilo.png"
import wp_content_pilot_pro from "@/assets/images/home/hero/wp_content_pilot_pro.png"
import plugineverbanner_woo_showcase_rev2 from "@/assets/images/home/hero/plugineverbanner_woo_showcase_rev2.png"
import Image from 'next/image';

const HeroSection = () => {
    return (
        <section className="pt-36 bg-[#030b21] text-white pb-12">
            <div className='ml-[10%] mr-[5%]'>
                <div className="grid grid-cols-2 gap-1">
                    <aside>
                        <h1 className={`text-6xl font-bold my-6 ${fontFamily.monaSansFont.className}`}>Extend Automate Building a Seling Machine</h1>
                        <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ex voluptate animi amet eligendi vero perspiciatis minima reiciendis. Soluta, debitis obcaecati. Inventore corporis debitis qui quidem omnis ducimus tempore, suscipit neque, culpa officiis cupiditate voluptatum nisi nobis, dignissimos quos eaque quibusdam atque! Earum illo rerum voluptates. Aperiam perferendis ut cumque.</p>
                        <div className='my-6'>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Explore our plugins
                                <ArrowRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-x-2 rounded-md bg-gray-900 ring-1 ml-6 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 shadow-sm"
                            >
                                WooCommerce Bundle
                                <ArrowRightIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
                            </button>
                        </div>
                        <div className='flex justify-around max-w-md m-auto mt-24'>
                            <div>
                                <div className='text-gray-300 text-sm'>14+ awesome</div>
                                <div className='text-gray-600 text-xs'>Plugins</div>
                            </div>
                            <div>
                                <div className='text-gray-300 text-sm'>14+ awesome</div>
                                <div className='text-gray-600 text-xs'>Plugins</div>
                            </div>
                            <div>
                                <div className='text-gray-300 text-sm'>14+ awesome</div>
                                <div className='text-gray-600 text-xs'>Plugins</div>
                            </div>
                        </div>
                    </aside>
                    <aside className='relative grid grid-cols-3 '>
                        <div className='absolute -inset-x-8 bottom-0 h-px bg-gray-50/35 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]'></div>
                        
                        <div className='flex items-end'>
                            <div className='flex flex-col '>
                                <div className='relative flex items-end justify-end p-4'>
                                    <div className=''>
                                        <div className='rounded-3xl overflow-hidden w-36'>
                                            <Image 
                                                className='rounded w-full' 
                                                src={wp_content_pilot_pro} 
                                                width={100} 
                                                height={50} 
                                                alt='twillo' 
                                            />
                                        </div>

                                    </div>
                                </div>
                                <div className="relative">
                                    <div className='absolute -inset-y-8 left-0 w-px bg-gray-50/35 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]'></div>
                                    <div className='absolute -inset-x-8 top-0 h-px bg-gray-50/35 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]'></div>
                                    <div className='relative p-4'>
                                        <div className='rounded-3xl overflow-hidden'>
                                            <Image 
                                                className='rounded w-full' 
                                                src={plugineverbanner_woo_showcase_rev2} 
                                                width={200} 
                                                height={100} 
                                                alt='twillo' 
                                            />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className='col-span-2 grid items-end '>
                            <div className="relative p-6">
                                <div className='absolute -inset-y-8 right-0 w-px bg-gray-50/35 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]'></div>
                                <div className='absolute -inset-y-8 left-0 w-px bg-gray-50/35 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]'></div>
                                <div className='absolute -inset-x-8 top-0 h-px bg-gray-50/35 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]'></div>
                                <div className='bg-indigo-950 rounded-3xl'>
                                    <div className="relative">
                                        <div className='rounded-3xl overflow-hidden'>
                                            <Image 
                                                className='rounded w-full' 
                                                src={twiloImg} 
                                                width={400} 
                                                height={400} 
                                                alt='twillo' 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
      </section>
    );
};

export default HeroSection;