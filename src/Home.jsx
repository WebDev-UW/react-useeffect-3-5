import React from "react"
import { Link } from "react-router-dom"

function Home() {
	return (
		<div id="container">
			<img src="./logo.png" id="top-logo" />
			<h1>3/5 React useEffect Exercises</h1>
			<hr />
			<ol id="exercise-links">
				<li><Link to="exercises/exercise-1-logging">Exercise 1 - Logging</Link></li>
				<li><Link to="exercises/exercise-2-data-fetch">Exercise 2 - Data Fetching</Link></li>
				<li><Link to="exercises/exercise-3-countdown-timer">Exercise 3 - Countdown Timer</Link></li>
				<li><Link to="exercises/exercise-4-input-validation">Exercise 4 - Input Validation</Link></li>
			</ol>
		</div>
	)
}

export default Home
