import React, { useEffect, useState } from 'react'
import styles from "./ProductFilter.module.scss"
import { useDispatch, useSelector } from 'react-redux'
import { selectMaxPrice, selectMinPrice, selectProducts } from '../../../redux/slice/productSlice'
import { FILTER_BY_BRAND, FILTER_BY_CATEGORY, FILTER_BY_PRICE } from '../../../redux/slice/filterSlice'

const ProductFilter = () => {
  const products = useSelector(selectProducts)
  const [category, setCategory] = useState("All")
  const [brand, setBrand] = useState("All")
  const [price, setPrice] = useState(3000)
  const minPrice = useSelector(selectMinPrice)
  const maxPrice = useSelector(selectMaxPrice)
  const dispatch = useDispatch();

  const allCategories = [
    "All",
    ...new Set(products.map((products) => products.category))
  ]

  const allBrands = [
    "All",
    ...new Set(products.map((products) => products.brand))
  ]

  useEffect(() => {
    dispatch(FILTER_BY_BRAND({products, brand}))
  }, [dispatch, products, brand])
  
  useEffect(() => {
    dispatch(FILTER_BY_PRICE({products, price}))
  }, [dispatch, products, price])

  const filterProducts = (cat) => {
    setCategory(cat)
    dispatch(FILTER_BY_CATEGORY({products, category: cat}))
  }

  const clearFilters = () => {
    setCategory("All");
    setBrand("All")
    setPrice(maxPrice)
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
              className={`${category}` === cat ? `${styles.active}` : null}
            >
              &#8250; {cat}
            </button>
          )
        })}
      </div>

      <h4>Brand</h4>
      <div className={styles.brand}>
        <select value={brand} onChange={(e) => setBrand(e.target.value)}>
          {allBrands.map((brand, index) => {
            return (
              <option 
                value={brand}
                key={index}
              >
                {brand}
              </option>
            )
          })}
          
        </select>
      </div>

      <h4>Price</h4>
      <p>{`$${price}`}</p>
      <div className={styles.price}>
        <input
          type="range"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          min={minPrice}
          max={maxPrice}
        />
      </div>
      
      <br/>
      <button className="--btn --btn-danger" onClick={clearFilters}>Clear Filter</button>
    </div>
  )
}

export default ProductFilter