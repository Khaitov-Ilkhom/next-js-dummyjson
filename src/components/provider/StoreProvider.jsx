"use client"

import {Provider} from "react-redux";
import store from "@/src/lib/store/Store";

const StoreProvider = ({children}) => {
  return (
      <Provider store={store}>
        {children}
      </Provider>
  )
}
export default StoreProvider
