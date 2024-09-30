'use client';

import Image from 'next/image'
import React, { useState } from 'react'
import google from '../../assets/google-0effc151.png'
import facebook from '../../assets/facebook-cdaf40bf.png'
import alphabet from '../../assets/alphabet-2dd8e6ce.png'
import redinc from '../../assets/red-inc-e83de883.png'
import ModalClient from '../modal/Client';

const websitesData = [
    {
        image: google,
        heading: 'Google',
        subHeading: '0.26gm/per visit'
    },
    {
        image: facebook,
        heading: 'Facebook',
        subHeading: '0.21gm/per visit'
    },
    {
        image: alphabet,
        heading: 'Alphabet',
        subHeading: '0.094gm/per visit'
    },
    {
        image: redinc,
        heading: 'Red-Inc',
        subHeading: '0.230gm/per visit'
    },
]

export default function WebsitesServer() {
    const [modalData, setModalData] = useState();
    const [open, setOpen] = useState(false);

    const handleClick = (el) => {
        setModalData(el)
        setOpen(true)
    }

    return (
        <>
            <div className=' max-w-3xl mx-auto space-y-10 py-10'>
                <h1 className=' text-5xl text-[#1a9876] font-poppinsBold text-center flex flex-col items-center'> <span>sustainable</span>example websites</h1>
                <ul className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {
                        websitesData.map((el) => 
                            <li onClick={() => handleClick(el)} key={el.heading} className=' cursor-pointer flex flex-col items-center text-center' >
                                <div className=' relative h-48 w-72'>
                                    <Image src={el.image} alt={el.subHeading} className=' absolute object-cover shadow-lg' fill />
                                </div>
                                <div className=' mt-5 text-[#045862]'>
                                    <h2 className=' font-robotoMedium '>{el.heading}</h2>
                                    <p className=' font-robotoRegular'>{el.subHeading}</p>
                                </div>
                            </li>
                        )
                    }
                </ul>
            </div>
            <ModalClient modalData={modalData} setOpen={setOpen} open={open} />
        </>
    )
}
