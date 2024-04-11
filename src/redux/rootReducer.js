import { baseApi } from "./api/baseApi";
import restaurantSlice from "./features/restaurants/restaurantSlice";

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  restaurants: restaurantSlice,
};
