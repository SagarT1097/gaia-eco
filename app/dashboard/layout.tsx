import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import SidebarRight from "../components/SidebarRight";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <div className="flex">
      <Sidebar />
      {/* <SidebarRight /> */}
      <div {...props} className="flex-1">
        {children}
      </div>
    </div>
  );
};

export default Layout;
