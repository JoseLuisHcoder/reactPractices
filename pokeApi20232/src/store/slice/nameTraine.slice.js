import { createSlice } from "@reduxjs/toolkit";

export const nameTraineSlice =  createSlice({
    name:"Luis",
    initialState:'100',
    reducers:{
        setNameTraine:(state, action) => action.payload
    }
})

export const {setNameTraine} = nameTraineSlice.actions
export default nameTraineSlice.reducer