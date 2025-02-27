import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ProductType from "../interfaces/ProductType";

interface ProductsState {
  skip: number;
  productsPerPage: number;
  products: ProductType[];
  total: number;
}

const initialState: ProductsState = {
  skip: 0,
  productsPerPage: 10,
  products: [],
  total: 0
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
    updateByPayload: (state, action:PayloadAction<number>) => {
      state.skip = action.payload;      
    },
    getTotal: (state, action: PayloadAction<number>) => {
      state.total = action.payload;      
    },
    getNewProducts: (state, action: PayloadAction<ProductType[]>) => {
      state.products = action.payload
    }
  },
});
  
  export const { increment, decrement, getTotal, getNewProducts, updateByPayload } = productsSlice.actions;
  export default productsSlice.reducer;
  