import { useEffect } from 'react'
import { useDispatch} from 'react-redux'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { getAllProducts } from './store/slices/product.slice'
import ProductInfo from "./pages/ProductInfo"
import Login from './pages/Login'
import Header from './components/shared/Header'
import Cart from './pages/Cart'
import Purchases from './pages/Purchases'
import ProtectedRoutes from './components/shared/ProtectedRoutes'
import Footer from './components/shared/Footer'

function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts())
  }, [])

  //Este codigo es para crear un nuevo usuario

  // useEffect(() => {
  //   const URL = `https://e-commerce-api.academlo.tech/api/v1/users`

  //   const data = {
  //     firstName: "Felipe",
  //     lastName: "Espana",
  //     email: "faespana@espol.edu.ec",
  //     password: "pass4321",
  //     phone: "0985502731",
  //     role: "admin"
  //   }

  //   axios.post(URL, data)
  //     .then(res => console.log(res))
  //     .catch(err => console.log(err))
  // }, [])

  //Aqui termina

  return (
    <div className="App">
      <Header/>

      <Routes>
        <Route path='/' element = {<Home />}/>
        
        <Route path='/login' element = {<Login/>}/>

        <Route element = {<ProtectedRoutes/>}>
          <Route path = 'cart' element = {<Cart/>}/>
          <Route path = "/purchases" element = {<Purchases/>}/>
        </Route>

        <Route path = "/product/:id" element = {<ProductInfo/>}/>
      </Routes>

      <Footer/>
    </div>
  )
}

export default App
