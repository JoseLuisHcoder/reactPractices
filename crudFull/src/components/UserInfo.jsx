import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getConfig from './utils/getConfig'

const UserInfo = () => {
  const [userInfo, setUserInfo] = useState()
  const {id} = useParams()
  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/users/${id}`
    axios.get(url, getConfig)
      .then(res => setUserInfo(res.data))
      .catch(err => console.log(err))
  }, [])
  console.log(id);
  return (
    <div>
      <h3>User Info</h3>
    </div>
  )
}

export default UserInfo
