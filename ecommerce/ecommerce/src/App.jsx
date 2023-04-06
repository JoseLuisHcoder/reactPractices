import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './screens/Home'
import Login from './screens/Login'
import ProductDetail from './screens/ProductDetail'
import Purchases from './screens/Purchases'
import Cart from './components/cart/Cart'
import NavBar from './components/shared/navbar/NavBar'
import { Route, Routes } from 'react-router-dom'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  // useEffect(() => {
  //   const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/users'
  //   const obj = {
  //     firstName: 'Ryan',
  //     lastName: 'reynols',
  //     email: 'tarija789@gmail.com', 
  //     password: 'tarija789',
  //     phone:'1284367891'
  //   }
  //   axios.post(url, obj)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // },[])

  return (
    <div className="App">
      <NavBar />
     <Routes>
      <Route 
      path='/' 
      element={<Home />}
      className={({isActive}) => isActive ? 'active-link':'' }
      
      />
      <Route path='/login' element={<Login />} />
      <Route  path='/product/:id' element={<ProductDetail />} />
      <Route>
          <Route path='/purchases' element={<Purchases />} />
          <Route path='/cart' element={<Cart />} />
      </Route>
     </Routes>
    </div>
  )
}

export default App
