import { RootState } from "@/app/_redux/stores/store";
import React from "react";
import { useSelector } from "react-redux";

const FloatingHomeList = () => {
  const homeDesignStore = useSelector((state: RootState) => state.homeDesign);

  const categories = [
    "강의 만들기",
    null,
    "수강 관리",
    null,
    "강의 관리",
    null,
    "프로필",
  ];

  return homeDesignStore.isScreenBlack ? (
    <div className="px-6 py-4 flex flex-col items-center gap-3 border rounded-md bg-white">
      {categories.map((item, idx) => {
        return item == null ? (
          <div
            key={idx}
            className="w-[calc(100%-1rem)] border-[1px] border-gray-100"
          />
        ) : (
          <div key={idx} className="font-poorstory text-base cursor-auto">
            {categories[idx]}
          </div>
        );
      })}
    </div>
  ) : null;
};

export default FloatingHomeList;
