import Image from 'next/image'
import React from 'react'
import logo from '../../../assets/evergreen-logo.png'
import HeaderClient from './Client';


const navLinks = [
    'Sustainable Websites',
    'Blog',
    'Contact Us',
    'Login'
]


export default function HeaderServer() {
    return (
        <div className='flex items-center justify-between bg-green-800 p-5 gap-5'>
            <div className=' relative h-14 w-[12rem]'>
                <Image src={logo} alt='logo' fill className=' absolute object-contain' />
            </div>
            <hr className=' text-[#fff] w-[30%] hidden lg:block' />
            <ul className=' hidden lg:flex text-white items-center justify-between gap-5'>
                {
                    navLinks.map((el) => 
                        <li className=' text-[#fff] hover:text-[#96BEBA] cursor-pointer ' key={el}>{el}</li>
                    )
                }
            </ul>
            <hr className=' text-[#fff] w-[5%] hidden lg:block' />
            <HeaderClient navLinks={navLinks} />
        </div>
    )
}
