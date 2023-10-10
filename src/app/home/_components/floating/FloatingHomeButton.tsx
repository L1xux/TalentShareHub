"use client";

import * as HomeDesignActions from "@/app/_redux/reducers/home/homeDesign";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

const FloatingHomeButton = () => {
  const [isRotated, setIsRotated] = useState(false);
  const dispatch = useDispatch();

  const onClickBtn = () => {
    setIsRotated(!isRotated);
    dispatch(HomeDesignActions.setIsScreenBlack({ isScreenBlack: !isRotated }));
  };

  return (
    <div className="relative flex justify-center items-center w-12 h-12 bg-main rounded-full cursor-auto ">
      <div
        className={`relative flex justify-center items-center w-max h-max transform transition-transform duration-300 ${
          isRotated ? "rotate-45" : "rotate-0"
        }`}
        onClick={onClickBtn}
      >
        <div className="absolute w-7 border-2 border-white"></div>
        <div className="absolute w-7 -rotate-90 border-2 border-white"></div>
      </div>
    </div>
  );
};

export default FloatingHomeButton;
