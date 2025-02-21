import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProductsState {
  limitInitial: number;
  productsQty: number;
  products: any[];
}

const initialState: ProductsState = {
  limitInitial: 0,
  productsQty: 10,
  products: []
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    increment: (state) => {
      state.limitInitial += 1;
    },
    decrement: (state) => {
      state.limitInitial -= 1;
    },
    getNewProds: (state, action: PayloadAction<any[]>) => {
      state.products = action.payload;
    }
  },
});
  
  export const { increment, decrement, getNewProds } = productsSlice.actions;
  export default productsSlice.reducer;
  