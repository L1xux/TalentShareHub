"use client";

import { CourseState } from "@/app/_redux/reducers/home/course";
import React, { Suspense, useEffect } from "react";
import CourseCard from "../card/CourseCard";

const CourseCardList = () => {
  const dummyDataForCourses: Array<CourseState> = [
    {
      id: 1,
      img: `${process.env.NEXT_PUBLIC_TEST_URL}/image/sample_course_image_1.png`,
      title: "선형대수학",
      teacher: "멋진 김강산",
      startDate: new Date("2023/03/15"),
      endDate: new Date("2023/05/09"),
      rating: 3.5,
      maxCapacity: 5,
      currentCapacity: 1,
    },
    {
      id: 2,
      img: `${process.env.NEXT_PUBLIC_TEST_URL}/image/sample_course_image_2.png`,
      title: "프로그래밍",
      teacher: "세젤귀 이현석",
      startDate: new Date("2023/04/25"),
      endDate: new Date("2023/05/09"),
      rating: 4.5,
      maxCapacity: 1,
      currentCapacity: 2,
    },
    {
      id: 3,
      img: `${process.env.NEXT_PUBLIC_TEST_URL}/image/sample_course_image_3.png`,
      title: "영어",
      teacher: "다정한 신은지",
      startDate: new Date("2023/02/11"),
      endDate: new Date("2023/03/09"),
      rating: 4.9,
      maxCapacity: 4,
      currentCapacity: 3,
    },
  ];

  return (
    <div className="mt-8 p-2 flex flex-col w-full h-max gap-8">
      {dummyDataForCourses.map((item, idx) => {
        return (
          <Suspense key={item.id} fallback={<div>Loading...</div>}>
            <CourseCard {...item} />
          </Suspense>
        );
      })}
    </div>
  );
};

export default CourseCardList;
