"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Image from "next/image";

import { searchProducts } from "../lib/features/productsSlice";
import type { RootState } from "../store";
import { AppDispatch } from "../store";

export default function SearchPage() {
  const products = useSelector((state: RootState) => state.products.items["products"]);
  const query = useSelector((state: RootState) => state.search.query);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(searchProducts());
  }, [dispatch, query]);

  return (
    <div className="pt-8">
      <div>
        {products.length === 0 ? (
          <p>No hay productos para mostrar.</p>
        ) : (
          <div className="ProductGrid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4
          xl:grid-cols-5 gap-6 p-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="ProductCard cursor-pointer p-4 border border-gray-200 rounded-lg bg-white
                shadow-sm hover:shadow-md hover:scale-105 transition-transform"
              >
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={250}
                  height={200}
                  className="mb-2 rounded object-cover"
                />
                <h3 className="text-[1.1rem] mb-2 text-gray-800">{product.title}</h3>
                <p className="text-[1.2rem] font-bold text-blue-600">${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
