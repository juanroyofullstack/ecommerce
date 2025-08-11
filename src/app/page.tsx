
"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import OffersCarousel from "./components/OffersCarousel";
import { fetchProducts } from "./lib/features/productsSlice";
import type { AppDispatch } from "./store";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div
      className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center
        min-h-screen p-8 pb-20 gap-16 sm:p-20"
    >
      Ecommerce
      <OffersCarousel />
    </div>
  );
}
