import React from 'react';

const Validation = ({
	text
}) => {
	let validationMessage = text.length >=5 ? 
		'Text long enough' : 
		'Text too short';

	return (
		<p>{validationMessage}</p>
	)
}

export default Validation;
