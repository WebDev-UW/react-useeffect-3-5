import React, { useEffect, useState } from 'react';

function Logging() {
	const [count, setCount] = useState(0)

	function incrementCount() {
		setCount(count + 1)
	}

	// TODO: Create a useEffect hook that logs something only once on initial render



	// TODO: Create a useEffect hook that logs something initially and every time the count changes



	return (
		<div>
			<button onClick={incrementCount}>Increment</button>
			<p>Count: {count}</p>
		</div>
	);
}

export default Logging;