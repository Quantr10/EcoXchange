import React, { useEffect, useState } from 'react'
import styles from "./Product.module.scss"
import ProductFilter from './productFilter/ProductFilter'
import ProductList from './productList/ProductList'
import useFetchCollection from '../../customHooks/useFetchCollection'
import { useDispatch, useSelector } from 'react-redux'
import { GET_PRICE_RANGE, selectProducts, STORE_PRODUCTS } from '../../redux/slice/productSlice'
import spinnerImg from "../../assets/spinner.jpg"
import { FaCogs } from 'react-icons/fa'

const Product = () => {
    const { data, isLoading } = useFetchCollection("products");
    const products = useSelector(selectProducts);
    const [showFilter, setshowFilter] = useState(false);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(
        STORE_PRODUCTS({
          products: data,
        })
      );

      dispatch(
        GET_PRICE_RANGE({
          products: data,

        })
      )
    }, [dispatch, data]);

    const toggleFilter = () => {
      setshowFilter(!showFilter);
    }

    return (
    <section>
        <div className={`container ${styles.product}`}>
            <aside className={showFilter ? `${styles.filter} ${styles.show}` : `${styles.filter}`}>
              {isLoading ? null : <ProductFilter/>}
            </aside>
            <div className={styles.content}>
              {isLoading ? 
                <img 
                  src={spinnerImg}
                  alt="Loading"
                  style={{width: "50px"}}
                  className="--center-all"
                />
              : (
                <ProductList products={products}/>
              )}
              <div className={styles.icon} onClick= {toggleFilter}>
                <FaCogs size={20} color="orangered" />
                  <p>
                    <b>{showFilter ? "Hide Filter" : "Show Filter"}</b>
                  </p>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Product