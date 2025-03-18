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
  total: 0,
  error: false,
  loading: false
};

// Documentacion: https://redux-toolkit.js.org/api/createAsyncThunk
//
// 1. Crear async thunk
// export const fetchProducts = createAsyncThunk(
//   "products/fetchProducts",
//   async (productId: number, thunkAPI) => {
//     const response = await fetch("https://miapi.com/products/" + productId);
//     const json = await response.json();
//     //devolver lo que yo quería
//     return json;
//   }
// );
//
// 3. Llamarlo donde lo necesites (En React) (Dentro de un UseEffect)
// dispatch(fetchProducts(10))

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
    },
  },
  // 2. Unirlo al slice
  // extraReducers: {
  //   [fetchProducts.pending]: (state, action) => {
  //     state.error = false;
  //     state.loading = true;
  //   },
  //   [fetchProducts.fulfilled]: (state, action) => {
  //     state.error = false;
  //     state.loading = false;
  //     state.products = action.payload; // return
  //   },
  //   [fetchProducts.rejected]: (state, action) => {
  //     state.error = true;
  //     state.loading = false;
  //   },
  // }
});
  
export const { increment, decrement, getTotal, getNewProducts, updateByPayload } = productsSlice.actions;
export default productsSlice.reducer;
  

// -- Action --
//   const action = {
//     type: "INCREASE_COUNTER",
//     payload: 10
//   }

//   dispatch({ type: "INCREASE_COUNTER", payload: 10 });


// -- Thunk --
// function increaseCounter(quantity) {
//   return {
//     type: "INCREASE_COUNTER",
//     payload: quantity
//   }
// }

// dispatch(increaseCounter(10));


// -- Async Thunk -- (Poder peticiones HTTP)
// Creacion

