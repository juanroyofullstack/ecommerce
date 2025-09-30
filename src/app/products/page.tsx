"use client";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { searchAllProducts } from "../lib/features/productsSlice";
import ProductGrid from "../containers/ProductGrid";
import type { RootState } from "../store";
import { AppDispatch } from "../store";

export default function ProductsPage() {
  const page = useSelector((state: RootState) => state.search.page);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(searchAllProducts());
  }, [dispatch, page]);

  return <ProductGrid />;
}
