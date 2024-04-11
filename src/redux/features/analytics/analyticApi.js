import { baseApi } from "../../api/baseApi";

const api = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createAnalytic: builder.mutation({
      query: ({ data }) => ({
        url: "/v1/analytics",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useCreateAnalyticMutation } = api;
