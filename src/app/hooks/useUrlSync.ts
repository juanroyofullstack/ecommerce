"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";

import { setQuery, setSortBy, SortByOptions } from "../lib/features/searchSlice";

export const useUrlSync = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("q") || "";
    const order = searchParams.get("order") || "";

    if (query || query === "") {
      dispatch(setQuery(query));
    }
    if (order || order === "") {
      dispatch(setSortBy(order as SortByOptions));
    }
  }, [searchParams, dispatch]);

};
