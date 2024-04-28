import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      <div {...props} className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;
