import React, { useState, useEffect } from "react";

const FormValidation = () => {
  const [inputValue, setInputValue] = useState("");
  const [invalid, setInvalid] = useState(false);

  function handleInput(e) {
    setInputValue(e.target.value);
  }

  useEffect(() => {
    if (inputValue.length >= 16) {
      setInvalid(true);
    } else {
      setInvalid(false);
    }
  }, [inputValue]);

  // Add your state and useEffect logic here for a controlled input and your error message
  let hopeful; // undefined at first by default
  let condition = true;
  if (condition) {
    // 'hopeful' is only defined if 'condition' is true
    hopeful = "we hope we are able to use this string";
  }
  const settle = "but if we dont have it we can settle for this";

  // Validate the input's value so that only inputs under 16 characters are valid
  return (
    <div>
      {/* Create the input field and display the error message in a <p> element, but only if there was an error with the validation */}
      <input
        type="text"
        placeholder="Name (max 16 characters)"
        value={inputValue}
        onChange={handleInput}
      />
      {/* && short circuit: this only renders '<p>Error Message</p> 
	  if 'invalid' is true, otherwise nothing is rendered*/}
      {invalid && <p>Error Message</p>}
      {/* || short circuit: this will return the value of hopeful if defined, 
	  otherwise we fall back on the value in 'settle'
	  so that the user doesn't just see nothing */}
      {hopeful || settle}
    </div>
  );
};

export default FormValidation;
