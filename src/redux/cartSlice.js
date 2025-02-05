// cartSlice.js

import { createSlice } from '@reduxjs/toolkit';

// Initial state
const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || [],  // Load cart from localStorage if available
};

// Create slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);

      if (existingItem) {
        existingItem.quantity += newItem.quantity;
      } else {
        state.items.push(newItem);
      }
      localStorage.setItem('cart', JSON.stringify(state.items)); // Save to localStorage
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
      localStorage.setItem('cart', JSON.stringify(state.items)); // Save updated cart to localStorage
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.setItem('cart', JSON.stringify(state.items)); // Save empty cart to localStorage
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
