import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
    
const { name, image, cost } = action.payload; // Get product details
const existingItem = state.items.find(item => item.name === name);

if (existingItem) {
  // If already in cart, increase quantity
  existingItem.quantity++;
} else {
  // If not in cart, add new item
  state.items.push({ name, image, cost, quantity: 1 });
}

    },
    removeItem: (state, action) => {

        // action.payload = name of the product to remove
state.items = state.items.filter(item => item.name !== action.payload);

    },
    updateQuantity: (state, action) => {

        // action.payload = { name: "Plant Name", quantity: newQuantity }
const { name, quantity } = action.payload;
const itemToUpdate = state.items.find(item => item.name === name);
if (itemToUpdate) {
  itemToUpdate.quantity = quantity;
}
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
