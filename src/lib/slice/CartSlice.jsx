
import {createSlice} from '@reduxjs/toolkit';
import {saveToLocalStorage} from "@/src/utils/SaveToLocalStorage";

const initialState = {
  cart: JSON.parse(localStorage.getItem('carts')) || [],
}

const CartSlice = createSlice({
  name: 'addCart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload)
      const productIndex = state?.cart?.findIndex((product) => product.id === action.payload.id);
      if (productIndex === -1) {
        state.cart.push(action.payload);
      }
      saveToLocalStorage("carts" , state.cart);
    }
  }
})

export const {reducer} = CartSlice
export const {addToCart} = CartSlice.actions;