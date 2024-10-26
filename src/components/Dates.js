import React from 'react'

export default function Dates({venue, venuetype, venuedate}) {
  return (
    <article className=' mb-20 flex  items-end justify-end'>
        <ul>
          {/* <li className='p-1  bg-gray-100'><span className='font-bold'>Venue: </span>{venue}</li> */}
          {/* <li className='p-1'><span className='font-bold'>Program Type: </span>{venuetype}</li> */}
          <li className='p-1'><span className='font-bold'>Invoice Date: </span>{venuedate}</li>
        </ul>
      </article>
  )
}
