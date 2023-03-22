import {configureStore} from '@reduxjs/toolkit'
import count from './slice/count.slice'

export default configureStore({
    reducer:{
        count
    }
})
