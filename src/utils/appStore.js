import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice.js";

const appStore = configureStore(
    {
        reducer:{
            cart : cartReducer,
             //we can add more reducers here like user : userReducer
        }
    }
); 

export default appStore;