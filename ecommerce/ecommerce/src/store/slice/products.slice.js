import { createSlice } from "@reduxjs/toolkit";
import axios from 'axios'

const productsSlice = createSlice({
    name:"productsStore",
    initialState:null,
    reducers:{
        setProductsStore:(state, action) => action.payload
    }
})
export const {setProductsStore} = productsSlice.actions
export default productsSlice.reducer

export const getAllProducts = () => (dispatch) => {
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products'

    return axios.get(url)
        .then(res => dispatch(setProductsStore(res.data)))
        .catch(err => console.log(err))
}