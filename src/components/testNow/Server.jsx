import React from 'react'
import { IoIosArrowUp } from "react-icons/io";


export default function TestNowServer() {
    return (
        <div className=" p-5 flex flex-col items-center max-w-3xl mx-auto gap-5">
            <p className="text-center font-poppinsExtraLight text-2xl">
                These websites avoid bloated frameworks by using compressed graphics,
                efficient file formats, and lightweight fonts. Check out our
                information on developing sustainable websites and establishing a page
                weight budget if you want to learn more.
            </p>
            <button className=' transition-transform duration-150 font-poppinsRegular p-2 px-5 rounded-full border-2 flex items-center gap-2 text-white bg-black border-white shadow-2xl shadow-black hover:bg-[#1A9876] hover:border-[#6C757D] '> <IoIosArrowUp /> Test Now</button>
        </div>
    )
}
