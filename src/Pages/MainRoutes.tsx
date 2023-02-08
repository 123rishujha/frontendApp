import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddProduct from './AddProduct'
import Cart from './Cart'
import EditProduct from './EditProduct'
import Homepage from './Homepage'
import Login from './Login'
import ProductPage from './ProductPage';
import RequireAuth from '../Components/RequireAuth'


const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:productId' element={<ProductPage />} />
        <Route path='/product/:productId/edit' element={<RequireAuth><EditProduct /></RequireAuth>} />
        <Route path='/addProduct' element={<RequireAuth><AddProduct /></RequireAuth>} />
        <Route path='*' element={<h1>Not Found</h1>} />
    </Routes>
  )
}

export default MainRoutes

