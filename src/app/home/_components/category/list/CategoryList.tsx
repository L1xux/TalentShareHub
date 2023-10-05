"use client";

import category from "@/app/_assets/category/category";
import React, { useState, Suspense } from "react";
import CategoryCard from "../card/CategoryCard";

const CategoryList = () => {
  const [selectedId, setSelectedId] = useState(-1);

  return (
    <div className="mt-4 flex justify-around w-full h-max">
      {category.map((item) => {
        return (
          <Suspense key={item.id} fallback={<div>Loading...</div>}>
            <CategoryCard
              id={item.id}
              name={item.name}
              icon={item.icon}
              isClicked={selectedId == item.id}
              setSelectedId={setSelectedId}
            />
          </Suspense>
        );
      })}
    </div>
  );
};

export default CategoryList;
