import {
  BookText,
  Compass,
  Crown,
  Facebook,
  Github,
  Instagram,
  LineChart,
  Linkedin,
  Menu,
  ReceiptText,
  Rss,
  User,
} from "lucide-react";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 w-64 h-screen text-white flex flex-col">
      {/* Branding div */}
      <div className="p-4 flex flex-row">
        <Image src="/logo.svg" height={32} width={32} alt="" />
        <div className="text-xl font-semibold px-2">gaia.eco</div>
      </div>

      {/* NewsFeed and Analytics div */}
      <div className="flex flex-col">
        <div className="flex flex-row p-4 hover:bg-gray-700">
          <Rss />
          <a href="#" className="px-2">
            Newsfeed
          </a>
        </div>
        <div className="flex flex-row p-4  hover:bg-gray-700">
          <LineChart />
          <a href="/dashboard/analytics" className="px-2 hover:bg-gray-700">
            Analytics
          </a>
        </div>
      </div>

      {/* Learn div */}
      <div className="flex flex-col">
        <hr className="border-gray-700" />
        <div className="text-sm p-4 text-gray-400">Learn</div>
        <div className="flex flex-row p-4  hover:bg-gray-700">
          <Compass />
          <a href="#" className="px-2 hover:bg-gray-700">
            Guide
          </a>
        </div>
        <div className="flex flex-row p-4  hover:bg-gray-700">
          <BookText />
          <a href="#" className="px-2 hover:bg-gray-700">
            Knowledge Base
          </a>
        </div>
      </div>

      {/* Footer div */}
      <div className="sticky top-[100vh]">
        <div className="flex flex-row p-4">
          <button
            type="button"
            className="flex flex-row focus:outline-none text-white bg-yellow-600 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-10 py-3 dark:focus:ring-yellow-900"
          >
            Upgrade to Pro
            <Crown className="pl-1 pb-1" />
          </button>
        </div>
        <div className="flex flex-col ">
          <hr className="border-gray-700" />
          <hr className="border-gray-700" />
          <div className="text-sm p-4 text-gray-400">Account</div>
          <div className="flex flex-row p-4  hover:bg-gray-700">
            <User />
            <a href="#" className="px-2 hover:bg-gray-700">
              Account
            </a>
          </div>
          <div className="flex flex-row p-4  hover:bg-gray-700">
            <ReceiptText />
            <a href="#" className="px-2 hover:bg-gray-700">
              Terms
            </a>
          </div>
        </div>
        <hr className="border-gray-700" />
        <div className="px-0 py-3">
          <div className="flex flex-row py-1 px-6 space-x-2">
            <Linkedin />
            <Github />
            <Instagram />
            <Facebook />
          </div>
          <div className="text-xs px-4 py-1 text-gray-400">
            <span className="px-1">&#174;</span>2024 Illuminum AB.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
