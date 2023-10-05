import React from "react";
import { Divider } from "@mui/material";
import TodayText from "./_components/today_text/TodayText";
import CategoryList from "./_components/category/list/CategoryList";
import CourseCardList from "./_components/course/list/CourseCardList";

const Home = () => {
  return (
    <div className="m-4 flex flex-col items-center w-[calc(100vw-2rem)] h-[calc(100vh-1rem)] overflow-auto">
      <TodayText />
      <CategoryList />
      <Divider className="mt-8 w-[calc(100%-2rem)]" />
      <CourseCardList />
    </div>
  );
};

export default Home;
