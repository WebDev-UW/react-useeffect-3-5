import React, { useState, useEffect } from 'react';

function CountdownTimer() {
	const [timeRemaining, setTimeRemaining] = useState(10);

	// TODO: use setInterval to decrease the time remaining every 1000 milliseconds (1 second)

	return (
		<div>
			<p>Time remaining: {timeRemaining} seconds</p>
		</div>
	);
}

export default CountdownTimer;