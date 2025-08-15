import { configureStore } from "@reduxjs/toolkit";

import productsSlice from "./lib/features/productsSlice";
import searchSlice from "./lib/features/searchSlice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
    search: searchSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
