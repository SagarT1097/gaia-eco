"use client";
import { ChevronDown, Ellipsis, Plus } from "lucide-react";
import React from "react";
import ProjectCards from "../components/ProjectCards";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row p-4">
        <div className="text-xl">Your Projects</div>
        <span className="text-2xl px-2">|</span>
        <div className="flex flex-row space-x-2 px-2">
          <div className="text-md text-gray-400">Sort by</div>
          <div className="relative"></div>
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

      <div className="flex flex-row space-x-4 p-4">
        <Link href={`/dashboard/analytics`}>
          <div>
            <ProjectCards
              image={"placeholder.png"}
              title={"Quarterly Migration"}
              openingDate={"Opened 3 days ago"}
            />
          </div>
        </Link>
        <Link href={`/dashboard/analytics`}>
          <div>
            <ProjectCards
              image={"placeholder.png"}
              title={"gproj.proj"}
              openingDate={"Opened 2 days ago"}
            />
          </div>
        </Link>

        <Link href={`/dashboard/analytics`}>
          <div>
            <ProjectCards
              image={"placeholder.png"}
              title={"My Folder"}
              openingDate={"Opened 1 days ago"}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
