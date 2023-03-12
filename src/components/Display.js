import React from "react";
import { useSelector } from "react-redux";

export const Display = () => {
  const { nameList } = useSelector((state) => state.nameListR);
  return (
    <div>
      <ul>
        {nameList.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};
