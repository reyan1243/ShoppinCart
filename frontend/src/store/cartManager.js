import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getProducts = createAsyncThunk(
    "store/Products",
    async () => {
      const response = await fetch("http://localhost:3008/api/products").then(
        (data) => data.json()
      );
      return response;
    }
  );

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    totalProducts: 0,
    totalPrice: 0,
    products: [],
    productsInCartId: [],
  },
  reducers: {
    addProduct: (state, action) => {
      const { price, productId } = action.payload;
      state.totalPrice += price;
      state.totalProducts += 1;
      if (productId) state.productsInCartId.push(productId);
    },
    removeFromCart: (state, action) => {
      const { price, productId } = action.payload;
      state.totalPrice -= price;
        state.totalProducts -= 1;     
      const index = state.productsInCartId.findIndex(element => element === productId)
        console.log(index);
        state.productsInCartId.splice(index, 1);
        
    },
      emptyCart: (state, action) => {
        
      state.totalPrice  = 0;
        state.totalProducts = 0;     
        state.productsInCartId= [];
        
    },
    allProducts: (state, action) => {
      state.products += action.products;
    },
  },
  extraReducers: {
    [getProducts.fulfilled]: (state, { payload }) => {
      state.products = payload;
    },
  },
});
