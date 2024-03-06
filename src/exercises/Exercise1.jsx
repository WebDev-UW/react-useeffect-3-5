import React, { useEffect, useState } from "react";

function Logging() {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }

  // TODO: Create a useEffect hook that logs something only once on initial render
  useEffect(() => {
    console.log("This only logs once");
  }, []);

  // TODO: Create a useEffect hook that logs something initially and every time the count changes
  useEffect(() => {
    console.log("Logs once and on count change");
  }, [count]);

  return (
    <div>
      <button onClick={incrementCount}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Logging;
