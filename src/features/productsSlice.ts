import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  skip: number;
  productsPerPage: number;
  products: any[];
}

const initialState: ProductsState = {
  skip: 0,
  productsPerPage: 10,
  products: []
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
    getNewProds: (state, action: PayloadAction<any[]>) => {
      state.products = action.payload;
    }
  },
});
  
  export const { increment, decrement, getNewProds } = productsSlice.actions;
  export default productsSlice.reducer;
  