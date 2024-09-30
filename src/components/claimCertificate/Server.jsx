import Image from 'next/image'
import React from 'react'
import coloredLogo from '../../assets/download.png'
import Link from 'next/link'

export default function ClaimCertificateServer() {
    return (
        <div className=' py-20 px-5'>
            <Link href={'/'}  className=' flex flex-col items-center max-w-4xl mx-auto border shadow-lg gap-5'>
                <h1 className=' w-full font-poppinsBold text-white text-center bg-[#1A9876] text-2xl p-5 rounded-tr-md rounded-tl-md'>claim and download your greenWeb certificate</h1>
                <div className=' relative h-11 w-44'>
                    <Image className=' absolute object-cover' src={coloredLogo} alt='logo' fill />
                </div>
                <p className=' font-robotoRegular text-center py-5 text-xl w-[90%]'>The greenWeb team designed this website's carbon calculator to inspire and enlighten people about the importance of creating websites with low carbon emissions.</p>
            </Link>
        </div>
    )
}
