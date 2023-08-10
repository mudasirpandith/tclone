import React from "react";
import { SideBar } from "./Layout/SideBar";
import FollowBar from "./Layout/FollowBar";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <div className="h-screen bg-black">
      <div className="container h-full mx-auto xl:px-30 max-w-6xl">
        <div className="grid grid-cols-4 h-full">
          <SideBar />
          <div
            className="
              col-span-3 
              lg:col-span-2 
              border-x-[1px] 
              border-neutral-800
          "
          >
            {children}
          </div>
          <FollowBar />
        </div>
      </div>
    </div>
  );
};
