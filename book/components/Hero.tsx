import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='relative'>
    <div className="absolute inset-0 bg-black opacity-70"></div>
    <Image
      src="/pen.jpg"
      alt="Picture of the author"
      width={1000}
      height={500}
        className='object-cover h-[550px] w-full' 
    />

    <div className="absolute inset-0 flex flex-col items-center justify-end pb-14">
      <h1 className="text-6xl font-bold text-white">Välkommen!</h1>    
      <p className="text-lg text-white">Här hittar du mina två icke-utgivna böcker.</p>
      <p className="text-lg text-white">Klicka på knappen nedan för att se boklistan.</p>
     
     <Link href="/books">      
        <button className='bg-orange-400 text-black px-4 py-2 rounded-md mt-4'>Böcker → </button>
     </Link>

      </div>

    </div>
  )
}

export default Hero