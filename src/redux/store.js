import { configureStore } from "@reduxjs/toolkit";
import fetchPeopleSlice from "./fetchPeopleSlice";

const store = configureStore({
  reducer: {
    people: fetchPeopleSlice,
  },
});

export default store;
