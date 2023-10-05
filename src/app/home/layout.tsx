import React from "react";
import HomeToolbar from "./_components/toolbar/HomeToolbar";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-inter flex flex-col w-screen h-screen">
      <HomeToolbar />
      {children}
    </div>
  );
};

export default HomeLayout;
