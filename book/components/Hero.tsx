import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Hero = () => {
  return (
    <div className='relative'>
    <div className="absolute inset-0 bg-black opacity-70"></div>
    <Image
      src="/text.jpg"
      alt="Picture of the author"
      width={1000}
      height={500}
        className='object-cover h-[550px] w-full' 
    />

    <div className="absolute inset-0 flex flex-col items-center justify-end py-10">

    <h1 className="text-6xl font-bold text-white">Välkommen!</h1>    
    <p className="text-2xl text-white pb-10">Här hittar du mina två böcker.</p>

<div className='flex gap-3 pb-10'>
<Link href="/books">
      <section className='text-white'>
        <h2 className='text-1xl text-center'>Blodsbröder</h2>
        <Image
          src="/gun.jpg"
          alt="Picture of the author"
          width={220}
          height={200}
          objectFit='cover'
          className='rounded-lg border-4 border-orange-400 w-44 h-48 object-cover'
        />
      </section>
    </Link>

    <Link href="/books">
      <section>
        <h2 className='text-1xl text-center'>Vladimir Denkov</h2>
        <Image
          src="/ww2.jpg"
          alt="Picture of the author"
          width={220}
          height={200}
          className='rounded-lg border-4 border-orange-400 w-44 h-48 object-cover'
        />
      </section>
    </Link>
  </div>
    



      <p className="text-lg text-white">Läs båda böckerna - gratis!</p>
     <Link href="/books">      
        <button className='bg-white text-black px-4 py-2 rounded-md mt-4 
        uppercase font-bold border-2 border-orange-400 hover:border-white hover:text-white  hover:bg-orange-400 cursor-pointer'>Böcker → </button>
     </Link>

      </div>

    </div>
  )
}

export default Hero