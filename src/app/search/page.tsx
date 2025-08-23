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
          <div className="ProductGrid grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))]
          gap-6 mt-4">
            {products.map((product) => (
              <div key={product.id} className="ProductCard cursor-pointer p-4 border border-gray-200
              rounded-lg bg-white shadow-sm hover:shadow-md hover:scale-[1.02]">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  width={250}
                  height={200}
                  style={{
                    objectFit: "cover",
                    borderRadius: "4px",
                    marginBottom: "0.5rem",
                  }}
                />
                <h3 style={{
                  fontSize: "1.1rem",
                  marginBottom: "0.5rem",
                  color: "#333",
                }}>
                  {product.title}
                </h3>
                <p style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#007bff",
                }}>
                ${product.price}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
