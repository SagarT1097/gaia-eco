"use client";
import Navbar from "@/app/components/Navbar";
import { Button } from "flowbite-react";
import { Crown, Search } from "lucide-react";
import dynamic from "next/dynamic";
import React, { useState, useMemo } from "react";

const Analytics = () => {
  const [selected, setSelected] = useState("");

  const Map = useMemo(
    () =>
      dynamic(() => import("@/app/components/Map"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );
  return (
    <div>
      <Navbar />

      {/* Project title */}
      <div className="py-4 px-3">
        <div className="border border-gray-400 py-4 px-2">
          <p className="text-3xl py-2">Project 1 Title</p>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos
            aspernatur officia praesentium molestias ex accusamus commodi.
          </p>
        </div>
      </div>

      {/* Analytics */}
      <div className="py-4 px-3">
        <div className="border border-gray-400 py-4 px-2">
          {/* Insights Tab */}
          <div className="border border-gray-400 p-2 flex flex-row">
            <p className="py-1.5">Untitled job</p>
            <Button className="ml-5 bg-blue-500 hover:bg-blue-700 text-white px-2">
              <Search size={16} className="mr-1" />
              Search
            </Button>
            <div className="px-10 py-1.5">
              <input
                className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
              />
            </div>
            <nav className="flex flex-row">
              <a
                href="#"
                onClick={() => setSelected("Map")}
                className="border border-gray-400 px-2 py-1 text-white hover:bg-blue-500 hover:text-white"
              >
                Map
              </a>
              <a
                href="#"
                onClick={() => setSelected("Main species")}
                className="border border-gray-400 px-2 py-1 text-white hover:bg-blue-500 hover:text-white"
              >
                Main species
              </a>
              <a
                href="#"
                onClick={() => setSelected("Related species")}
                className="border border-gray-400 px-2 py-1 text-white hover:bg-blue-500 hover:text-white"
              >
                Related species
              </a>
              <a
                href="#"
                onClick={() => setSelected("Relationships")}
                className="border border-gray-400 px-2 py-1 text-white hover:bg-blue-500 hover:text-white"
              >
                Relationships
              </a>

              <a
                href="#"
                onClick={() => setSelected("Insights")}
                className="flex flex-row border border-gray-400 px-2 py-1 text-white hover:bg-blue-500 hover:text-white"
              >
                <Crown size={16} className="mr-2 mt-1" />
                Insights
              </a>
            </nav>
          </div>
          {/* Selected Tab */}
          <div className="bg-white-700 my-2 w-[98%] h-[500px]">
            {selected === "Map" && <Map posix={[59.858227, 17.632252]} />}
            {selected === "Insights" && <p>Insights</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
