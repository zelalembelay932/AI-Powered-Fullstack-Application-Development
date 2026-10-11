import React from 'react'
import { useState } from 'react'

function ExampComp() {
    let [count, setCount] = useState(0)

    const increment = () =>{
        setCount((prev) => {
            return prev + 1;
        });
    };
    

    return (
        <>
            <div>
                <h1>React useState Counter</h1>
                <div>{count}</div>
                <div>
                    <button onClick={increment}>
                        Increment by 1
                    </button>

                    <button onClick={() => setCount((prev) => prev + 10)}>Increment by 10</button>
                    </div>
            </div>
        </>
    )
}

export default ExampComp
