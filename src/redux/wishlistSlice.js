import { createSlice } from '@reduxjs/toolkit';

// Initial state from localStorage
const initialState = {
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [], // Load wishlist or use empty array
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    // Add product to wishlist
    addToWishlist: (state, action) => {
      const newItem = action.payload;

      // Check if item already exists in wishlist
      const existingItem = state.wishlist.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.wishlist.push(newItem); // Add item if not already in wishlist
      }

      // Update localStorage with the new wishlist
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },

    // Remove product from wishlist
    removeFromWishlist: (state, action) => {
      // Remove the item with the matching id
      state.wishlist = state.wishlist.filter(item => item.id !== action.payload.id);

      // Update localStorage with the new wishlist
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },

    // Clear the wishlist
    clearWishlist: (state) => {
      state.wishlist = []; // Empty the wishlist
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist)); // Update localStorage
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
