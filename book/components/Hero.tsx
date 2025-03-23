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

    <div className="absolute inset-0 flex flex-col items-start justify-end p-3">
      <h1 className="text-4xl font-bold text-white">Let&apos;s do some reading and writing - together 📚</h1>    
     
     <Link href="/books">      
        <button className='bg-orange-400 text-black px-4 py-2 rounded-md mt-4'>Books → </button>
     </Link>

      </div>

    </div>
  )
}

export default Hero