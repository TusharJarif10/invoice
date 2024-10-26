import React from 'react'

export default function ClientDetails({clientname, clientaddress, clientPhone, venue, invoiceDate, venuedate}) {
  return (



    <div className='flex flex-col sm:flex-row items-start justify-between py-10'>

    <div className='flex flex-col sm:w-2/3'>
        <section className='  items-start'>
        <h2 className='text-2xl mb-1'>Bill For/فاتورة ل</h2>
        <h2 className=' uppercase font-bold mb-1'>{clientname}</h2>
        <p>{clientPhone}</p>
        <p>{clientaddress}</p>
       
        </section>
    </div>

    <div className='flex flex-col sm:w-1/3 mt-6 sm:mt-0'>
        <section className=' items-end'>
        <ul>
          {/* <li className='p-1  bg-gray-100'><span className='font-bold'>Venue: </span>{venue}</li> */}
          <li className='p-1'><span className='font-bold'>Invoice Date: </span>{invoiceDate}</li>
          <li className='p-1'><span className='font-bold'>Delivery Date: </span>{venuedate}</li>
        </ul>
        </section>
    </div>


      </div>

  )
}
