import Image from 'next/image'
import React from 'react'
import google from '../../assets/google-0effc151.png'
import facebook from '../../assets/facebook-cdaf40bf.png'
import alphabet from '../../assets/alphabet-2dd8e6ce.png'
import redinc from '../../assets/red-inc-e83de883.png'
import Link from 'next/link'

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
    return (
        <>
        <div className=' max-w-3xl mx-auto space-y-10 py-10'>
            <h1 className=' text-5xl text-[#1a9876] text-center flex flex-col items-center font-bold'> <span>sustainable</span>example websites</h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    websitesData.map((el) => 
                        <button key={el.heading} data-modal-target="default-modal" data-modal-toggle="default-modal" className=' flex flex-col items-center text-center' type="button">
                            <div className=' relative h-48 w-72'>
                                <Image src={el.image} alt={el.subHeading} className=' absolute object-cover shadow-lg' fill />
                            </div>
                            <div className=' mt-5 text-[#045862]'>
                                <h2 className=' font-robotoMedium '>{el.heading}</h2>
                                <p className=' font-robotoRegular'>{el.subHeading}</p>
                            </div>
                        </button>
                    )
                }
            </div>
        </div>

        {/* Modal */}
            <div id="default-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-2xl max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Terms of Service
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <div class="p-4 md:p-5 space-y-4">
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                            </p>
                            <p class="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                            </p>
                        </div>
                        <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="default-modal" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                            <button data-modal-hide="default-modal" type="button" class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Decline</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
