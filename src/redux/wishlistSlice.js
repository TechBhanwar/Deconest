import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlist: JSON.parse(localStorage.getItem('wishlist')) || [], 
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const newItem = action.payload;

      if (!newItem || !newItem.id) {
        console.error('Invalid product object:', newItem);
        return;  
      }

      if (!Array.isArray(state.wishlist)) {
        state.wishlist = [];
      }

      const existingItem = state.wishlist.find(item => item.id === newItem.id);

      if (!existingItem) {
        state.wishlist.push(newItem); 
      }

      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },

    removeFromWishlist: (state, action) => {
      const itemToRemove = action.payload;

      // Ensure the item to remove is valid
      if (!itemToRemove || !itemToRemove.id) {
        console.error('Invalid product object:', itemToRemove);
        return; 
      }

      state.wishlist = state.wishlist.filter(item => item.id !== itemToRemove.id);
      
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
    },

    clearWishlist: (state) => {
      state.wishlist = [];
      localStorage.setItem('wishlist', JSON.stringify(state.wishlist));  
    },
  },
});

export const { addToWishlist, removeFromWishlist, clearWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
