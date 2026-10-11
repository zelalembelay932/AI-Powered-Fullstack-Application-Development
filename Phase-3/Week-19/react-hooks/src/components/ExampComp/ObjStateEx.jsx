import React from 'react'
import { useState } from 'react'

function ObjStateEx() {
    const [car, setCar] = useState({
        brand: "ford",
        model: "Mustang",
        year: "1996",
        color: "red",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy5CbLXHDSm5ZZ8tTEm7o3y84FkJve67EJg5wExQ9FGQ&s=10"
    });
    console.log(car);
    const updateColor = () => {
        setCar ({
            color: "blue",
            image: "https://www.topgear.com/sites/default/files/cars-car/image/2024/12/54196859052_9249719e93_o.jpg"
        })
    }
    console.log(updateColor);
  return (
    <>
        <div>
            <h1>State update with callback exaample</h1>

            <div>
                <h1>my car {car.brand}</h1>
                <h3>it is a <span></span></h3>
            </div>
        </div>
    </>
  )
}

export default ObjStateEx
