import { configureStore } from "@reduxjs/toolkit";
import nameReducer from "./nameSlice";

const store = configureStore({
  reducer: {
    nameListR: nameReducer,
  },
});

export default store;
