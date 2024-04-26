import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-4 mb-5 bg-green-800">
        <div className="flex items-center">
          <Link href="/">
            <div className="text-lg font-bold text-white uppercase">
              Gaia.eco
            </div>
          </Link>
        </div>
        <div className="text-white">
          <Link href="sign-in" className="text-gray-300 hover:text-white mr-4">
            Sign In
          </Link>
          <Link href="sign-up" className="text-gray-300 hover:text-white mr-4">
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Header;
