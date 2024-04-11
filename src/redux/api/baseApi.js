import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../axios/axiosBaseQuery";
import { tagsArray } from "../tags";

const server = `${import.meta.env.VITE_SERVER_URL}`;

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({ baseUrl: server }),
  endpoints: () => ({}),
  tagTypes: tagsArray,
});
