import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import {userSlice} from "./slices";

  const store = configureStore({
    reducer:{
        userState:userSlice.reducer
    },
  });
  setupListeners(store.dispatch);
  export default store;