import { CategoryState } from "@/app/_assets/category/category";
import imageLoader from "@/app/_lib/loader/imageLoader";
import Image from "next/image";
import React, { useCallback } from "react";

type PropsType = {
  isClicked: boolean;
  setSelectedId: React.Dispatch<React.SetStateAction<number>>;
};

const CategoryCard = ({
  id,
  icon,
  name,
  isClicked,
  setSelectedId,
}: CategoryState & PropsType) => {
  const onClickCard = () => {
    setSelectedId(id);
  };

  return (
    <div
      className={`px-6 py-2 flex flex-col justify-center items-center ${
        isClicked ? "bg-main" : "bg-white"
      } rounded-[10px] cursor-auto shadow`}
      onClick={onClickCard}
    >
      <Image
        loader={imageLoader}
        src={icon}
        alt={"category icon"}
        width={38}
        height={38}
      />
      <p
        className={`mt-2 text-s font-normal ${
          isClicked ? "text-white" : "text-black"
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default CategoryCard;
