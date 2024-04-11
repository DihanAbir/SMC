import { baseApi } from "../../api/baseApi";

const api = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: ({ data }) => ({
        url: "/v1/reviews",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useCreateReviewMutation } = api;
