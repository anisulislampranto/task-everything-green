import React from 'react'

export default function NewsletterServer() {
    return (
        <div className=' max-w-2xl mx-auto py-20 px-5'>
            <h1 className=' max-w-xl mx-auto text-center text-4xl font-poppinsBold text-[#1A9876]'>learn more about web sustainability?</h1>

            <div className=' flex flex-col shadow-2xl border rounded-md px-5 py-10 items-center gap-5 mt-5 '>
                <h2 className=' font-robotoMedium text-[#1A9876] text-2xl'>join the greenWeb newsletter</h2>

                <form action="" className=' flex flex-col md:flex-row justify-center items-center gap-3 w-full'>
                    <input type="email" placeholder='Your Email Address' className=' transition-transform duration-150 focus:outline-4 font-poppinsRegular focus:outline-[#C7DAFF] rounded-full py-2 px-4 w-[70%] bg-[#ECECEC] focus:bg-white' />
                    <input type="button" value="Subscribe" className=' cursor-pointer transition-transform duration-150 font-poppinsRegular p-2 px-5 rounded-full border-2 flex items-center gap-2 text-white bg-black border-white shadow-2xl shadow-black hover:bg-[#1A9876] hover:border-[#6C757D] ' />
                </form>

                <p className=' text-[#7C7C7C] text-center font-poppinsLight'>The greenWeb team will send you occasional updates on web accessibility and sustainability. There will be no spam, only high-quality information. </p>
            </div>
        </div>
    )
}
