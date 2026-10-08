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
        {products.map((product, index) => {
          // const {imgUrl, title, price, description, link} = product;
          return (
            // <ProductCard title={title} imgUrl={imgUrl} price={price} description={description} link={link} />

            <ProductCard key={index} data={product} />
          );
        })}
      </div>
    </>
  );
}
}
export default ProductList
