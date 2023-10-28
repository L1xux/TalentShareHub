"use client";

import React from "react";
import TodayText from "./_components/today_text/TodayText";
import CategoryList from "./_components/category/list/CategoryList";
import CourseCardList from "./_components/course/list/CourseCardList";
import HomeToolbar from "./_components/toolbar/HomeToolbar";
import { useSelector } from "react-redux";
import { RootState } from "../_redux/stores/store";
import FloatingHomeSection from "./_components/floating/FloatingHomeSection";

const HomePage = () => {
  const homeDesignStore = useSelector((state: RootState) => state.homeDesign);

  return (
    <div className="flex flex-col items-center w-[calc(100vw-2rem)] h-[calc(100vh-1rem)]">
      <HomeToolbar />
      <div className="m-4 relative flex flex-col items-center w-full h-full overflow-auto">
        <TodayText />
        <CategoryList />
        <div className="mt-8 w-[calc(100%-2rem)] border-[1px] border-gray-200" />
        <CourseCardList />
        <FloatingHomeSection />
      </div>
      {homeDesignStore.isScreenBlack ? (
        <div className="fixed w-screen h-screen bg-black bg-opacity-30"></div>
      ) : null}
    </div>
  );
};

export default HomePage;
