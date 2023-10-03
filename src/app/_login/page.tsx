"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import imageLoader from "../_lib/loader/imageLoader";

const LoginScreen = () => {
  return (
    <div className="font-poorstory flex flex-col w-screen min-h-screen justify-center items-center overflow-y-auto">
      <p className="text-[24px] h-[30px]">{"무료 재능기부 허브"}</p>
      <p className="text-[24px] h-[30px]">{"나눔의 기쁨"}</p>
      <Image
        loader={imageLoader}
        src={`${process.env.NEXT_PUBLIC_TEST_URL}/image/logo.png`}
        className="pt-[3rem] object-contain"
        width={"200"}
        height={"200"}
        alt="logo"
      />
      <div className="mt-[5rem] login_box">
        <Image
          loader={imageLoader}
          src={`${process.env.NEXT_PUBLIC_TEST_URL}/image/google_logo.png`}
          className="object-contain mr-[15px]"
          width={"40"}
          height={"40"}
          alt="logo"
        />
        <p className="text-center text-white text-xl">
          {"구글 계정으로 로그인하기"}
        </p>
      </div>
      <div className="mt-[1.5rem] login_box">
        <Image
          loader={imageLoader}
          src={`${process.env.NEXT_PUBLIC_TEST_URL}/image/kakao_logo.png`}
          className="object-contain mr-[15px]"
          width={"40"}
          height={"40"}
          alt="logo"
        />
        <p className="text-center text-white text-xl">
          {"카카오 계정으로 로그인하기"}
        </p>
      </div>
      <div className="mt-10 font-roboto">
        <Link
          href="/home"
          className="text-[16px] font-bold text-main cursor-pointer"
        >
          {"둘러보기"}
        </Link>
      </div>
    </div>
  );
};

export default LoginScreen;
