"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { searchProducts } from "../lib/features/productsSlice";
import type { RootState } from "../store";
import { AppDispatch } from "../store";

export default function SearchPage() {
  const products = useSelector((state: RootState) => state.products.items);
  const query = useSelector((state: RootState) => state.search.query);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(searchProducts());
  }, [dispatch, query]);

  return (
    <div style={{ padding: "2rem" }}>
      <div>
        {products.length === 0 && <p>No hay productos para mostrar.</p>}
      </div>
    </div>
  );
}
