"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronDown, Building2, Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);

    const dropDownMenu = [
        {
            name: 'Products',
            items: [
                {
                    name: 'item 1',
                    path: '/'
                },
                {
                    name: 'item 2',
                    path: '/'
                },
            ]
        },
        {
            name: 'Solutions',
            items: [
                {
                    name: 'item 3',
                    path: '/'
                },
                {
                    name: 'item 4',
                    path: '/'
                },
            ]
        },
        {
            name: 'Resources',
            items: [
                {
                    name: 'item 5',
                    path: '/'
                },
                {
                    name: 'item 6',
                    path: '/'
                },
            ]
        },
        {
            name: 'Pricing',
            items: [
                {
                    name: 'item 7',
                    path: '/'
                },
                {
                    name: 'item 8',
                    path: '/'
                },
            ]
        },
    ]
    return (
        <nav className='bg-[#043873] fixed top-0 z-50 w-full flex flex-col items-stretch'>
            <div className='w-full h-16 flex justify-between items-center px-4 sm:px-8 lg:px-16 xl:px-40'>
                <Link
                    href='/'
                    className='flex gap-2 text-xl font-bold hover:cursor-pointer text-white'
                >
                    <Building2 size={30} />
                    WhiteSpace
                </Link>

                <div className='hidden lg:flex gap-10 items-center'>
                    <ul className='flex gap-5 items-center'>
                        {dropDownMenu.map((menu, index) => (
                            <li key={index} className='relative group py-2'>
                                <button className='flex items-center gap-1 text-white text-sm hover:cursor-pointer'>
                                    {menu.name}
                                    <ChevronDown
                                        size={14}
                                        className='transition-transform duration-300 ease-out group-hover:rotate-180'
                                    />
                                </button>

                                <div className='absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out'>
                                    <ul className='min-w-40 bg-white rounded-sm shadow-lg py-2'>
                                        {menu.items.map((item, itemIndex) => (
                                            <li key={itemIndex}>
                                                <Link
                                                    href={item.path}
                                                    className='block px-4 py-2 text-sm text-[#043873] hover:cursor-pointer hover:text-blue-900 hover:underline'
                                                >
                                                    {item.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className='flex items-center justify-center gap-2'>
                        <button className='text-[#043873] bg-[#FFE492] text-sm px-6 py-2 rounded-sm hover:cursor-pointer duration-300 transition-all ease-out'>
                            Login
                        </button>
                        <button className='text-white bg-[#4F9CF9] text-sm px-6 py-2 rounded-sm hover:cursor-pointer duration-300 transition-all ease-out flex justify-center items-center gap-2'>
                            Try Whitespace free
                            <ArrowRight size={15} />
                        </button>
                    </div>
                </div>

                <button
                    type='button'
                    className='lg:hidden text-white hover:cursor-pointer'
                    onClick={() => setIsOpen((prev) => !prev)}
                    aria-label={isOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={isOpen}
                >
                    {isOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {isOpen && (
                <div className='lg:hidden w-full bg-[#043873] border-t border-white/10 px-4 sm:px-8 py-4 flex flex-col gap-1 max-h-[calc(100vh-4rem)] overflow-y-auto'>
                    {dropDownMenu.map((menu, index) => (
                        <div key={index} className='border-b border-white/10'>
                            <button
                                type='button'
                                className='w-full flex justify-between items-center text-white text-sm py-3 hover:cursor-pointer'
                                onClick={() => setOpenMenu((prev) => (prev === index ? null : index))}
                                aria-expanded={openMenu === index}
                            >
                                {menu.name}
                                <ChevronDown
                                    size={14}
                                    className={`transition-transform duration-300 ease-out ${openMenu === index ? 'rotate-180' : ''}`}
                                />
                            </button>
                            {openMenu === index && (
                                <ul className='flex flex-col gap-1 pl-4 pb-3'>
                                    {menu.items.map((item, itemIndex) => (
                                        <li key={itemIndex}>
                                            <Link
                                                href={item.path}
                                                className='block py-2 text-sm text-gray-200 hover:text-white'
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                    <div className='flex flex-col gap-2 pt-4'>
                        <button className='w-full text-[#043873] bg-[#FFE492] text-sm px-6 py-2 rounded-sm hover:cursor-pointer duration-300 transition-all ease-out'>
                            Login
                        </button>
                        <button className='w-full text-white bg-[#4F9CF9] text-sm px-6 py-2 rounded-sm hover:cursor-pointer duration-300 transition-all ease-out flex justify-center items-center gap-2'>
                            Try Whitespace free
                            <ArrowRight size={15} />
                        </button>
                    </div>
                </div>
            )}
        </nav>
    )
}
