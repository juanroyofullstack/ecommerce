"use client";

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

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
    <div style={{ padding: "2rem" }}>
      <div>
        {products.length === 0 ? (
          <p>No hay productos para mostrar.</p>
        ) : (
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
            gap: "1.5rem",
            marginTop: "1rem",
          }}>
            {products.map((product) => (
              <div key={product.id} style={{
                border: "1px solid #e0e0e0",
                borderRadius: "8px",
                padding: "1rem",
                backgroundColor: "#fff",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                transition: "transform 0.2s",
                cursor: "pointer",
              }}>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{
                    width: "100%",
                    height: "200px",
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
