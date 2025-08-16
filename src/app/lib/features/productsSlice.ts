import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { productService } from "../../api/ProductsService";
import type { Product } from "../../api/ProductsService";
import type { RootState } from "../../store";

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

export const searchProducts =
createAsyncThunk<
  Product[],
  void,
  { state: RootState }
>(
  "dataFetch/Products",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const query = state.search.query;
      const response = await productService.getProductsByQuery(query);
      return response.data;
    } catch (error: unknown) {
      throw error;
    }
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
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
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });
  },
});

export const {
  addProduct,
  removeProduct,
  updateProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
