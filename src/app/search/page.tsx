"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

import ProductCard from "../components/ProductCard";
import { searchProducts } from "../lib/features/productsSlice";
import type { RootState } from "../store";
import { AppDispatch } from "../store";

export default function SearchPage() {
  const products = useSelector((state: RootState) => state.products.data["products"]);
  const callStatus = useSelector((state: RootState) => state.products.loading);

  const query = useSelector((state: RootState) => state.search.query);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(searchProducts());
  }, [dispatch, query]);

  return (
    <div className="pt-8">
      <div>
        {products.length === 0 && !callStatus ? (
          <p>No hay productos para mostrar.</p>
        ) : (
          <div className="ProductGrid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          xl:grid-cols-5 gap-6 p-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
