"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import ProductGrid from "../containers/ProductGrid";
import { AppDispatch } from "../store";
import { searchAllProducts } from "../lib/features/productsSlice";

export default function ProductsPage() {

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(searchAllProducts());
  }, [dispatch]);

  return <ProductGrid />;
}
