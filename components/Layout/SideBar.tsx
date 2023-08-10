import { BsHouseFill, BsBellFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { SideBarLogo } from "./SideBarLogo";
import { SideBarItem } from "./SidebarItem";
import { BiLogOut } from "react-icons/bi";
import { SideBarTweetButton } from "./SideBarTweetButton";
import useCurrentUser from "@/Hooks/useCurrentUser";
import React from "react";
import { signOut } from "next-auth/react";
export const SideBar = () => {
  const { data: currentUser } = useCurrentUser();
  const items = [
    { label: "Home", href: "/", icon: BsHouseFill },
    {
      label: "Notification",
      href: "/notification",
      icon: BsBellFill,
      auth: true,
    },
    {
      label: "Profile",
      href: `/users/${currentUser?.id}`,
      icon: FaUser,
      auth: true,
    },
  ];
  return (
    <div className="col-span-1 h-full pr-4 md:pr-6">
      <div className="flex flex-col items-end">
        <div className="space-y-2 lg:w-[230px">
          <SideBarLogo />
          {items?.map((item) => {
            return (
              <React.Fragment key={item?.href}>
                <SideBarItem
                  href={item.href}
                  label={item.label}
                  icon={item.icon}
                  auth={item.auth}
                />{" "}
              </React.Fragment>
            );
          })}
          {currentUser && (
            <SideBarItem
              onClick={() => signOut()}
              icon={BiLogOut}
              label="Logout"
            />
          )}
          <SideBarTweetButton />
        </div>
      </div>
    </div>
  );
};
