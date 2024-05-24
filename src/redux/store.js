import { configureStore } from "@reduxjs/toolkit";
import voitureSlice from "./cartSlice";

const Store=configureStore({
    reducer:{
        produits:voitureSlice
    }
})
export default Store;