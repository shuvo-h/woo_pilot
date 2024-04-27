import React from 'react';

const page = () => {
    return (
        <div>

            <div className='relative mx-auto mt-16 grid w-full max-w-container grid-cols-1 px-4 sm:mt-20 sm:px-6 lg:px-8 xl:mt-32'>
                <div className="col-start-1 row-start-1 h-7 text-base font-semibold leading-7 text-sky-500" aria-hidden="true">By the makers of Tailwind CSS</div>
                <h1 className="col-start-1 row-start-2 mt-4 max-w-[36rem] text-4xl font-extrabold tracking-tight text-slate-900 sm:text-7xl xl:max-w-[43.5rem]">Build your next idea even faster.</h1>
                <p className="col-start-1 row-start-3 mt-4 max-w-lg text-lg text-slate-700">Beautifully designed, expertly crafted components and templates, built by the makers of Tailwind CSS. The perfect starting point for your next project.</p>
                <div class="col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"><a class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-slate-900 text-white hover:bg-slate-700" href="/components"><span>Browse components <span aria-hidden="true" class="hidden text-slate-400 sm:inline">→</span></span></a><a class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15 " href="/templates"><span>Explore templates <span aria-hidden="true" class="hidden text-black/25 sm:inline">→</span></span></a></div>
                <div className='pointer-events-none col-start-1 row-start-5 flex md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end'>
                    <div className='-ml-[32rem] mt-12 h-[46.375rem] origin-top scale-[calc(204/299)] select-none sm:-ml-[24rem] sm:-mt-20 sm:h-auto sm:transform-none md:-ml-64 md:mt-10 lg:-ml-16 lg:mt-0 xl:-mr-4 xl:ml-0'>
                        <div className='flex justify-end'>
                            <div className='relative flex items-end'>
                                <div className='absolute -inset-x-8 bottom-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_right,transparent,white_4rem,white_calc(100%-4rem),transparent)]'></div>
                                <div className='absolute left-16 top-full -mt-px h-8 overflow-hidden'>
                                    <div className='flex -mt-px h-[2px] w-56'>
                                        <div className='w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]'></div>
                                        <div className='-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]'></div>
                                    </div>
                                </div>
                                <div>
                                    <div className='p-4'>
                                        <div className='ml-auto pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-indigo-600 ring-black/20'>
                                            <div className='h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out translate-x-4'></div>
                                        </div>
                                        <div className="mt-8 flex items-center justify-end">
                                            <div className='pointer-events-auto h-6 w-10 rounded-full p-1 ring-1 ring-inset transition duration-200 ease-in-out bg-slate-900/10 ring-slate-900/5'>
                                                <div className='h-4 w-4 rounded-full bg-white shadow-sm ring-1 ring-slate-700/10 transition duration-200 ease-in-out'></div>
                                            </div>
                                            <div className='pointer-events-auto ml-8 rounded-md bg-indigo-600 px-3 py-2 text-[0.8125rem] font-semibold leading-5 text-white hover:bg-indigo-500'>Button A</div>
                                            <div></div>
                                        </div>
                                    </div>
                                    <div className='relative z-10 p-4 text-right'></div>
                                </div>
                                <div className='relative z-10 p-4'>
                                    <div className='absolute -inset-y-8 right-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]'></div>
                                    <div className='absolute -inset-y-8 left-0 w-px bg-slate-900/15 [mask-image:linear-gradient(to_top,transparent,white_4rem,white_calc(100%-4rem),transparent)]'></div>
                                    <div className='absolute -inset-x-8 top-0 h-px bg-slate-900/15 [mask-image:linear-gradient(to_left,transparent,white_4rem,white_calc(100%-4rem),transparent)]'></div>
                                    <div className='absolute bottom-full left-40 -mb-px flex h-8 items-end overflow-hidden'>
                                        <div className='flex -mb-px h-[2px] w-56'>
                                            <div className='w-full flex-none blur-sm [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]'></div>
                                            <div className='-ml-[100%] w-full flex-none blur-[1px] [background-image:linear-gradient(90deg,rgba(56,189,248,0)_0%,#0EA5E9_32.29%,rgba(236,72,153,0.3)_67.19%,rgba(236,72,153,0)_100%)]'></div>
                                        </div>
                                    </div>
                                    <div className='w-[24.5rem] divide-y divide-slate-400/20 rounded-lg bg-white text-[0.8125rem] leading-5 text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10'>
                                        <div className='flex items-center p-4'>
                                            <img src="/img/avatar-1.jpg" alt="" className="h-10 w-10 flex-none rounded-full" />
                                            <div className="ml-4 flex-auto"><div className="font-medium">Leonard Krasner</div><div className="mt-1 text-slate-700">@leonardkrasner</div></div>
                                            <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">View</div>
                                        </div>
                                        <div className='flex items-center p-4'>
                                            <img src="/img/avatar-1.jpg" alt="" className="h-10 w-10 flex-none rounded-full" />
                                            <div className="ml-4 flex-auto"><div className="font-medium">Leonard Krasner</div><div className="mt-1 text-slate-700">@leonardkrasner</div></div>
                                            <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">View</div>
                                        </div>
                                        <div className='flex items-center p-4'>
                                            <img src="/img/avatar-1.jpg" alt="" className="h-10 w-10 flex-none rounded-full" />
                                            <div className="ml-4 flex-auto"><div className="font-medium">Leonard Krasner</div><div className="mt-1 text-slate-700">@leonardkrasner</div></div>
                                            <div className="pointer-events-auto ml-4 flex-none rounded-md px-2 py-[0.3125rem] font-medium text-slate-700 shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">View</div>
                                        </div>
                                        <div className="p-4"><div className="pointer-events-auto rounded-md px-4 py-2 text-center font-medium shadow-sm ring-1 ring-slate-700/10 hover:bg-slate-50">View all</div></div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex justify-end'>
                                <div className='relative z-10 p-4'>
                                    <div className='flex w-[41rem] rounded-lg bg-white shadow-xl shadow-black/5 ring-1 ring-slate-700/10'>
                                        <div className='flex items-center space-x-4 px-6 py-4'>
                                            <span className='h-6 w-6 flex-none'>1</span>
                                            <span className='h-10 w-10 flex-none'>2</span>
                                            <span className='h-6 w-6 flex-none'>3</span>
                                        </div>
                                        <div className='flex flex-auto items-center border-l border-slate-200/60 pl-6 pr-4 text-[0.8125rem] leading-5 text-slate-700'></div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-start justify-end'></div>
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default page;