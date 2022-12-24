import React, { useState } from 'react'
import Link from 'next/link'
import Login from '../Login'
import JoinUs from '../JoinUs'
import SignUp from '../SignUp'
export default function Header() {
  const [open, setOpen] = useState<boolean>(false)
  const Close = () => setOpen(false)

  const [show, setShow] = useState<boolean>(false)
  const closeJoinUs = () => setShow(false)

  return (
    <header>
      <div className="flex items-center md:w-[80%] md:mx-auto p-4 justify-between">
        <img src="/logo.svg" className="w-12" />
        <nav className="items-center font-regular md:flex hidden">
          <Link
            href="/"
            className="text-2xl text-main transition-all duration-500 mx-5 font-bold"
          >
            Home
          </Link>
          <Link
            href="/"
            className="text-2xl hover:text-main transition-all duration-500 mx-5"
          >
            Jobs
          </Link>
          <Link
            href="/"
            className="text-2xl hover:text-main transition-all duration-500 mx-5"
          >
            Freelancers
          </Link>
          <button
            className="text-2xl hover:text-main transition-all duration-500 mx-5"
            onClick={() => setOpen(true)}
          >
            Login
          </button>
          <button
            className="bg-main rounded-lg px-8 py-2  text-white text-lg font-semibold transition-all duration-500 mx-5"
            onClick={() => setShow(true)}
          >
            JOIN NOW
          </button>
        </nav>
        <Login open={open} Close={Close}></Login>
        <JoinUs open={show} closeJoinUs={closeJoinUs}></JoinUs>
        {/* <SignUp show={show} closeSignUp={closeSignUp}></SignUp> */}
      </div>
    </header>
  )
}
