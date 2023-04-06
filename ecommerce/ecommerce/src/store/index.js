import {configureStore} from '@reduxjs/toolkit'
import productsSliceStore from './slice/products.slice'

export default configureStore({
    reducer:{
        productsSliceStore
    }
})