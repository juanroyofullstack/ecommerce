import { useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

import ProductCard from "../components/ProductCard";
import SelectSortBy from "../components/SelectSortBy";
import type { RootState } from "../store";

const ProductGrid = () => {
  const products = useSelector((state: RootState) => state.products.data["products"]);
  const isLoading = useSelector((state: RootState) => state.products.loading);

  return (
    <div className="ProductGrid p-4">
      {isLoading && (
        <div className="flex justify-center items-center h-32">
          <CircularProgress />
        </div>
      )}
      {products.length === 0 && !isLoading ? (
        <p>No hay productos para mostrar.</p>
      ) : (
        !isLoading &&
        products.length > 0 && (
          <>
            <SelectSortBy />
            <div className="grid 
                    grid-cols-1
                    sm:grid-cols-2 md:grid-cols-3
                    lg:grid-cols-4
                    xl:grid-cols-5 gap-6 mt-4">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default ProductGrid;