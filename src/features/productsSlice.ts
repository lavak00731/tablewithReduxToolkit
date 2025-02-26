import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductService from "../interfaces/ProductService";
import ProductType from "../interfaces/ProductType";

interface ProductsState {
  skip: number;
  productsPerPage: number;
  products: ProductType[];
  data: ProductService;
}

const initialState: ProductsState = {
  skip: 0,
  productsPerPage: 10,
  products: [],
  data: {
    products: [],
    total: 0,
    skip: 0,
    limit: 0
  }
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state) => {
      state.skip += 1;
    },
    decrement: (state) => {
      state.skip -= 1;
    },
    getAllData: (state, action: PayloadAction<ProductService>) => {
      state.data = action.payload
    },
    getNewProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload
    }
  },
});
  
  export const { increment, decrement, getAllData, getNewProducts } = productsSlice.actions;
  export default productsSlice.reducer;
  