import React from 'react';
import './Char.css';

const Char = ({
	text,
	click
}) => {
	return (
		<div className="char" onClick={click}>
			{text}
		</div>
	)
}

export default Char;
