import { qString } from "../../../utils/commonFunctions";
import { baseApi } from "../../api/baseApi";

const api = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: ({ query }) => ({
        url: `/api/v1/restaurants${qString(query)}`,
        method: "GET",
      }),
    }),
    getRestaurant: builder.query({
      query: ({ id, query }) => ({
        url: `/api/v1/restaurants/${id}${qString(query)}`,
        method: "GET",
      }),
    }),
  }),
});

export const { useGetRestaurantsQuery, useGetRestaurantQuery } = api;
