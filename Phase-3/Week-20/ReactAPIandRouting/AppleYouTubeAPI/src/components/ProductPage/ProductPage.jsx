import React, { useEffect, useState } from 'react'
import { data, useParams } from 'react-router';
import NotFound from '../../pages/NotFound/NotFound';

const ProductPage = () => {
    const [product, setProducts] = useState([]);

    const { productID} = useParams();
    // useParams() reads the parameters from the current React Router URL.
    // { productID } extracts the property named productID from the object returned by the Hook.

    // eg 
            // /iphone/iPhone%20SE
            // The route parameter can provide the corresponding product name, "iPhone SE".
    console.log(productID);

    useEffect(() => {
        fetch("http://localhost:3000/iphone")
        .then((res) => res.json())
        .then((data) => {
            const productList = data.product;
            // console.log(productList);
            const singleProduct = productList.filter(
              (product) => product.product_name === productID,
              //   .filter() method examines an array and returns a new array containing only elements that meet a condition.

            // For each item in the array, the callback compares its `product_name` with `productID`.

            // `product` represents the current record being examined.
            // `product.product_name` is the product's name from the database.
            );
            setProducts(singleProduct);
        })
        .catch(() => console.log("error: unable to fatch!!"));
    }, [productID]);
    // The array contains productID, so the effect runs when the component mounts and again when productID changes.
        // Why is this important? The component must retrieve and filter the data for the currently selected product, not keep using the previous selection after the URL parameter changes.
    console.log(product);

    if(product.length){
        return (
            <>
                <section className="internal-page-wrapper">
                    <div className="container">
                        {product?.map((product) =>{
                            return(
                                <div key={product.product_id}>

                                    <div className="row justify-content-center">
                                        <div className="col-12 mt-5 pt-5">
                                            <div className="title-wraper font-weight-bold">{product.product_name}</div>

                                            <div className="brief-description">{product.product_brief_description}</div>
                                        </div>
                                    </div>

                                    <div className="row justify-content-center text-center product-holder h-100 m-5">
                                        <div className="starting-price">{`Starting at ${product.starting_price}`}</div>

                                        <div className="monthly-price">{product.price_range}</div>

                                        <div className="product-details">{product.product_description}</div>
                                    </div>

                                    <div className={`col-sm-12 col-md-6`}>
                                        <div className="product-image">
                                            <img src={product.product_img} alt="product" />
                                        </div>
                                    </div>
                                </div>
                                
                            );
                        })}
                    </div>
                </section>
            </>
        )
        
    }
    else{
        return <NotFound />
    }
  
}

export default ProductPage
