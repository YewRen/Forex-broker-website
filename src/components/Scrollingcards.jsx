import React from 'react'

const Scrollingcards = ({ currency, spread, bid, ask }) => {
  return (
    <div className='min-w-[300px] border-x-2 sm:p-8 p-4'>
      <div className='flex flex-row justify-between mb-6'>
        <h2 className='font-bold text-2xl'>{currency}</h2>
        <h2>Spread <span className='text-3xl text-[#00df9a] font-medium'>{spread}</span></h2>
      </div>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col'>
          <h2>Bid</h2>
          <p>{bid}</p>
        </div>
        <div className='flex flex-col '>
          <h2>Ask</h2>
          <p>{ask}</p>
        </div>
      </div>
    </div>
  )
}

export default Scrollingcards