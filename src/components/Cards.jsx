import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Cards = () => {
    return (
        <div className='w-full py-[8rem] bg-white'>
            <div className='max-w-[1240px] mx-auto'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold text-center'>Why GCMarkets?</h1>
                <div className='max-w-[1240px] mx-auto grid lg:grid-cols-4 sm:grid-cols-2 gap-8 my-8'>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto bg-white' src={Single} alt="/" />
                        <h2 className='text-xl font-bold text-center py-4'>Our focus is you</h2>
                        <p className='text-center'>We're always looking for ways to improve your trading experience</p>
                    </div>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto bg-white' src={Double} alt="/" />
                        <h2 className='text-xl font-bold text-center py-4'>Value for money</h2>
                        <p className='text-center'>Keep your trading costs down with competitive spreads and low margins</p>
                    </div>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto bg-white' src={Triple} alt="/" />
                        <h2 className='text-xl font-bold text-center py-4'>Intuitive platform</h2>
                        <p className='text-center'>Trade on our user-friendly, proprietary platform and native apps</p>

                    </div>
                    <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                        <img className='w-20 mx-auto bg-white' src={Triple} alt="/" />
                        <h2 className='text-xl font-bold text-center py-4'>Multiple award-winners</h2>
                        <p className='text-center'>Over 50 platform and service awards worldwide in the last two years</p>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 text-black'>Start Trading</button>
                </div>
            </div>
        </div>
    )
}

export default Cards