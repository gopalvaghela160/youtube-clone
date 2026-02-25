import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./SearchSlice";
import chatSlice from "./ChatSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    chat: chatSlice,
  },
});
export default store;
