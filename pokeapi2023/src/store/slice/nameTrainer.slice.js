import { createSlice } from "@reduxjs/toolkit";

export const nameTrainerSlice =  createSlice({
    name:"nameTrainer",
    initialState:"jose",
    reducers: {
        setNameTrainer:(state, action) => action.payload
    }
})

export const {setNameTrainer} = nameTrainerSlice.actions
export default nameTrainerSlice.reducer