import { mapFiltersToApiParams } from "../utils/navigation_utils";

import { ApiUrl } from "./constants";

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface Review {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface Meta {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  tags: string[];
  sku: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: Review[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: Meta;
  images: string[];
  thumbnail: string;
}

export interface dataResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

interface fetchProductsResponse {
  status: number;
  data: dataResponse;
}

class ProductService {
  async getAllProducts(page?: number): Promise<fetchProductsResponse> {
    try {
      const apiParams = mapFiltersToApiParams({ page });
      const response = await fetch(`${ApiUrl}/products${apiParams ?
        `?${apiParams}` : ""}`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      return { status: response.status, data: data };
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  async getProductsByQueryAndFilters({ query, filters = {} }:
    {query: string, filters: Record<string, any>}):
  Promise<fetchProductsResponse> {
    try {
      const apiParams = mapFiltersToApiParams(filters);
      const response = await fetch(`${ApiUrl}/products/search?q=${query}${apiParams ?
        `&${apiParams}` : ""}`);

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const data = await response.json();
      return { status: response.status, data: data };
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  }

  async getProductById(id: number): Promise<Product | null> {
    try {
      const response = await fetch(`${ApiUrl}/products/${id}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching product:", error);
      throw error;
    }
  }
}

export const productService = new ProductService();
