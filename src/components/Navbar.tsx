"use client";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => setShowNav(!showNav);

  return (
    <nav className="sticky top-0 bg-gray-400 py-4 px-3  z-50 opacity-95">
      <div className="mx-auto max-w-6xl w-[98%] flex justify-between items-center">
        <Link
          href="/"
          className="text-slate-950 font-bold tracking-tight leading-8 md:text-[20px] "
        >
          Mosh<span className="text-red-500">Code</span>
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8 cursor-pointer md:hidden"
          onClick={toggleNav}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
          />
        </svg>
        {/* MOBILE NAV */}
        <div
          onClick={toggleNav}
          className={`
          
          ${showNav ? "h-screen" : "h-0"}
           absolute top-0 left-0 w-full bg-gray-400 duration-300 overflow-hidden md:hidden`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 cursor-pointer absolute right-4 top-4"
            onClick={toggleNav}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>

          <ul
            className={`${
              showNav ? "h-full" : "h-0"
            } w-full flex justify-center items-center flex-col gap-10 duration-75 overflow-hidden`}
          >
            <li>
              <Link href="#home" className="nav-links">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="nav-links">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="nav-links">
                Project
              </Link>
            </li>
            <li className="pb-3">
              <Link href="#contact" className="nav-links">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* DESKTOP NAV */}

        <div className="hidden md:block">
          <ul className=" h-full w-full flex justify-center items-center gap-10">
            <li>
              <Link href="#home" className="nav-links">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="nav-links">
                About
              </Link>
            </li>
            <li>
              <Link href="#projects" className="nav-links">
                Project
              </Link>
            </li>
            <li>
              <Link href="#contact" className="nav-links">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
