import React from 'react'

const Page = () => {
  return (
    <div className="relative min-h-[700px] w-full flex flex-col items-center justify-center p-10">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/text.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <section className="relative text-white m-10 bg-black/70 border border-orange-400 w-full rounded-lg p-10 sm:w-[500px] flex flex-col items-start justify-center z-10">
        <h2 className="text-4xl font-bold text-center">OM MIG</h2>
        <br />
        <p>
          Jag heter Dejan och skriver för att förstå världen – och kanske hjälpa andra att göra detsamma.
          <br />
          <br />
          Orden har alltid varit mitt sätt att utforska tankar, känslor och berättelser...
          <br />
          <br />
          Välkommen hit – jag hoppas du hittar något som stannar kvar en stund.
        </p>
      </section>
    </div>
  )
}

export default Page