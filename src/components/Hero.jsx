import React from 'react'
import { ReactTyped } from "react-typed";
import Scrollingcards from './Scrollingcards';

const Hero = () => {
    return (
        <div className='text-white'>
            <div className='max-w-[1240px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>
                    Trade the Global Markets with a Leading Forex Broker
                </p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
                    Spreads from 0.0 pips.
                </h1>
                <div className='flex justify-center items-center'>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
                        Trade
                    </p>
                    <ReactTyped
                        className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                        strings={['Forex', 'Indices', 'Crypto', 'Commodities', 'Treasuries']}
                        typeSpeed={80}
                        backSpeed={100}
                        loop />
                </div>
                <p className='md:text-2xl text-xl font-bold text-gray-500'>
                    Trade on the platform trusted by 5 million traders for over 15 years
                </p>
                <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Start Trading</button>
            </div>
            <div className='flex bg-slate-950 w-full overflow-hidden mt-[-96px] group'>
                <div className='flex animate-slide group-hover:paused'>
                    <Scrollingcards
                        currency="EURUSD" spread="0.6" bid="1.08150" ask="1.08160"
                    />
                    <Scrollingcards
                        currency="AUDUSD" spread="0.7" bid="0.65323" ask="0.65223"
                    />
                    <Scrollingcards
                        currency="GBPUSD" spread="0.9" bid="1.26022" ask="1.26013"
                    />
                    <Scrollingcards
                        currency="USDJPY" spread="0.9" bid="151.337" ask="151.328"
                    />
                    <Scrollingcards
                        currency="GBPJPY" spread="1.1" bid="190.648" ask="190.641"
                    />
                    <Scrollingcards
                        currency="XAUUSD" spread="0.3" bid="2,168.62" ask="2,168.38"
                    />
                    <Scrollingcards
                        currency="NZDUSD" spread="1.1" bid="0.60024" ask="0.60013"
                    />
                    <Scrollingcards
                        currency="US 30" spread="2.2" bid="39,624.53" ask="39,622.78"
                    />
                    <Scrollingcards
                        currency="US SPX 500" spread="0.5" bid="5,236.86" ask="5,236.36"
                    />
                </div>
                <div className='flex animate-slide group-hover:paused' aria-hidden='true'>
                    <Scrollingcards
                        currency="EURUSD" spread="0.6" bid="1.08150" ask="1.08160"
                    />
                    <Scrollingcards
                        currency="AUDUSD" spread="0.7" bid="0.65323" ask="0.65223"
                    />
                    <Scrollingcards
                        currency="GBPUSD" spread="0.9" bid="1.26022" ask="1.26013"
                    />
                    <Scrollingcards
                        currency="USDJPY" spread="0.9" bid="151.337" ask="151.328"
                    />
                    <Scrollingcards
                        currency="GBPJPY" spread="1.1" bid="190.648" ask="190.641"
                    />
                    <Scrollingcards
                        currency="XAUUSD" spread="0.3" bid="2,168.62" ask="2,168.38"
                    />
                    <Scrollingcards
                        currency="NZDUSD" spread="1.1" bid="0.60024" ask="0.60013"
                    />
                    <Scrollingcards
                        currency="US 30" spread="2.2" bid="39,624.53" ask="39,622.78"
                    />
                    <Scrollingcards
                        currency="US SPX 500" spread="0.5" bid="5,236.86" ask="5,236.36"
                    />
                </div>
            </div>
        </div>
    )
}

export default Hero