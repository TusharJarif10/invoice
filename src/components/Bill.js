import React from 'react'

export default function Bill( {total, discount, due}) {
    const numberToWords  = require('number-to-words');
                 let inWords = numberToWords.toWords(total)
    
      console.log (discount);
   
  return (
    <>
    <div className='py-10 flex flex-col sm:flex-row justify-between '>
      <div className='flex flex-col'>
            <h2 className='flex items-start justify-start text-gray-800 text-2xl font-semibold'>المجموع/Total : {total.toLocaleString()} QAR</h2>
            <p className='flex items-start justify-start text-gray-800 text-xl font-semibold'> In words: {
          
          inWords
    }      </p>
            
      </div>

      <div className='flex flex-col items-end w-1/2'>
        <h2 className='flex items-start justify-start text-gray-800 text-xl font-semibold'>متقدم/Advance : {discount} QAR</h2>
        <h2 className='flex items-start justify-start text-gray-800 text-xl font-semibold'>حق/Due : {due} QAR</h2>
      </div>


    </div>
        

        
    
    </>
  )
}
