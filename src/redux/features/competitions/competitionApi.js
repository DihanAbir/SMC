import { baseApi } from "../../api/baseApi";

const api = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createCompetitions: builder.mutation({
      query: ({ data }) => ({
        url: "/v1/competitions",
        method: "POST",
        data,
      }),
    }),
  }),
});

export const { useCreateCompetitionsMutation } = api;
