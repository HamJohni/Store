import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getBasket = createAsyncThunk(
    'basket/getBasket',
    async (id, {rejectedWithValue}) => {
        try {
            const res = await axios(`http://localhost:4080/basket?userId=${id}`)

            if (res.statusText !== 'OK') {
                throw new Error("Произошла ошибка")
            }
            return res.data
        }catch (err){
            console.log(rejectedWithValue(err.message))
        }
    }
)

const initialState = {
    basket: [],
    error: '',
    status: ''
}

const basketSlice = createSlice({
    name: "basket",
    initialState,
    extraReducers: {
        [getBasket.rejected]: (state, action) => {
            state.error = action.payload
            state.status = 'error'
        },
        [getBasket.pending]: (state) => {
            state.status = 'loading'
        },
        [getBasket.fulfilled]: (state, action) => {
            state.status = true
            state.basket = action.payload
        }
    }
})

export default basketSlice.reducer