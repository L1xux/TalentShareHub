import React from "react";
import FloatingHomeButton from "./FloatingHomeButton";
import FloatingHomeList from "./FloatingHomeList";

const FloatingHomeSection = () => {
  return (
    <div className="fixed right-6 bottom-6 z-10">
      <div className="relative flex flex-col items-end gap-2">
        <FloatingHomeList />
        <FloatingHomeButton />
      </div>
    </div>
  );
};

export default FloatingHomeSection;
