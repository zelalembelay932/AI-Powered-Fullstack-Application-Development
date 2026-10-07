import React, {Component} from 'react'
import ProductCard from '../ProductCard/ProductCard';
import  styles from "./ProductList.module.css"
import products from '../../assets/data';


class ProductList extends Component{
// const ProductList = () => {
render(){

  return (
    <>
      <div className={styles.foods_container}>
        
        {      
          products.map((product) =>{
            const {imgUrl, title, price, description} = product;
            return (
              <ProductCard title={title} imgUrl={imgUrl} price={price} description={description}/>
            )
          })
        }
      </div>
    </>
  );
}
}
export default ProductList
