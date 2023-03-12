import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setNameList } from "../nameSlice";

export const Form = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleONSubmit = (e) => {
    e.preventDefault();
    dispatch(setNameList(name));
  };
  return (
    <div>
      <form action="" onSubmit={handleONSubmit}>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          placeholder="sam smith"
        />
        <button>Add data</button>
      </form>
    </div>
  );
};
