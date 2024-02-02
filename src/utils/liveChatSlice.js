import { createSlice } from "@reduxjs/toolkit";

const liveChatSlice = createSlice({
  name: "liveChat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      //This splice method will only work with "unshift" coz unshift adds our latest msz to the first of the array and splice will delete the last msz from the array which was given by user at the beginning when live chat initially started
      state?.messages?.splice(25,1)//removes "1" last msz in the arr after 50 mszs are added to 1st
      state.messages.unshift(action.payload); //adds msz to the first of the array
    },
  },
});

export const { addMessage } = liveChatSlice.actions;
export default liveChatSlice.reducer;
