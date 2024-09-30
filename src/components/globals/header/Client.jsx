'use client';

import Image from 'next/image'
import React, {useState} from 'react'
import logo from '../../../assets/evergreen-logo.png'
import logoDark from '../../../assets/logo-light.png'
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";
import Link from 'next/link';


const navLinks = [
    'Sustainable Websites',
    'Blog',
    'Contact Us',
    'Login'
]


export default function HeaderClient() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <div className='flex items-center justify-between bg-white text-black lg:bg-green-800 p-5 gap-5 relative'>
                <div className=' relative h-14 w-[12rem] hidden lg:block'>
                    <Image src={logo} alt='logo' fill className=' absolute object-contain' />
                </div>

                <div className=' relative h-14 w-[12rem] block lg:hidden'>
                    <Image src={logoDark} alt='logo' fill className=' absolute object-contain' />
                </div>

                <hr className=' text-[#fff] w-[30%] hidden lg:block' />

                <ul className=' hidden lg:flex text-white items-center justify-between gap-5'>
                    {
                        navLinks.map((el) => 
                            <Link href={'/'} className=' text-[#fff] hover:text-[#96BEBA] cursor-pointer ' key={el}>{el}</Link>
                        )
                    }
                </ul>
                <hr className=' text-[#fff] w-[5%] hidden lg:block' />

                {/* For Small Screen */}
                
                <button className=' block lg:hidden' onClick={() => setOpen(!open)} >
                    {
                        open ? <RiCloseLargeLine className=' w-8 h-8 text-black' /> : <RxHamburgerMenu className=' w-8 h-8 text-black' /> 
                    }
                </button>
            </div>
            <ul className={`bg-white absolute top-24 ${open ? 'block' : 'hidden'} text-center w-full flex flex-col`}>
                {
                    navLinks.map(el => 
                        <Link href={'/'} className='hover:text-[#96BEBA]' key={el} >{el}</Link>
                    )
                }
            </ul>
        </>
    )
}
