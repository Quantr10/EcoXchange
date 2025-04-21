import React, { useState } from 'react'
import styles from "./AddProduct.module.css"
import Card from "../../card/Card"
import { ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../../../firebase/config'

const categories = [
  {id: 1, name: "Laptop"},
  {id: 2, name: "Electronics"},
  {id: 3, name: "Fashion"},
  {id: 4, name: "Phone"},
]

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    image: "",
    price: 0,
    category: "",
    brand: "",
    desc: "",
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setProduct({...product, [name]: value});
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    const storageRef = ref(storage, `eshop/${Date.now()}${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);


  }

  const addProduct = (e) => {
    e.preventDefault()

  }

  return (
    <div className={styles.product}>
      <h1>Add New Product</h1>
      <Card cardClass={styles.card}>
        <form onSubmit={addProduct}>
          <label>Product name:</label>
          <input 
            type="text"
            placeholder="Product name"
            required
            name="name"
            value={product.name}
            onChange={(e) => handleInputChange(e)}
          />
          
          <label>Product image:</label>
          <Card cardClass={styles.group}>
            <div className={styles.progress}>
              <div className={styles["progress-bar"]} style={{width: "50%"}}>
                Uploading 50%
              </div>
            </div>
            <input type="file" accept="image/*" placeholder='Product image' name="image" onChange={(e) => handleImageChange(e)} />
            <input type="text" required name="imageURL" value={product.imageURL} disabled/>
          </Card>

          <label>Product price:</label>
          <input 
            type="number"
            placeholder="Product price"
            required
            name="price"
            value={product.price}
            onChange={(e) => handleInputChange(e)}
          />

          <label>Product category:</label>
          <select 
            required
            name="category"
            value={product.category}
            onChange={(e) => handleInputChange(e)}
          >
            <option value="" disabled>
              --choose product category--
            </option>
            {categories.map((cat) => {
              return (
                <option key={cat.id} value={cat.name}>
                  {cat.name}
                </option>
              )
            })}
          </select>


          <label>Product company/brand:</label>
          <input 
            type="text"
            placeholder="Product brand"
            required
            name="brand"
            value={product.brand}
            onChange={(e) => handleInputChange(e)}
          />

          <label>Product description:</label>
          <textarea 
            name="desc"
            value={product.desc}
            onChange={(e) => handleInputChange(e)}
            required
            cols="30"
            rows="10"
          ></textarea>
          
          <button className="--btn --btn-primary">Save Product</button>
        </form>
      </Card>
    </div>
  )
}

export default AddProduct