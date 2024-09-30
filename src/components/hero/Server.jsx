import Image from 'next/image'
import React from 'react'
import heroImage from '../../assets/hero-image.png'
import Link from 'next/link'
import { AiOutlineExclamationCircle } from "react-icons/ai";


export default function HeroServer() {
    return (
        <div className='flex flex-col-reverse lg:flex-row gap-5 lg:gap-10 justify-evenly items-center h-screen bg-custom-gradient -mt-16 lg:-mt-24 px-5 lg:px-20 py-10'>
            <div className=' flex gap-5 lg:gap-10 justify-between flex-col items-center lg:items-start text-white'>
                <h1 className='text-3xl md:text-5xl font-bold text-center lg:text-start'>Unlock Insights for a Greener Future!</h1>
                <div className=" flex text-center lg:text-start">
                    <div> 
                        Download our comprehensive whitepaper now and embark on a journey towards 
                            <div className=' inline-block'>
                                <div className=' flex items-center'>
                                    a more sustainable future. 
                                    <p className="relative justify-center items-center group inline ml-1">
                                        <span className="font-bold text-green-600 rounded">
                                            <AiOutlineExclamationCircle />
                                        </span>
                                        <span className=" -left-48 lg:-left-28 absolute top-full mt-2 hidden group-hover:block w-60 text-center bg-white text-black text-sm rounded p-5">
                                            Find out how many visitors from different traffic sources interact with your website.
                                        </span>
                                    </p>
                                </div>
                            </div>  
                    </div>
                    
                </div>

                <Link href={'/'} className=' w-44 text-center font-bold hover:bg-[#076165] hover:text-black transition-all duration-300 bg-[#e8e3e3] rounded-full mt-0 lg:mt-10 text-black p-4 shadow-2xl'>Download Now!</Link>
            </div>
            <div className=' relative h-[12rem] w-[18rem] lg:h-[25rem] lg:w-[50rem] mt-20'>
                <Image fill src={heroImage} className=' absolute object-cover' alt='hero-image' />
            </div>
        </div>
    )
}
