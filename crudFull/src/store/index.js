import {configureStore} from '@reduxjs/toolkit'
import usersStore from './slice/users.slice'

export default configureStore({
    reducer:{
        usersStore
    }
})