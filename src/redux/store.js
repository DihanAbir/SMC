import { configureStore } from "@reduxjs/toolkit";
import { baseApi } from "./api/baseApi";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (defaultMiddlewar) =>
    defaultMiddlewar().concat(baseApi.middleware),
});
