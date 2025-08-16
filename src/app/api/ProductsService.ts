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

interface fetchProductsResponse {
  status: number;
  data: Product[];
}

class ProductService {
  async getAllProducts(): Promise<fetchProductsResponse> {
    try {
      const response = await fetch(`${ApiUrl}/products`);
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

  async getProductsByQuery(query: string): Promise<fetchProductsResponse> {
    try {
      const response = await fetch(`${ApiUrl}/products/search?q=${query}`);
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
