import React from 'react'
import "./Section3.css"
import puppy4 from "../../assets/images/puppy-4.jpg"
import puppy3 from "../../assets/images/puppy-3.jpg";

const Section3 = () => {
  return (
    <>
           <section>
            <div className="more-puppies">
                <h2>More Puppies</h2>
            </div>
        </section>

          <section class="two-puppies container">
            <div class="puppy-3">
              
                <img src={puppy3} />
                
            </div>
            <div class="puppy-4">
             
                <img  src={puppy4} alt="Puppy 4" />
            </div>
        </section>
    </>
  )
}

export default Section3
