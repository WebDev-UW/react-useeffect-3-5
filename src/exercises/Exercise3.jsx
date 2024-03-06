import React, { useState, useEffect } from "react";

function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState(10);

  // TODO: use setInterval to decrease the time remaining every 1000 milliseconds (1 second)
  useEffect(() => {
    let interval = setInterval(() => {
      setTimeRemaining(timeRemaining - 1);
    }, 1000);

    let startTime = Date.now();
    console.log("doing something right now");
    let endTime = Date.now();
    console.log(endTime - startTime);

    // teardown function
    return () => {
      clearInterval(interval);
    };
  }, [timeRemaining]);

  return (
    <div>
      <p>Time remaining: {timeRemaining} seconds</p>
    </div>
  );
}

export default CountdownTimer;
