import React from 'react'

function Footer({name,email,website,address, phone, bankname, bankaccountnumber,clientname,showField, branchname,bankroutenumber}) {
  return (
    
    <footer className='footer border-t-2 border-gray-300 pt-10'>

<div>
    <ul class="mt-8 space-y-3 font-medium">
        {/* <li class="flex items-start lg:col-span-1">
            <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
                Correction of Design is possible. Design correction will result in increase and decrease of total budget.
            </p>
        </li> */}
        {/* <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            <div class="flex-shrink-0">
                <svg class="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"></path>
                </svg>
            </div>
            <p class="ml-3 leading-5 text-gray-600">
                Any extra cost charged by venue/hall is not included in the package.
            </p>
        </li> */}
        {/* <li class="flex items-start mt-5 lg:col-span-1 lg:mt-0">
            
         
            <div
                class="flex bg-white items-center px-6 py-4 text-sm  rounded-b shadow-sm border-red-500">
                <svg viewBox="0 0 24 24" class="w-8 h-8 text-red-500 stroke-current" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M12 8V12V8ZM12 16H12.01H12ZM21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </svg>
                <div class="ml-3">
                    <div class="font-bold text-left text-black ">Please Note</div>
                    <div class="w-full text-gray-900  mt-1">This quotation is based on the designs and requirements that you have provided to us. total price could be further decreased if the you customize the designs. <br />
                    Customers must pay the remaining balance after the decorations are completed. </div>
                </div>
            </div>
        </li> */}
        <li>
        {showField  &&  (
          
          <div className = "pt-10">
          <div class="bg-gray-100 p-6 rounded-lg shadow-md ">
          <h2 class="text-2xl font-bold mb-4">Bank Information</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-xl font-semibold mb-2">Bank Name</h3>
              <p class="text-gray-700">{bankname}</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-xl font-semibold mb-2">Iver Number</h3>
              <p class="text-gray-700">{bankaccountnumber}</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-xl font-semibold mb-2">Branch Name </h3>
              <p class="text-gray-700">{branchname}</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-xl font-semibold mb-2">Routing Number</h3>
              <p class="text-gray-700">{bankroutenumber}</p>
            </div>
        
        </div>
      </div>
          </div>)}
          
        
        </li>
        <li className='pt-2 pb-5'>
          For any query, Please Contact: <div>
                {/* <div class="mt-2 font-bold text-xl">
                    {name} 
                </div>  */}
                <div className='font-semibold mt-5'>
                    {phone}
                </div>
                <div>
                    {website}
                </div>
                <div>
                  Bank Name : {bankname}
                </div>
                <div>
                  IBAN Number : {bankaccountnumber}
                </div>
                <div>
                    {address}
                </div>
               
                
            </div>
        </li>
             
    </ul>
</div>






    {/* <ul className='flex flex-wrap items-center justify-center'>
      <li><span className='font-bold'>your name:</span> {name}</li>
      <li><span className='font-bold'>your email:</span> {email}</li>
      <li><span className='font-bold'>phone number:</span>{phone}</li>
      <li><span className='font-bold'>Bank:</span>{bankname}</li>
      <li><span className='font-bold'>Account holder name:</span> {clientname}</li>
      <li><span className='font-bold'>Account Number:</span> {bankaccountnumber}</li>
      <li><span className='font-bold'> website:</span> <a href={website} target='_blank' rel='noopenner noreferrer'></a>{website}</li>
    </ul> */}
  </footer>
  )
}

export default Footer