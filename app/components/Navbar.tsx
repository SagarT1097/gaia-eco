import React from "react";

const Navbar = () => {
  return (
    <div className="flex flex-col">
      <div className="w-screen bg-gray-800">
        <div className="flex flex-col p-4">
          <div className="text-xl">Project 1.gproj</div>
          <div className="text-sm flex flex-row px-3 py-1 space-x-3">
            <button>File</button>
            <button>Edit</button>
            <button>Help</button>
            <p className="underline ...">Last updated at 10:00PM</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-screen bg-gray-800">
        <div className="text-sm flex flex-row px-6 py-1 space-x-3">
          <button>+ Job</button>
          <button>+ Media</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
