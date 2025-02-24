// apiSlice.js
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import config from "react-native-config";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: config.API_URL }),
  refetchOnFocus: true,
  refetchOnReconnect: true,
  endpoints: (builder) => ({
    getStocks: builder.query({
      query: (query) =>
        `query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${config.API_KEY}`,
    }),
  }),
});

export const { useLazyGetStocksQuery } = apiSlice;
