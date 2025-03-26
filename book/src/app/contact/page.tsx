
import React from 'react'

const contact = () => {
  return (
    <div className="relative h-content w-full flex flex-col items-center justify-center p-10">
  <div className='absolute inset-0 bg-[url("/text.jpg")] bg-cover bg-center opacity-20 z-[-1]'></div>

  <section className="relative text-gray-600 m-10 bg-black/50 border border-orange-400 w-full rounded-lg p-10 sm:w-[500px] flex flex-col items-start justify-center z-10">

    <h2 className='text-4xl text-white font-bold text-center'>KONTAKT</h2>
 
    <form className="flex flex-col gap-4 w-full">
      <label htmlFor="name" className="text-xs text-white">Namn:</label>
      <input type="text" id="name" className="border-2 border-gray-100 rounded-md p-1"/>
      <label htmlFor="email" className="text-xs text-white">E-post:</label>    
      <input type="email" id="email" className="border-2 border-gray-100 rounded-md p-1"/>
      <label htmlFor="message" className="text-xs text-white">Meddelande:</label>
      <textarea id="message" className="border-2 border-gray-100 rounded-md p-1"></textarea>
      <button type="submit" className="bg-orange-400 text-black p-2 rounded-md">Skicka</button>
    </form>

  </section>


</div>
  )
}

export default contact