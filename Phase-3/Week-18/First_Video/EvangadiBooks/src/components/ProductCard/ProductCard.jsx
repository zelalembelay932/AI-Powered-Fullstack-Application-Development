import React, { Component } from 'react'
import styles from "./ProductCard.module.css"


class ProductCard extends Component{
  render(){

// const ProductCard = (props) => {
  // we are distructuring props
  const {title, imgUrl, price, description} = this.props;
  return (
    <>
      <div className={styles.foods_container}>
        {/* <!-- food item start --> */}
        <div className={styles.single_food}>
          <div className={styles.img}>
            <img src={imgUrl} />
          </div>
          <div className={styles.title_price}>
            <h3>{title}</h3>
            <p>{price}</p>
          </div>
          <div className={styles.food_desc}>{description}</div>
        </div>
        {/* <!-- food item end --> */}
      </div>
    </>
  );
}
}

export default ProductCard
