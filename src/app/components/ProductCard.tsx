import React, { memo } from "react";
import Image from "next/image";

import { Product } from "@/app/api/ProductsService";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="ProductCard cursor-pointer p-4 border border-gray-200 rounded-lg bg-white
                    shadow-sm hover:shadow-md"
    >
      <Image
        src={product.images[0]}
        alt={product.title}
        width={250}
        height={200}
        className="mb-2 m-auto rounded object-cover"
      />
      <h3 className="text-[1.1rem] mb-2 text-gray-800">{product.title}</h3>
      <p className="text-[1.2rem] font-bold text-blue-600">${product.price}</p>
    </div>
  );
};

export default memo(ProductCard);
