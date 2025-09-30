import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

import { productService } from "../../api/ProductsService";
import type { Product, dataResponse } from "../../api/ProductsService";
import type { RootState } from "../../store";

interface ProductsState {
    data: dataResponse;
    loading: boolean;
    error: string | null;
}

const initialState: ProductsState = {
  data: { products: [], total: 0, skip: 0, limit: 0 },
  loading: false,
  error: null,
};

export const searchProducts =
createAsyncThunk<
  dataResponse,
  void,
  { state: RootState }
>(
  "dataFetch/Products",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const query = state.search.query;
      const sortby = state.search.sortby && state.search.sortby !== "Best Match"
        ? { sortBy: "title", order: state.search.sortby } : undefined;
      const page = state.search.page;

      const filters = { ...sortby, page };

      const response = await productService.getProductsByQueryAndFilters({ query, filters });
      return response.data;
    } catch (error: unknown) {
      throw error;
    }
  }
);

export const searchAllProducts =
createAsyncThunk<
  dataResponse,
  void,
  { state: RootState }
>(
  "dataFetch/AllProducts",
  async (_, thunkAPI) => {
    try {
      const state = thunkAPI.getState() as RootState;
      const page = state.search.page;

      const response = await productService.getAllProducts(page);
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
      state.data.products.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      state.data.products = state.data.products.filter(product => product.id !== action.payload);
    },
    updateProduct(state, action: PayloadAction<Product>) {
      const index = state.data.products.findIndex(p => p.id === action.payload.id);
      if (index !== -1) {
        state.data.products[index] = action.payload;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action: PayloadAction<dataResponse>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch products";
      });

    builder.addCase(searchAllProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
      .addCase(searchAllProducts.fulfilled, (state, action: PayloadAction<dataResponse>) => {
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(searchAllProducts.rejected, (state, action) => {
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
