import {configureStore} from '@reduxjs/toolkit'
import character from './slice/character.slice'

export default configureStore({
    reducer: {
        character
    }
})