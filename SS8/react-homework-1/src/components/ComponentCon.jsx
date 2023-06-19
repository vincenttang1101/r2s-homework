import React, { memo } from "react";

const ComponentCon = ({ text }) => {
  console.log("render ComponentCon");

  return <p>{text}</p>;
};

export default memo(ComponentCon);
