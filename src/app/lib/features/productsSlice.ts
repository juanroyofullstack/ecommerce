import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { productService } from "../../api/ProductsService";
import type { Product } from "../../api/ProductsService";

interface ProductsState {
    items: Product[];
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
};

export const fetchProducts = createAsyncThunk<Product[]>(
  "dataFetch/Products",
  async (_, { dispatch }) => {
    try {
      dispatch(fetchProductsStart());
      const response = await productService.getProducts();

      dispatch(fetchProductsSuccess(response.data));

      return response.data;
    } catch (error: unknown) {
      let errorMessage = "An unknown error occurred";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      dispatch(fetchProductsFailure(errorMessage));

      return [];
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProductsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchProductsSuccess(state, action: PayloadAction<Product[]>) {
      state.items = action.payload;
      state.loading = false;
    },
    fetchProductsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
    addProduct(state, action: PayloadAction<Product>) {
      state.items.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
    updateProduct(state, action: PayloadAction<Product>) {
      const index = state.items.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
  },
});

export const {
  fetchProductsStart,
  fetchProductsSuccess,
  fetchProductsFailure,
  addProduct,
  removeProduct,
  updateProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
