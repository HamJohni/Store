import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";
import {getUser} from "@/redux/reducers/user";

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (filterName, {rejectedWithValue}) => {
        try {
           const res = await axios(`http://localhost:4080/products?name_like=${filterName}`)

            if (res.statusText !== 'OK') {
                throw new Error("Произошла ошибка")
            }
            return res.data
        }catch (err){
            console.log(rejectedWithValue(err.message))
        }
    }
)

const initialState = 
{
    products: [],
    error: '',
    status: ''
}

const productsSlice = createSlice({
    name: "products",
    initialState,
    extraReducers: {
        [getProducts.rejected]: (state, action) => {
            state.error = action.payload
            state.status = 'error'
        },
        [getProducts.pending]: (state) => {
            state.status = 'loading'
        },
        [getProducts.fulfilled]: (state, action) => {
            state.status = true
            state.products = action.payload
        }
    }
})

export default productsSlice.reducer


