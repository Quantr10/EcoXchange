import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styles from './Admin.module.css'
import Home from "../../components/admin/home/Home";
import Navbar from "../../components/admin/navbar/Navbar"
import AddProduct from '../../components/admin/addProduct/AddProduct'
import ViewProducts from '../../components/admin/viewProducts/ViewProducts'
import Orders from '../../components/admin/orders/Orders'


const Admin = () => {
  return (
    <div className={styles.admin}>
      <div className={styles.navbar}>
        <Navbar/>
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="all-products" element={<ViewProducts/>}/>
          <Route path="add-product" element={<AddProduct/>}/>
          <Route path="orders" element={<Orders/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Admin