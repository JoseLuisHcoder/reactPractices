import { createSlice } from "@reduxjs/toolkit";

export const countSlice = createSlice({
    name:'contador',
    initialState:10,
    reducers:{
        increment:state => state + 1,
        decrement:state => state - 1,
        resetCount: state => 0
    }
})
export const {increment, decrement, resetCount} = countSlice.actions
export default countSlice.reducer