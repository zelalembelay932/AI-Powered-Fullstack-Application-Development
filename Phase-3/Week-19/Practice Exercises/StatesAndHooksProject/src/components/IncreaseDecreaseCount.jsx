import {useState} from 'react'
// imports the Hook that lets a function component remember a value between renders.

function IncreaseDecreaseCount() {
    const [count, setCount] = useState(0);

    // useState(0) =>
            // ask React to create a state value ehose initial value is 0
    // count => is variable used to read te current state
            // browser display cureent state in p tag
    // setCount => is function used to request an update to that state.

    const increaseCount = () => {
        // increaseCount
            // describes when the update should happen: when you click Increase.
      setCount((previousCount) => previousCount + 1);
      // updates from the previous count. 
      // The arrow function is helpful for state changes based on the old value.
    }

    const decreaseCount = () => {
      setCount((previousCount) => previousCount - 1);
      //   sets the state to the fixed value zero. 
      // Reset does not need the previous value
    };

    const resetCount = () => {setCount(0)};


  return (
    <>
      <div>
        <h2>Increase or Decrease Counter</h2>
        <p>Count :- {count}</p>
        <button onClick={increaseCount}>Increses</button>{" "}
        <button onClick={decreaseCount}>Decreses</button>{" "}
        <button onClick={resetCount}>Reset</button>
      </div>
    </>
  );
}

export default IncreaseDecreaseCount
