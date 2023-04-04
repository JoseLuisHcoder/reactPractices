import { configureStore } from "@reduxjs/toolkit";
import nameTraineSlice from './slice/nameTraine.slice'

export default configureStore({
    reducer:{
        nameTraineSlice
    }
})