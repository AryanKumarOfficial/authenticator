import Link from "next/link";
import React from "react";
import { GiPadlock } from "react-icons/gi";

const Navbar = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-blue-500 to-pink-400  shadow-lg shadow-black text-gray-600 body-font w-screen fixed z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
          <Link
            href={"/"}
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <GiPadlock className="text-3xl" />
            <span className="ml-3 text-xl bg-clip-text bg-gradient-to-r from-gray-200 via-yellow-600 to-black text-transparent">
              Authenticator
            </span>
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link
              href={"/login"}
              className="mr-5 text-gray-900 hover:text-white"
            >
              Login
            </Link>
            <Link
              href={"/register"}
              className="mr-5 text-gray-900 hover:text-white"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
