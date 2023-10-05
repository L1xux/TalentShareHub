"use client";

import imageLoader from "@/app/_lib/loader/imageLoader";
import { CourseState } from "@/app/_redux/reducers/course";
import Image from "next/image";
import React, { useEffect } from "react";

/**
           *   id: number;
  img: string;
  title: string;
  teacher: string;
  startDate: Date | null;
  endDate: Date | null;
  maxCapacity: number;
  currentCapacity: number;
           */

const CourseCard = ({
  id,
  img,
  title,
  teacher,
  startDate,
  endDate,
  rating,
  maxCapacity,
  currentCapacity,
}: CourseState) => {
  useEffect(() => {
    console.log("startDate is", startDate);
  }, []);

  return (
    <div className="p-2 flex w-full h-max min-h-36 rounded-lg shadow-main">
      <div className="flex w-full justify-between">
        <div className="flex flex-col w-[70%]">
          <p className="text-2xl font-bold line-clamp-1">{title}</p>
          <p className="text-base text-gray-400 break-keep">{`시작 ${
            startDate?.toISOString().split("T")[0]
          }`}</p>
          <p className="text-base text-gray-400 break-keep">
            {`종료 ${endDate?.toISOString().split("T")[0]}`}
          </p>

          <div className="flex gap-1">
            <Image
              loader={imageLoader}
              src={`${process.env.NEXT_PUBLIC_TEST_URL}/image/icon/star.png`}
              alt={"rating"}
              width={18}
              height={18}
            />
            <p className="text-sm">{rating}</p>
          </div>
          <div className="mt-2 flex gap-1">
            <Image
              loader={imageLoader}
              src={`${process.env.NEXT_PUBLIC_TEST_URL}/image/icon/human.png`}
              alt={"rating"}
              width={18}
              height={18}
            />
            <p className="text-sm">{"4.9"}</p>
          </div>
          <p className="mt-3 font-poorstory text-sm font-normal">
            {`${teacher} 선생님`}
          </p>
        </div>
        <div className="flex justify-center items-center min-w-max w-max h-full">
          <Image
            loader={imageLoader}
            src={img}
            alt={"course img"}
            width={140}
            height={140}
            objectFit={"contain"}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
