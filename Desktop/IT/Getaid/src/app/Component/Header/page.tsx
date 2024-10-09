"use client";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      <section className="fixed flex top-0 border-b z-10 w-full max-w-7xl items-center justify-between pt-2 mb-16 flex border-gray-300 bg-gradient-to-b from-bg-cyan-600 backdrop-blur-2xl sm:flex sm:flex-row ">
          <div className="flex items-center ">
            <Link href="#">
              <Image
                src="/ourLogo.svg"
                className="w-20 h-15"
                width={150}
                height={150}
                alt="Company_logo"
              />
            </Link>
            <span className="getaid text-3xl hidden sm:block ">GetAid</span>
          </div>
          <div className="flex items-center">
            <div
              className="flex flex-col cursor-pointer lg:hidden mr-4 sm:block"
              onClick={toggleMenu}
            >
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white mb-1"></span>
              <span className="block w-6 h-0.5 bg-white"></span>
            </div>
            <div>
              <nav
               className={`lg:flex lg:relative lg:flex-row flex-col absolute lg:static
                ${isMenuOpen ? "block" : "hidden"}
                bg-gray-800 lg:bg-transparent
                top-16 left-0 w-full lg:w-auto lg:top-auto lg:left-auto`}
              >
                <ul className="flex lg:flex-row flex-col lg:items-center text-center sm:items-center">
                  <li className="my-2 lg:my-0 lg:mx-4">
                    <Link href="/heropage" className="text-white hover:text-gray-700 hover:font-bold">
                      Home
                    </Link>
                  </li>
                  <li className="my-2 lg:my-0 lg:mx-4">
                    <Link
                      href="/Contact"
                      className="text-white hover:text-gray-700 hover:font-bold"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className="my-2 lg:my-0 lg:mx-4">
                  <Link href="/Login" className="text-white hover:text-gray-700 hover:font-bold">Login</Link>
                  </li>
                  <li className="my-2 lg:my-0 lg:mx-4">
                  <Link href="/Register" className="text-white hover:text-gray-700 hover:font-bold">Sign Up</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
      </section>
    </>
  );
};

export default Header;