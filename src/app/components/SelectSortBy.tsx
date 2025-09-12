import React from "react";
import { MenuItem, Select } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useSearchParams, useRouter } from "next/navigation";

import { setSortBy, SortByOptions } from "../lib/features/searchSlice";
import type { RootState } from "../store";

const SelectSortBy = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const dispatch = useDispatch();
  const sortBy = useSelector((state: RootState) => state.search.sortby);

  const onChangeSortOption = (option: SortByOptions) => {
    dispatch(setSortBy(option));
    const params = new URLSearchParams(searchParams.toString());

    params.set("sortBy", "title");
    params.set("order", option);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <Select
      value={sortBy || SortByOptions.BEST_MATCH}
      onChange={(e) => onChangeSortOption(e.target.value as SortByOptions)}>
      <MenuItem value={SortByOptions.BEST_MATCH}>Best Match</MenuItem>
      <MenuItem value={SortByOptions.TITLE_ASC}>Alphabetical: Asc</MenuItem>
      <MenuItem value={SortByOptions.TITLE_DESC}>Alphabetical: Desc</MenuItem>
    </Select>);
};

export default SelectSortBy;
