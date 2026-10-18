import { useEffect, useState } from "react";

function UseEffectForTitle() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    window.alert("Component is mounted");
  }, []);

  const increaseCount = () => {
    setCount((previousCount) => previousCount + 1);
  };

  return (
    <main style={{ padding: "24px" }}>
      <h2>useEffect document title</h2>
      <button onClick={increaseCount}>Increase count</button>
      <p>Clicked {count} times</p>
    </main>
  );
}

export default UseEffectForTitle;
