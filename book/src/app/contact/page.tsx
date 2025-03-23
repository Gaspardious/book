
import React from 'react'

const contact = () => {
  return (
    <div className="relative h-content w-full flex flex-col items-center justify-center p-10">
  <div className='absolute inset-0 bg-[url("/text.jpg")] bg-cover bg-center opacity-20 z-[-1]'></div>

  <section className="relative text-gray-600 m-10 bg-white w-full rounded-lg p-10 sm:w-[500px] flex flex-col items-start justify-center z-10">

    <h2 className='text-4xl font-bold text-center'>KONTAKT</h2>
 
    <form className="flex flex-col gap-4 w-full">
      <label htmlFor="name" className="text-xs">Namn:</label>
      <input type="text" id="name" className="border-2 border-gray-400 rounded-md p-1"/>
      <label htmlFor="email" className="text-xs">E-post:</label>    
      <input type="email" id="email" className="border-2 border-gray-400 rounded-md p-1"/>
      <label htmlFor="message" className="text-xs">Meddelande:</label>
      <textarea id="message" className="border-2 border-gray-400 rounded-md p-1"></textarea>
      <button type="submit" className="bg-black text-white p-2 rounded-md">Skicka</button>
    </form>

  </section>


</div>
  )
}

export default contact