
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='relative h-fit w-full'>
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <Image
      src="/pen.jpg"
      alt="Picture of the author"
      width={1920}
      height={1080}
    />

    <div className="absolute inset-0  flex flex-col items-center justify-center text-center p-3">
      <h1 className="text-4xl  font-bold text-white">Let&apos;s do some reading and writing - together 📚</h1>    
      
      </div>

    </div>
  )
}

export default Hero