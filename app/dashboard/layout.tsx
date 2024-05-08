//Layout component for the dashboard

import React, { ReactNode } from "react";
import Sidebar from "../components/Sidebar";
import SidebarRight from "../components/SidebarRight";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children, ...props }: Props) => {
  return (
    <div className="flex flex-row">
      <Sidebar />
      <div {...props} className="flex-1">
        {children}
      </div>
      <SidebarRight />
    </div>
  );
};

export default Layout;
