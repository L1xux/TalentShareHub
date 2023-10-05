import React from "react";

const TodayText = () => {
  return (
    <div className="px-[14px] py-[19px] flex justify-center items-center bg-main w-full h-max rounded-lg">
      <p className="text-white text-sm font-semibold">
        {"오늘의 급훈."}
        <span className="ml-1 font-normal italic">
          {"You become what you think about."}
        </span>
      </p>
    </div>
  );
};

export default TodayText;
