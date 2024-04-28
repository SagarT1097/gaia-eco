"use client";

import { ChevronDown, Ellipsis, Plus } from "lucide-react";
import React from "react";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      {/* Menu div */}
      <div className="flex flex-row p-16">
        <div className="text-xl"> Your Projects </div>
        <span className="text-2xl px-2">|</span>
        <div className="flex flex-row space-x-2 px-2">
          <div className="text-md text-gray-400"> Sort by </div>
          <button
            type="button"
            className="flex flex-row focus:outline-none text-black bg-white p-1 px-3"
          >
            Recent
            <ChevronDown />
          </button>
          <span className="text-2xl px-2">|</span>
        </div>
        <button
          type="button"
          className="flex flex-row focus:outline-none text-white bg-blue-500 p-1 px-3"
        >
          <Plus />
          New
        </button>
      </div>

      {/* Project Cards */}
      <div className="flex flex-row px-16">
        <div className="flex flex-col">
          <a href="/dashboard/analytics">
            <div className="border border-gray-500 p-4">
              <Image
                src="/placeholder.png"
                alt=""
                width={200}
                height={200}
                className="border border-black  "
              />
              <div className="flex flex-row">
                <div className="text-md">Quarterly-migration</div>
                <Ellipsis />
              </div>
              <div className="text-gray-400 text-xs">Opened 3 days ago</div>
            </div>
          </a>
        </div>
        <div className="flex flex-col px-8">
          <a href="/dashboard/analytics2">
            <div className="border border-gray-500 p-4">
              <Image
                src="/placeholder.png"
                alt=""
                width={200}
                height={200}
                className="border border-black"
              />
              <div className="flex flex-row ">
                <div className="text-md">proj.gproj</div>
                <Ellipsis />
              </div>
              <div className="text-gray-400 text-xs">Opened 10 days ago</div>
            </div>
          </a>
        </div>

        <div className="flex flex-col ">
          <div className="border border-gray-500 p-4">
            <Image
              src="/placeholder.png"
              alt=""
              width={200}
              height={200}
              className="border border-black"
            />
            <div className="flex flex-row ">
              <div className="text-md">My Folder</div>
              <Ellipsis />
            </div>
            <div className="text-gray-400 text-xs">Opened 2 days ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
