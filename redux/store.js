import {configureStore} from "@reduxjs/toolkit";
import user from "@/redux/reducers/user";
import products from "@/redux/reducers/products";
import favorites from "@/redux/reducers/favorites";

const store = configureStore({
    reducer: {
        user,
        products,
        favorites
    }
})

export default store