"use client";

import { CourseState } from "@/app/_redux/reducers/course";
import Image from "next/image";
import React, { useEffect } from "react";

const HomeCourseCard = (props: CourseState) => {
  const { id, title, summary, teacher, startDate, endDate, maxCapacity } =
    props;

  useEffect(() => {
    console.log("id is", id);
  }, []);

  return (
    <div className="px-1 pb-1 flex h-16 w-full border shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] rounded-md">
      <div className="flex flex-nowrap items-center h-full w-full">
        <div className="p-1 flex flex-shrink-0 h-8 w-8 justify-center items-center border rounded-md overflow-hidden">
          <Image
            src={"/image/default_teacher.png"}
            alt="teacher_face"
            width="0"
            height="0"
            sizes="100vw"
            className="h-auto w-full"
          />
        </div>
        <div className="ml-2 flex flex-col flex-wrap h-auto w-full gap-[2px] ">
          <p className="text-h">{title}</p>
          <p className="text-h">{summary}</p>
          <p className="text-h">{teacher}</p>
          <p className="text-h">{maxCapacity}</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCourseCard;
