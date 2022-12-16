import Link from "next/link";

export default function Header() {
 return(
  <header>
   <div className="flex items-center md:w-[80%] md:mx-auto p-4 justify-between">
    <img src="/logo.svg" className="w-12"/>
    <nav className="items-center font-regular md:flex hidden">
     <Link href="/" className="text-2xl text-main transition-all duration-500 mx-5 font-bold">Home</Link>
     <Link href="/" className="text-2xl hover:text-main transition-all duration-500 mx-5">Jobs</Link>
     <Link href="/" className="text-2xl hover:text-main transition-all duration-500 mx-5">Freelancers</Link>
     <Link href="/" className="text-2xl hover:text-main transition-all duration-500 mx-5">Login</Link>
     <Link href="/" className="bg-main rounded-lg px-8 py-2  text-white text-lg font-semibold transition-all duration-500 mx-5">JOIN NOW</Link>
    </nav>
   </div>
  </header>
 )
}