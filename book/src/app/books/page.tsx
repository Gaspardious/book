import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Books = () => {
  return (
<div className="relative h-content w-full flex flex-col items-center justify-center">
  <div className='absolute inset-0 bg-[url("/text.jpg")] bg-cover bg-center opacity-20 z-[-1]'></div>

  <section className="relative text-white m-10 bg-black/50 border border-orange-400 rounded-lg p-3 sm:w-[500px] flex flex-col items-start justify-center z-10">
    <Image
      src="/ww2.jpg"
      alt="Picture of the author"
      width={1000}
      height={1000}
      className='rounded-lg p-1 bg-white'
    />
    <h2 className='text-4xl font-bold text-orange-400 mx-auto p-3'>VLADIMIR DENKOV</h2>
    <section className='px-7 w-full'>
      <p className='text-xs '><span className='font-bold'>ÅR:</span> 2015</p>
      <p className='text-xs'><span className='font-bold'>GRENE:</span> Drama, Krig, Historia</p>
      <p className='text-xs'><span className='font-bold'>SIDOR:</span> 362</p>
      <p className='text-xs'><span className='font-bold'>HANDLING:</span> Lorem ipsum dolor sit amet...</p>
      <Link href='/books/vladimirdenkov'>
        <button className='text-lg mt-5 bg-orange-400 px-4 py-2 rounded-md font-bold cursor-pointer text-black w-full'>Till boken →</button>
      </Link>
    </section>
  </section>

  <section className="relative text-white m-10 bg-black/50 border border-orange-400 rounded-lg p-3 sm:w-[500px] flex flex-col items-start justify-center z-10">
    <Image
      src="/gun.jpg"
      alt="Picture of the author"
      width={1000}
      height={1000}
      className='rounded-lg p-1 bg-white'
    />
    <h2 className='text-4xl font-bold text-orange-400 mx-auto p-3'>BLODSBRÖDER</h2>
    <section className='px-7 w-full'>
      <p className='text-xs '><span className='font-bold'>ÅR:</span> 2015</p>
      <p className='text-xs'><span className='font-bold'>GRENE:</span> Drama, Krig, Historia</p>
      <p className='text-xs'><span className='font-bold'>SIDOR:</span> 362</p>
      <p className='text-xs'><span className='font-bold'>HANDLING:</span> Lorem ipsum dolor sit amet...</p>
      <Link href='/books/blodsbroder'>
        <button className='text-lg mt-5 bg-orange-400 px-4 py-2 rounded-md font-bold cursor-pointer text-black w-full'>Till boken →</button>
      </Link>
    </section>

  </section>

</div>

  )
}

export default Books


