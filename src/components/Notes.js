import React from 'react'

function Notes({notes}) {
  return (
    <section>
        {/* text area */}
        <p className='my-5 lg:w-1/2 text-justify mt-15'> {notes}</p>
      </section>
  )
}

export default Notes