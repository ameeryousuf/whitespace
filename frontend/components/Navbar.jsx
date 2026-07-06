import React from 'react';
import { ArrowRight, ChevronDown, Building2 } from 'lucide-react';

export default function Navbar() {

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
        <nav className='bg-[#043873] fixed top-0 z-50 w-full h-[8vh] flex justify-between items-center py-2 px-40'>
            <a
                href='/'
                className='flex gap-2 text-xl font-bold hover:cursor-pointer text-white'
            >
                <Building2 size={30} />
                WhiteSpace
            </a>
            <div className='flex gap-10'>
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
                                            <a
                                                href={item.path}
                                                className='block px-4 py-2 text-sm text-[#043873] hover:cursor-pointer hover:text-blue-900 hover:underline'
                                            >
                                                {item.name}
                                            </a>
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
        </nav >
    )
}
