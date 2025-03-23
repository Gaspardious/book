import Link from "next/link"


const Header = () => {
  return (
    <>
   <header>

    <div className="flex flex-col items-center p-0 m-0" >
      <Link href="/">
    <h1 className="p-1 text-[70px] mt-[-20px] font-bold font-oswald bg-gradient-to-r from-orange-600 via-orange-300 to-orange-100 
             bg-clip-text text-transparent">GASPAR</h1>
        <h2 className=" p-1 text-[20px] mt-[-40px] font-bold font-oswald bg-gradient-to-r from-orange-600 via-orange-300 to-orange-100 
             bg-clip-text text-transparent text-center uppercase">Books</h2>
      </Link>
    </div>

        <nav className="flex justify-center p-3 border-b-2 border-t-2 uppercase space-x-4">
        <Link href="/">Home</Link>
        <Link href="/books">Books</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        </nav>

   </header>
   </>
  )
}

export default Header