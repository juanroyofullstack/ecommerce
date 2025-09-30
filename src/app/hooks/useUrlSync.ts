"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";

import {
  setQuery,
  setSortBy,
  SortByOptions,
  setPage } from "../lib/features/searchSlice";

export const useUrlSync = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.has("q")) {
      dispatch(setQuery(searchParams.get("q") || ""));
    }
    if (searchParams.has("order")) {
      dispatch(setSortBy(searchParams.get("order") as SortByOptions));
    }
    if (searchParams.has("page")) {
      dispatch(setPage(Number(searchParams.get("page"))));
    }
  }, [searchParams, dispatch]);

};
