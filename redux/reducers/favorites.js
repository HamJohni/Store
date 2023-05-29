import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getFavorites = createAsyncThunk(
    'favorites/getFavorites',
    async (id, {rejectedWithValue}) => {
        try {
            const res = await axios(`http://localhost:4080/favorites?userId=${id}`)

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
    favorites: [],
    error: '',
    status: ''
}

const favoritesSlice = createSlice({
    name: "favorites",
    initialState,
    extraReducers: {
        [getFavorites.rejected]: (state, action) => {
            state.error = action.payload
            state.status = 'error'
        },
        [getFavorites.pending]: (state) => {
            state.status = 'loading'
        },
        [getFavorites.fulfilled]: (state, action) => {
            state.status = true
            state.favorites = action.payload
        }
    }
})

export const {checking} = favoritesSlice.actions
export default favoritesSlice.reducer