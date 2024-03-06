import React, { useState, useEffect } from 'react';

const FormValidation = () => {
	// Add your state and useEffect logic here for a controlled input and your error message

	// Validate the input's value so that only inputs under 16 characters are valid

	return (
		<div>
			{/* Create the input field and display the error message in a <p> element, but only if there was an error with the validation */}
			<input type="text" placeholder="Name (max 16 characters)" />
			<p>Error Message</p>
		</div>
	)
}

export default FormValidation;
