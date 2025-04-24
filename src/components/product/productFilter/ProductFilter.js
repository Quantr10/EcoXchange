import React, { useState } from 'react'
import styles from "./ProductFilter.module.css"
import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from '../../../redux/slice/productSlice'
import { FILTER_BY_CATEGORY } from '../../../redux/slice/filterSlice'

const ProductFilter = () => {
  const products = useSelector(selectProducts)
  const [category, setCategory] = useState("All")
  const dispatch = useDispatch();

  const allCategories = [
    "All",
    ...new Set(products.map((products) => products.category))
  ]

  const filterProducts = (cat) => {
    setCategory(cat)
    dispatch(FILTER_BY_CATEGORY({products, category: cat}))
  }

  return (
    <div className={styles.filter}>
      <h4>Categories</h4>
      <div className={styles.category}>
        {allCategories.map((cat, index) => {
          return (
            <button 
              key={index}
              type="button"
              onClick={() => filterProducts(cat)}
              className={`${category}` === cat ? `${styles.actives}` : null}
            >
              &#8250; {cat}
            </button>
          )
        })}
      </div>
      <h4>Brand</h4>
      <div className={styles.brand}>
        <select name="brand">
          <option value="all">All</option>
        </select>
      </div>
      <h4>Price</h4>
      <p>1500</p>
      <div className={styles.price}>
        <input type="range" name="price" min="100" max="1000"/>
      </div>
      <br/>
      <button className="--btn --btn-danger">Clear Filter</button>
    </div>
  )
}

export default ProductFilter