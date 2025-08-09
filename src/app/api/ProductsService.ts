import { ApiUrl } from "./constants";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

interface fetchProductsResponse {
  status: number;
  data: Product[];
}

class ProductService {
  async getProducts(): Promise<fetchProductsResponse> {
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
