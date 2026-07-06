import React from 'react';
import Link from 'next/link';
import { ArrowRight, Building2, Earth } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
    return (
        <>
            <div className='bg-[#043873] w-full py-10 md:py-16 px-4 sm:px-8 lg:px-16 xl:px-40 flex flex-col justify-center items-center text-white'>
                <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10'>
                    <div className='w-full flex flex-col justify-start items-start gap-2 sm:col-span-2 lg:col-span-1'>
                        <Link
                            href='/'
                            className='flex gap-2 text-xl font-bold hover:cursor-pointer text-white'
                        >
                            <Building2 size={30} />
                            WhiteSpace
                        </Link>
                        <p className='text-gray-200'>
                            WhiteSpace was created for the new ways we live and work. We make a better workspace around the world.
                        </p>
                    </div>
                    <ul className='w-full flex flex-col justify-start items-start gap-5'>
                        <li className='font-bold text-white'>Product</li>
                        <li className='w-full text-gray-200'>Overview</li>
                        <li className='w-full text-gray-200'>Pricing</li>
                        <li className='w-full text-gray-200'>Customer stories</li>
                    </ul>
                    <ul className='w-full flex flex-col justify-start items-start gap-5'>
                        <li className='font-bold text-white'>Resources</li>
                        <li className='w-full text-gray-200'>Blog</li>
                        <li className='w-full text-gray-200'>Guides & tutorials</li>
                        <li className='w-full text-gray-200'>Help center</li>
                    </ul>
                    <ul className='w-full flex flex-col justify-start items-start gap-5'>
                        <li className='font-bold text-white'>Company</li>
                        <li className='w-full text-gray-200'>About us</li>
                        <li className='w-full text-gray-200'>Careers</li>
                        <li className='w-full text-gray-200'>Media Kit</li>
                    </ul>
                    <div className='w-full flex flex-col justify-start items-start gap-5 sm:col-span-2 lg:col-span-1'>
                        <h1 className='text-2xl font-bold text-white'>Try it Today</h1>
                        <p className='text-gray-200'>
                            Get started for free. Add your whole team as your needs grow.
                        </p>
                        <button className="text-white bg-[#4F9CF9] text-sm px-6 py-2 rounded-sm hover:cursor-pointer duration-300 transition-all ease-out flex justify-center items-center gap-2">
                            Start Today
                            <ArrowRight size={15} />
                        </button>
                    </div>
                </div>
                <div className='w-full py-6 mt-10 flex flex-col sm:flex-row gap-4 justify-between items-center border-t border-gray-400'>
                    <ul className='flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-2 text-sm text-center sm:text-left'>
                        <li className='flex justify-start items-center gap-2'>
                            <span className='flex justify-start items-center gap-1'>
                                <Earth size={15} />
                                English
                            </span>
                            <ArrowRight size={15} />
                        </li>
                        <li>Terms & Privacy</li>
                        <li>Security</li>
                        <li>Status</li>
                        <li>©2021 Whitespace LLC.</li>
                    </ul>
                    <Image
                        src={'/Social Icon.png'}
                        width={100}
                        height={100}
                        alt='social-icon'
                    />
                </div>
            </div>
        </>
    )
}
