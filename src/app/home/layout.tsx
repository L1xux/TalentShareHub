import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="font-inter flex flex-col items-center w-screen h-screen">
      {children}
    </div>
  );
};

export default HomeLayout;
