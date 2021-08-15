import React, { useState } from "react";
import PropTypes from "prop-types";

const Square = props => {
	const [tick, setTick] = useState("");

	const switchTurn = checkTurn => {
		if (tick == "") {
			if (checkTurn == true) {
				setTick("X");
			} else {
				setTick("O");
			}
			props.fillArray();
			props.tickFunction();
		}
	};
	return (
		<div
			className={"squareBox"}
			onClick={() => {
				switchTurn(props.checkTurn);
			}}>
			<p>{tick}</p>
		</div>
	);
};

Square.propTypes = {
	tickFunction: PropTypes.func,
	checkTurn: PropTypes.bool,
	fillArray: PropTypes.func,
	id: PropTypes.number
};

export default Square;
