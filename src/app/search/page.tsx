"use client";

import React from "react";
import { useSelector } from "react-redux";

import type { RootState } from "../store";

export default function SearchPage() {
  const products = useSelector((state: RootState) => state.products.items);

  return (
    <div style={{ padding: "2rem" }}>
      <div>
        {products.length === 0 && <p>No hay productos para mostrar.</p>}
      </div>
    </div>
  );
}
