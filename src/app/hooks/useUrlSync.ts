"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "next/navigation";

import { setQuery } from "../lib/features/searchSlice";

export const useUrlSync = () => {
  const dispatch = useDispatch();
  const searchParams = useSearchParams();

  useEffect(() => {
    const query = searchParams.get("query") || "";
    if (query || query === "") {
      dispatch(setQuery(query));
    }
  }, [searchParams, dispatch]);

};
