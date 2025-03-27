
import React from 'react'

const contact = () => {
  return (
    <div className="relative min-h-[700px] w-full flex flex-col items-center justify-center p-10">
 
 <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/text.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

  <section className="relative text-gray-600 m-10 bg-black/70 border border-orange-400 w-full rounded-lg p-10 sm:w-[500px] flex flex-col items-start justify-center z-10">

    <h2 className='text-4xl text-white font-bold text-center'>KONTAKT</h2>
 
    <form
  action="https://formsubmit.co/dejan.gaspar88@gmail.com"
  method="POST"
  className="flex flex-col gap-4 w-full"
>
<input type="hidden" name="_subject" defaultValue="Nytt kontaktmeddelande från portfolio" />
<input type="hidden" name="_captcha" defaultValue="false" />

  <label htmlFor="name" className="text-xs pt-10 text-white">Namn:</label>
  <input type="text" name="name" id="name" required className="border-2 border-gray-100 text-white rounded-md p-2" />

  <label htmlFor="email" className="text-xs text-white">E-post:</label>
  <input type="email" name="email" id="email" required className="border-2 border-gray-100 rounded-md text-white p-2" />

  <label htmlFor="message" className="text-xs text-white">Meddelande:</label>
  <textarea name="message" id="message" required className="border-2 border-gray-100 rounded-md text-white p-2"></textarea>

  <button type="submit" className="bg-orange-400 text-black p-2 rounded-md">Skicka</button>
</form>

  </section>


</div>
  )
}

export default contact