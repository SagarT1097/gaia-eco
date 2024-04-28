import Link from "next/link";
import { auth } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

const Header = async () => {
  const { userId } = auth(); //Clerk auth - Check if user is logged in or not

  return (
    <nav className="flex items-center justify-between px-6 py-4 mb-5 bg-green-900">
      <div className="flex items-center">
        <div className="relative w-12 h-12 mr-4">
          <Link href="/">
            <Image fill alt="" src="/logo.svg" />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="flex items-center px-5 ">
            <Link href="/dashboard">
              <div className="text-md text-white">Dashboard</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center text-white">
        {!userId && (
          <>
            <Link
              href="sign-in"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign In
            </Link>
            <Link
              href="sign-up"
              className="text-gray-300 hover:text-white mr-4"
            >
              Sign Up
            </Link>
          </>
        )}
        <div className="ml-auto">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
