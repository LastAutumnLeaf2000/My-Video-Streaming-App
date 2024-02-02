import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import searchText from "./searchTextSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    text: searchText,
  },
});

export default store;
