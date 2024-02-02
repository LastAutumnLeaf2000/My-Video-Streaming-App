import { createSlice } from "@reduxjs/toolkit";

const searchText = createSlice({
  name: "text",
  initialState: {
    text: "",
  },
  reducers: {
    addText: (state, action) => {
      state.text = action.payload;
    },
    deleteText: (state) => {
      state.text = "";
    },
  },
});

export const { addText, deleteText } = searchText.actions;
export default searchText.reducer;
