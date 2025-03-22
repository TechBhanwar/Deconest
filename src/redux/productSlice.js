import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: JSON.parse(localStorage.getItem("selectedProduct")) || null, 
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
      localStorage.setItem("selectedProduct", JSON.stringify(action.payload));
    },
  },
});

export const { setSelectedProduct } = productSlice.actions;
export default productSlice.reducer;
