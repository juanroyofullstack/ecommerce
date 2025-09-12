"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";

import ProductCard from "../components/ProductCard";
import SelectSortBy from "../components/SelectSortBy";
import { searchProducts } from "../lib/features/productsSlice";
import type { RootState } from "../store";
import { AppDispatch } from "../store";

export default function SearchPage() {
  const products = useSelector((state: RootState) => state.products.data["products"]);
  const isLoading = useSelector((state: RootState) => state.products.loading);
  const query = useSelector((state: RootState) => state.search.query);
  const sortBy = useSelector((state: RootState) => state.search.sortby);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(searchProducts());
  }, [dispatch, query, sortBy]);

  return (
    <div className="pt-8">
      {isLoading && (
        <div className="flex justify-center items-center h-32">
          <CircularProgress />
        </div>
      )}
      <div>
        {products.length === 0 && !isLoading ? (
          <p>No hay productos para mostrar.</p>
        ) : (
          !isLoading && products.length > 0 && (
            <div className="p-4">
              <SelectSortBy />
              <div className="ProductGrid
                    grid grid-cols-1
                    sm:grid-cols-2 md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5 gap-6 mt-4">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
