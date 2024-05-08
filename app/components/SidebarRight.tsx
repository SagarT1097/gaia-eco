//Dummy Collapsible Sidebar to show Marketplace
"use client";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "lucide-react";
import React, { useState } from "react";

const SidebarRight = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className={`bg-gray-800 text-white flex flex-col transition-all duration-500 ease-in-out ${
        isOpen ? "w-64" : "w-16"
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold"
      >
        {isOpen ? <ArrowRightCircleIcon /> : <ArrowLeftCircleIcon />}
      </button>
      {isOpen && <div className="ml-4 mt-4">Marketplace</div>}
    </div>
  );
};

export default SidebarRight;
