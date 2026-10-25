import { Link } from "react-router";
import { useEffect, useState } from "react";
// useState 
      // allows your component to store data that changes over time.

// useEffect 
      // allows your component to run side effects, such as fetching product information from an API.

// In this file, useState stores the product records and useEffect starts the API request.
const Iphone = () => {
  const [product, setProducts] = useState([]);
  // product =>stores the current state.
  // setProducts =>updates that state.
  // useState([]) =>initializes the state with an empty array.

  // use state? Because the product list is fetched asynchronously. React needs to display the new products after the response arrives.

  useEffect(() => {
    // effect is used for side effects such as network requests.
    // Fetching product data is a side effect because it communicates with an external system.
    fetch("http://localhost:3000/iphone")
      // fetch() is a browser JavaScript API for making HTTP requests.
      .then((res) => res.json())
      // .then()=> registers a callback to run when the previous promise resolves.
      // res => represents the HTTP Response object returned by fetch().
      // res.json()=> reads the response body and parses its JSON into a JavaScript object.
      .then((data) => {
        // data represents the JavaScript object produced by res.json().
        setProducts(data.product);
        // data.product refers to the `product(line 88)` property created by your backend in app.js
        // setProducts() updates the state so that the component can render the records received from MySQL.
      })
      .catch(() => console.log("error: unable to fetch"));
    // .catch() handles a rejected promise
  }, []);
  // The empty array means the effect runs when the component mounts, rather than after every ordinary re-render.

  console.log(product);
  let flip = true;
  // This creates a variable named flip and initializes it to true.
  // Your component uses this variable inside the mapping callback to alternate the layout order of the text and image across product rows.
  return (
    <>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
              <h1 className="font-weight-bold">Iphone</h1>
              <div className="brief-description mb-5">
                The best for the brightest
              </div>
            </div>
          </div>
          {product?.map((product) => {
            // product is the array stored in state.
            // .map() is a JavaScript array method that runs a callback for each item in the array and returns a new array of results. React can render the returned JSX elements.
            // The ?. is optional chaining. If the expression to its left is null or undefined, JavaScript does not attempt to call map() on it.
            let order1 = 1;
            let order2 = 2;
            if (flip) {
              order1 = 2;
              order2 = 1;
                // When flip is true, these assignments reverse the default order values.
                // The text column receives order-2, while the image column receives order-1.
                // In the applicable Bootstrap layout, the image therefore appears before the text in the row's visual order.
              flip = !flip;
              // If flip is true, !flip is false.
              // If flip is false, !flip is true.
            } else {
              flip = !flip;
            }
            let productDiv = (
              <div
                key={product.product_url}
                className="row justify-content-center text-center product-holder h-100"
              >
                <div className={`col-12 col-md-6 my-auto order-${order1}`}>
                  <div className="product-title">{product.product_name}</div>

                  <div className="product_brief">
                    {product.product_brief_description}
                  </div>

                  <div className="starting-price">{`Starting at ${product.starting_price}`}</div>

                  <div className="mothly-price">{product.price_range}</div>

                  <div className="links-wrapper">
                    <ul>
                      <li>
                        <Link to={`/iphone/${product.product_name}`}>
                          Learn more
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className={`col-sm-12 col-md-6 order-${order2}`}>
                  <div className="product-image">
                    <img src={product.product_img} alt="product" />
                  </div>
                </div>
              </div>
            );
            return productDiv;
          })}
        </div>
      </section>
    </>
  );
};

export default Iphone;
