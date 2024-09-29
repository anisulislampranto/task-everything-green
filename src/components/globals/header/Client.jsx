'use client';

import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";

export default function HeaderClient({navLinks}) {
    return (
        <div>
            <ul className=' text-white'>
                {
                    navLinks.map(el => 
                        <li key={el} >{el}</li>
                    )
                }
            </ul>
            <div className=' hidden md:block'>
                <RxHamburgerMenu className=' w-5 h-5' /> 
            </div>
        </div>
    )
}
