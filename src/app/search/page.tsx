"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductGrid from "../containers/ProductGrid";
import { searchProducts } from "../lib/features/productsSlice";
import type { RootState } from "../store";
import { AppDispatch } from "../store";

export default function SearchPage() {
  const query = useSelector((state: RootState) => state.search.query);
  const sortBy = useSelector((state: RootState) => state.search.sortby);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(searchProducts());
  }, [dispatch, query, sortBy]);

  return (
    <div className="Search pt-8">
      <ProductGrid />
    </div>
  );
}
