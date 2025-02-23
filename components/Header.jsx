"use client"
import Link from "next/link";
import { useState } from "react";

export default function () {
  const [mobileMenuVisible, setMobileMenuVisibility] = useState(false);

  return (
    <header>
      {/* nav */}
      <nav className="container px-4 mx-auto">
        <div className="flex items-center justify-between pt-5 pb-2.5 -m-2">
          <div className="w-auto p-2">
            {/* logo */}
            <div className="flex flex-wrap items-center">
              <div className="w-auto">
                <a className="relative z-10 inline-block" href="/">
                  <img src="https://placehold.co/60x60" alt="" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-auto p-2">
            <div className="flex flex-wrap items-center gap-5">
              <div className="w-auto hidden lg:block">
                {/* Here you can put new links */}
              </div>

              <div className="w-auto hidden lg:block">
                <div className="inline-block">
                  <Link className="inline-block px-8 py-4 text-gray-200 hover:text-white tracking-tighter hover:bg-gray-400 border-2 border-white focus:border-gray-400 focus:border-opacity-40 hover:border-gray-400 focus:ring-4 focus:ring-gray-400 focus:ring-opacity-40 rounded-full transition duration-300" href="/register">
                    Register
                  </Link>
                </div>
              </div>

              <div className="w-auto hidden lg:block">
                <div className="inline-block">
                  <Link className="inline-block px-8 py-4 text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300" href="/login">Login</Link></div>
              </div>

              <div className="w-auto lg:hidden">
                <button className="relative z-10 inline-block" onClick={() => setMobileMenuVisibility(!mobileMenuVisible)}>
                  <svg className="text-green-500" width="51" height="51" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="56" height="56" rx="28" fill="currentColor"></rect>
                    <path d="M37 32H19M37 24H19" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* phone nav */}
      <div className={` ${mobileMenuVisible ? "fixed" : "hidden"} top-0 left-0 bottom-0 w-4/6 sm:max-w-xs z-50`}>
        <div className="fixed inset-0 bg-black opacity-60" ></div>
        <nav className="relative z-10 px-9 pt-8 h-full bg-black overflow-y-auto">
          <div className="flex flex-wrap justify-between h-full">
            <div className="w-full">
              <div className="flex items-center justify-between -m-2">
                <div className="w-auto p-2"><a className="inline-block" href="#"><img src="https://placehold.co/600x400" alt="" /></a></div>
                <div className="w-auto p-2">
                  <button className="inline-block text-white" onClick={() => setMobileMenuVisibility(!mobileMenuVisible)}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 18L18 6M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className={` hidden flex-col justify-center py-16 w-full`}>
              {/* Here you can put new links */}
            </div>

            {/* Btn */}
            <div className="flex flex-col justify-end w-full pb-8 gap-5">
              <Link className="inline-block px-8 py-4 text-center text-white hover:text-white tracking-tighter hover:bg-gray-400 border-2 border-white focus:border-gray-400 focus:border-opacity-40 hover:border-gray-400 focus:ring-4 focus:ring-gray-400 focus:ring-opacity-40 rounded-full transition duration-300" href="/register">
                Register
              </Link>

              <Link className="inline-block px-8 py-4 text-center text-white hover:text-black tracking-tighter hover:bg-green-400 border-2 border-white focus:border-green-400 focus:border-opacity-40 hover:border-green-400 focus:ring-4 focus:ring-green-400 focus:ring-opacity-40 rounded-full transition duration-300" href="/login">
                Login
              </Link>
            </div>
          </div>
        </nav>
      </div>

    </header>
  );
}