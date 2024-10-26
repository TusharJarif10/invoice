import React from 'react'

export default function MainDetails({name, address}) {
  return (
    <section className='flex flex-col items-end justify-end'>
        <h2 className='font-bold text-xl mb-1 uppercase md:text-4xl'>{name}</h2>
        <p>{address}</p>
        {/* <div className='h-30'> 
           <img src={file} alt="" /> 
        </div> */}
        {/* <input type="text"  name='text' id='text' placeholder='Enter your name' required/>
        <input type="text"  name='text' id='text' placeholder='Enter your name' required/>
        <input type="text"  name='text' id='text' placeholder='Enter your name' required/> */}
       
      </section>
  )
}
