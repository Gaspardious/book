
import React from 'react'

const Page = () => {
  return (
    <div className="relative h-content w-full flex flex-col items-center justify-center p-10">
  <div className='absolute inset-0 bg-[url("/text.jpg")] bg-cover bg-center opacity-20 z-[-1]'></div>

  <section className="relative text-gray-600 m-10 bg-white w-full rounded-lg p-10 sm:w-[500px] flex flex-col items-start justify-center z-10">

    <h2 className='text-4xl font-bold text-center'>OM MIG</h2>
    <br />  
    <p>Jag heter Dejan och skriver för att förstå världen – och kanske hjälpa andra att göra detsamma. <br /> <br /> Orden har alltid varit mitt sätt att utforska tankar, känslor och berättelser. Oavsett om det handlar om vardagens små ögonblick eller livets stora frågor, försöker jag hitta det som skaver, glöder eller inspirerar.

När jag inte skriver läser jag gärna, vandrar i naturen eller försvinner in i en bra berättelse – på papper eller i huvudet. Jag tror på språkets kraft att beröra, förändra och förena, och det är precis det jag vill förmedla i mina texter.

<br /> <br />Välkommen hit – jag hoppas du hittar något som stannar kvar en stund.</p>
  </section>


</div>
  )
}

export default Page