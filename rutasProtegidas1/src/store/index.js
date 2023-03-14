import {configureStore} from '@reduxjs/toolkit'
import counterJL from './slice/user.slice'
import isShow from './slice/isShow.slice'

export default configureStore({
    reducer:{
        counterJL,
        isShow
    }
})