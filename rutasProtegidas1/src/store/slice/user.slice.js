import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name:'counter',
    initialState:0,
    reducers:{
        decrement:state => state - 1,
        reseteador: state => 0,
        increment: state => state + 1

    }
})

export const {decrement, reseteador, increment} = userSlice.actions
export default userSlice.reducer
