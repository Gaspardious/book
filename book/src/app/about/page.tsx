import React from 'react'

const Page = () => {
  return (
    <div className="relative min-h-[750px] w-full flex flex-col items-center justify-center p-10">
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/text.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <section className="relative text-white m-10 bg-black/70 border border-orange-400 w-full rounded-lg p-10 sm:w-[500px] flex flex-col items-start justify-center z-10">
        <h2 className="text-4xl font-bold text-center">OM MIG</h2>
        <br />
        <p className='text-sm'>
          Jag har alltid haft en liten dröm om att skriva och ge ut en bok. Redan i gymnasiet började jag på mitt första manus – en berättelse om en ung kille i Sovjetunionen som skickas till fronten i Stalingrad. Det var en del av ett större projektarbete vi gjorde sista året. Jag skrev klart boken, men den blev mest en övning i skrivande – den höll helt enkelt inte för att skickas till något förlag.
          <br />
          <br />
          Senare tog jag tag i ett nytt projekt, som jag brukar kalla min första “riktiga” bok. Den var helt klart inspirerad av Jens Lapidus Snabba Cash, fast jag ville att den skulle utspela sig i Göteborg istället. Jag skrev den mellan 2014 och 2015 och kände att jag hade utvecklats mycket – både i språk och i känsla för berättande. Men storyn var lite svajig, och trots att jag skickade ut manuset till flera förlag fick jag bara nej. Men det var ändå en viktig erfarenhet – och jag gav inte upp.
          <br />
          <br />
          ...Dejan
        </p>



      </section>
    </div>
  )
}

export default Page