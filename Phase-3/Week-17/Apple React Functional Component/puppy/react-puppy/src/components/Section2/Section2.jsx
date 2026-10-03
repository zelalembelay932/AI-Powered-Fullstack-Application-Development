import React from 'react'
import puppy1 from "../../assets/images/puppy-1.jpg"
import puppy2 from "../../assets/images/puppy-2.jpg"

import "./Section2.css"

const Section2 = () => {
  return (
    <>
        <section class="three-puppies container" >
        
            <div class="puppy-1">
                <img src={puppy1} />
            </div>
            
            <div class="puppy missing">
                <div class="puppy-missing-content">
                    <p>Puppy missing here!!</p>
                </div>
            </div>
          
            <div class="puppy-2 ">
                <img src={puppy2} alt="Puppy 3" />
            </div>
        </section>
    </>
  )
}

export default Section2
