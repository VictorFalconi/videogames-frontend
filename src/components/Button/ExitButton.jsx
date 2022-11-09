import React from "react";
import { useHistory } from "react-router-dom";
import "./ExitButton.css";

function ExitButton() {
	const history = useHistory();

	return (
		<div>
			<button className="exitbutton" type='button' onClick={() => history.push('/')}>EXIT</button>
		</div>
	);
}

export default ExitButton;
