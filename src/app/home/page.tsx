import React, { Suspense } from "react";
import HomeToolbar from "./_components/toolbar/HomeToolbar";
import HomeCourseCard from "./_components/card/HomeCourseCard";
import { CourseState } from "../_redux/reducers/course";
import { Divider } from "@mui/material";

const Home = () => {
  const dummyDataForCourses: Array<CourseState> = [
    {
      id: 1,
      img: "/image/default_teacher.png",
      title: "수학",
      summary: "누구나 배우는 수학",
      teacher: "AAA",
      startDate: new Date("2023/03/95"),
      endDate: new Date("2023/05/09"),
      maxCapacity: 3,
    },
    {
      id: 2,
      img: "/image/default_teacher.png",
      title: "프로그래밍",
      summary: "누구나 배우는 개발",
      teacher: "BBB",
      startDate: new Date("2023/04/95"),
      endDate: new Date("2023/05/09"),
      maxCapacity: 1,
    },
    {
      id: 3,
      img: "/image/default_teacher.png",
      title: "영어",
      summary: "누구나 배우는 영어",
      teacher: "CCC",
      startDate: new Date("2023/02/95"),
      endDate: new Date("2023/03/09"),
      maxCapacity: 4,
    },
    {
      id: 4,
      img: "/image/default_teacher.png",
      title: "과학",
      summary: "누구나 배우는 과학",
      teacher: "DDD",
      startDate: new Date("2023/04/95"),
      endDate: new Date("2023/10/09"),
      maxCapacity: 2,
    },
  ];

  return (
    <div className="flex flex-col w-screen h-screen">
      <HomeToolbar />
      <Divider light />
      <div className="mx-3 my-1 flex flex-col gap-y-2 ">
        {dummyDataForCourses.map((item, idx) => {
          return (
            <Suspense key={item.id} fallback={<div>Loading...</div>}>
              <HomeCourseCard {...item} />
            </Suspense>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
