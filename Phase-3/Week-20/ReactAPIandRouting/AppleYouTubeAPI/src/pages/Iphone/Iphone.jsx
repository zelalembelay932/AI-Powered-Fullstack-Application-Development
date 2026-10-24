import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

const Iphone = () => {
  const [product, setProducts] = useState([]);

  useEffect(()=>{
    const fetchIphone = async () =>{
      try{
        const res = await fetch("http://localhost:3000/iphone");
        if(!res.ok) throw new Error("faild to fetch Iphone");

        const data = await res.json();
        
        console.log(data);
        setProducts(data.product);
      }catch (error) {
          console.log(error);
      }
    };
    fetchIphone();
  }, []);
  return (
    <>
        <section>
          <div>
            <h1>Iphones</h1>

          </div>
          {product?.map((products, index)=>{
            let productDiv = (
              <div key={products.product_url}>
                <div className={`col-sm-12 col-md-6 my-auto order-${index % 2 == 0 ? "1" : "2"}`}>
                  <div>{products.product_name}</div>
                  <div>{product.product_brief_description}</div>
                  <div>{`Starting at ${product.starting_price}`}</div>
                </div>
              </div>
            );
            
          })}
        </section>
    </>
  );
}

export default Iphone
