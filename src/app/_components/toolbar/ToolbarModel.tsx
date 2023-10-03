import React from "react";

interface Props {
  title: string;
  titleColor?: string;
  alignment?: "justify-start" | "justify-center" | "justify-enter";
}

const ToolbarModel = (props: Props) => {
  const {
    title = "일반",
    titleColor = "black",
    alignment = "justify-center",
  } = props;

  return (
    <div
      className={`
    flex 
    ${alignment}
    w-full 
    h-max
  `}
    >
      <p className={`text-xl text-${titleColor}`}>{title}</p>
    </div>
  );
};

export default ToolbarModel;
