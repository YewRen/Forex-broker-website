import React from 'react'
import TradingPlatform from '../assets/trading-img.png'
import { RiCheckboxCircleFill } from "react-icons/ri";

const Analytics = () => {
    return (
        <div className='w-full bg-white py-16 px-4'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
                <img className='w-[500px] mx-auto my-4' src={TradingPlatform} alt="/" />
                <div className='flex flex-col'>
                    <p className='text-[#00df9a] font-bold'>ADVANCED TRADING PLATFORMS</p>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Trade the way that suits you</h1>
                    <ul className='list-image-[{RiCheckboxCircleFill}]'>
                        <li className='flex gap-3 py-3 max-w-[65ch] items-center'>
                            <div className='py-2'>
                                <RiCheckboxCircleFill fill='#00df9a' size={30} />
                            </div>
                            MetaTrader 4 (MT4) & MetaTrader 5 (MT5), TradingView, cTrader and WebTrader & mobile apps for iPhone and Android devices
                        </li>
                        <li className='flex gap-3 py-3 max-w-[65ch] items-center'>
                            <div className='py-2'>
                                <RiCheckboxCircleFill fill='#00df9a' size={30} />
                            </div>
                            Advanced client portal to track your trading in real-time
                        </li>
                        <li className='flex gap-3 py-3 max-w-[65ch] items-center'>
                            <div className='py-2'>
                                <RiCheckboxCircleFill fill='#00df9a' size={30} />
                            </div>
                            Superior Virtual Private Servers (VPS) solutions for Expert Advisors (EAs), scalping and auto-trading
                        </li>
                    </ul>
                    <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-white'>Get Started</button>
                </div>
            </div>
        </div>
    )
}

export default Analytics