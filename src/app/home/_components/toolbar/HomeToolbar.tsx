"use client";

import React from "react";
import Image from "next/image";
import imageLoader from "@/app/_lib/loader/imageLoader";
import { SvgIcon } from "@mui/material";
import { Search } from "@mui/icons-material";

const HomeToolbar = () => {
  return (
    <div className="p-4 flex justify-between items-center w-full h-max">
      <Image
        loader={imageLoader}
        quality={90}
        src={`${process.env.NEXT_PUBLIC_TEST_URL}/image/logo.png`}
        className="object-contain"
        alt="logo"
        width="50"
        height="50"
      />
      <div className="flex flex-col items-center">
        <p className="h-[20px] text-sm text-gray-500">{"어서오세요!"}</p>
        <p className="h-[20px] text-base font-bold">{"의진님"}</p>
      </div>
      <div>
        <SvgIcon className="w-7 h-7" component={Search} />
      </div>
    </div>
  );
};

export default HomeToolbar;
