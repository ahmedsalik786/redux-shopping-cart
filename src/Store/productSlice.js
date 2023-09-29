import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    fetchProduct(state,action){
        state.data=action.payload;
    },
  },
});

export const {fetchProduct} = productSlice.actions;
export default productSlice.reducer;

// export function getProducts() {
//   return async function getProductThunk(dispatch, getState) {
//     const data = await fetch("https://fakestoreapi.com/products");
//     const result = data.json();
//     dispatch(fetchProduct(result));
//   };
// }

export function getProducts() {
    return async function getProductThunk(dispatch, getState) {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        
        const data = await response.json();
        dispatch(fetchProduct(data));
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
  }
  