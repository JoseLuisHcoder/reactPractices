import {createSlice} from '@reduxjs/toolkit'
import axios from 'axios'
import getConfig from '../../components/utils/getConfig'

const usersSlice = createSlice({
    name:'users',
    initialState:null,
    reducers:{
        setUsersState:(state, action) => action.payload
    }
})
export const {setUsersState} = usersSlice.actions
export default usersSlice.reducer

export const getUsers = () => (dispatch) => {
   
    const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
    return axios.get(url, getConfig())
        .then(res => dispatch(setUsersState(res.data)))
        .catch(err => console.log(err))
}