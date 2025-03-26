import Link from "next/link"
import Image from "next/image"

const Footer = () => {
    return (
      <div className="w-full px-1 py-1 bg-[#1c1c1c] sm:px-12 border-t-1 border-gray-700" >
         
         <section className="flex flex-col items-center justify-center m-8">
            <div className="flex gap-4 justify-center sm:justify-start">
                  <Image src="/facebook.svg" alt="logo" width={40} height={40}  />
                  <Image src="/instagram.svg" alt="logo" width={40} height={40}  />
              </div>
          </section>
          
          <hr className="border-orange-400 border-opacity-50 w-4/5 mx-auto mt-0 mb-10"/>

        <div className=" flex flex-wrap items-start mt-10 justify-center gap-5 sm:gap-40">
         
        <section className=" hidden mt-10 sm:mt-0 sm:block">
            <h2 className=" text-white text-2xl font-bold mb-5">NAVIGATION</h2>
            <nav className="flex gap-2 justify-center sm:justify-start flex-col">
                <Link className="hover:text-orange-400 active:text-[#4c6cd3]" href="/">HEM</Link>
                <Link className="hover:text-orange-400" href="/about">OM MIG</Link>
                <Link className="hover:text-orange-400" href="/books">BÖCKER</Link>
                <Link className="hover:text-orange-400" href="/contact">KONTAKT</Link>
            </nav>
          </section>

          <section>
            <h2 className="text-center text-white text-2xl font-bold mb-5">OM MIG</h2>
            <div className="flex flex-col gap-2 max-w-[300px] sm:max-w-none mx-auto sm:mx-0">
              <p className="text-white text-sm w-full pb-3">En <em>författare</em> som fortfarande inte vågar kalla sig för författare.. men vi jobbar på det! 🧐 </p>
            </div>
          </section>




        </div>

        <hr className="border-orange-400 border-opacity-50 w-4/5 mx-auto mt-10 mb-10"/>

        <div className="flex flex-row items-center justify-center text-center gap-3">
          <section>
            <p className="text-white text-xs">Org.nr 559105-6378 </p>
            <p className="text-white text-xs">© 2025 Gaspar Invest AB </p>
          </section>
        </div>

        <div className=" flex flex-col items-center justify-center pb-3 pt-5  text-white text-center">
          <p className="text-sm mt-2 flex flex-wrap items-center justify-center gap-1">
            Like this website? Get in touch →
          <Link href="https://www.gaspardev.com" className="text-[#ff8b07] hover:underline">
            www.gaspardev.com
          </Link>
          </p>
        </div>
      </div>
    )
  }
  
  export default Footer