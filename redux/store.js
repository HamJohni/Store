import {configureStore} from "@reduxjs/toolkit";
import user from "@/redux/reducers/user";
import products from "@/redux/reducers/products";

const store = configureStore({
    reducer: {
        user,
        products
    }
})

export default store