import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"
import Exercise1 from "./exercises/Exercise1"
import Exercise2 from "./exercises/Exercise2"
import Exercise3 from "./exercises/Exercise3"
import Exercise4 from "./exercises/Exercise4"
import "./style.css"

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="exercises/exercise-1-logging" element={<Exercise1 />} />
				<Route path="exercises/exercise-2-data-fetch" element={<Exercise2 />} />
				<Route path="exercises/exercise-3-countdown-timer" element={<Exercise3 />} />
				<Route path="exercises/exercise-4-input-validation" element={<Exercise4 />} />
			</Routes>
		</>
	)
}

export default App