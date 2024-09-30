import Link from 'next/link';
import React from 'react'
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";



const navLinks = [
    'Sustainable Websites',
    'Contact Us',
    'Blog',
]

export default function FooterServer() {
    return (
        <div className=' font-poppinsLight'>
            <div className=' w-full flex items-center justify-between text-[#1A9876'>
                <div className=' bg-[#1A9876] h-[1px] w-full rounded-full' />
                <ul className=' flex flex-col md:flex-row items-center gap-5 px-10 w-[70%]'>
                    {
                        navLinks.map(el =>
                            <li className=' text-[#1A9876] hover:text-[#A3C2C2] cursor-pointer text-center' key={el}>{el}</li>
                        )
                    }
                </ul>
                <div className=' bg-[#1A9876] h-[1px] w-full rounded-full' />
            </div>

            <div className=' max-w-7xl mx-auto px-5 py-20 flex flex-col gap-10 md:flex-row justify-between items-center md:items-end'>
                <div>
                    <p className=' text-[#1A9876] text-center md:text-start'>Contact:</p>
                    <p className=' flex items-center gap-1'> 
                        <AiOutlineMail />
                        contact@everythinggreen.org
                    </p>
                </div>
                <div className=' flex items-center gap-2'>
                    <Link href={'/'} >Privacy Policy</Link>
                    <FaLinkedin className=' text-[#0B58CA] w-5 h-5' />
                </div>
                <div className=' text-center w-full sm:w-[50%] md:w-[30%]'>
                    <p className=' text-[#1A9876]'>Address:</p>
                    <p>China Hong Kong City Block 3, Room 1203, 12th Floor, 33 Canton Rd, Tsim Sha Tsui, Hong Kong</p>
                </div>
            </div>
        </div>
    )
}
