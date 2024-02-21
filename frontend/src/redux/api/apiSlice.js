import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";
import { BASE_URL, USERS_URL } from "../constants";

// Provide base query
const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

// Api slice
export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["Product", "Order", "User", "Category"],
  endpoints: () => ({})
});
