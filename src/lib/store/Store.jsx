import {configureStore} from "@reduxjs/toolkit";
import {reducer as CartReducer} from "@/src/lib/slice/CartSlice";
import {reducer as likedReducer} from "@/src/lib/slice/LikeSlice"

const store = configureStore({
  reducer: {
    addCart: CartReducer,
    like: likedReducer,
  }
})

export default store;