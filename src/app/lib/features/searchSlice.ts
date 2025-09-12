import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum SortByOptions {
  BEST_MATCH = "Best Match",
  TITLE_ASC = "asc",
  TITLE_DESC = "desc",
}

interface SearchState {
    query: string;
    sortby: SortByOptions | "";
}

const initialState: SearchState = {
  query: "",
  sortby: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery(state, action: PayloadAction<string>) {
      state.query = action.payload;
    },
    setSortBy(state, action: PayloadAction<SortByOptions>) {
      state.sortby = action.payload;
    },
    clearQuery(state) {
      state.query = "";
    },
    clearSortBy(state) {
      state.sortby = SortByOptions.BEST_MATCH;
    },
  },
});

export const { setQuery, clearQuery, setSortBy, clearSortBy } = searchSlice.actions;

export default searchSlice.reducer;
