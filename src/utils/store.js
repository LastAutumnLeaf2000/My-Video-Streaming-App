import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import searchText from "./searchTextSlice";
import liveChatSlice from "./liveChatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    text: searchText,
    liveChat: liveChatSlice,
  },
});

export default store;
