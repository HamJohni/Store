import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
    'user/getUser',
    async(_,{rejectedWithValue}) => {
        try {
            const res = await axios('http://localhost:4080/users')

            if (res.statusText !== 'OK') {
                throw new Error("Произошла ошибка")
            }
            return res.data
        }catch (err){
            return rejectedWithValue(err.message)
        }
    }
)

const initialState = {
    user: {},
    error: "",
    status: ""
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        increment(state,action){
            state.user = action.payload
        },
        logout: (state,action) => {
            state.user = action.payload
        }
    },
    extraReducers: {
        [getUser.rejected]: (state, action) => {
            state.error = action.payload
            state.status = 'error'
        },
        [getUser.pending]: (state) => {
            state.status = 'loading'
        },
        [getUser.fulfilled]: (state, action) => {
            state.status = true
            state.reviews = action.payload
        }
    }
})

export const {logout, increment} =userSlice.actions
export default userSlice.reducer
