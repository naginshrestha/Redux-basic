import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nameList: [],
};
const nameSlice = createSlice({
  name: "userList",
  initialState,
  reducers: {
    setNameList: (state, { payload }) => {
      state.nameList = [...state.nameList, payload];
    },
  },
});

const { reducer, actions } = nameSlice;

export const { setNameList } = actions;

export default reducer;
