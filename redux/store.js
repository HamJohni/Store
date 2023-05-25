import {configureStore} from "@reduxjs/toolkit";
import user from "@/redux/reducers/user";

const store = configureStore({
    reducer: {
        user: user
    }
})

export default store