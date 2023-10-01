import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getPeopleAll } from "../services/fetchPeople";

export const fetchAllPeople = createAsyncThunk(
  "user/fetchAddress",
  async function () {
    const allPeople = await getPeopleAll();

    const refinedArray = allPeople.map(({ id, name, username, avatar }) => {
      id, name, username, avatar;
    });

    return refinedArray;
  }
);

const initialState = {
  allPeople: null,
  status: "idle", // idle | pending | error
};

const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {},
  extraReducers: (builder) =>
    builder
      .addCase(fetchAllPeople.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllPeople.fulfilled, (state, action) => {
        state.allPeople = action.payload;
        state.status = "idle";
      })
      .addCase(fetchAllPeople.rejected, (state) => {
        state.status = "error";
      }),
});

export default peopleSlice.reducer;