import { array } from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import Square from "./square.jsx";

const Home = () => {
	const [checkTurn, setCheckTurn] = useState(true);
	const [player, setPlayer] = useState("Turn of X");
	const [clicks, setClicks] = useState([
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null,
		null
	]);

	const winnerLines = [
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 4, 8],
		[6, 4, 2]
	];

	const tickFunction = () => {
		setCheckTurn(!checkTurn);
		if (checkTurn) {
			setPlayer("Turn of O");
		} else {
			setPlayer("Turn of X");
		}
	};

	const saveClicks = index => {
		let arrayAux = [];
		for (let index = 0; index < clicks.length; index++) {
			arrayAux[index] = clicks[index];
		}
		arrayAux[index] = checkTurn;
		setClicks(arrayAux);
		for (let j = 0; j < winnerLines.length; j++) {
			const [a, b, c] = winnerLines[j];
			if (
				arrayAux[a] != null &&
				arrayAux[a] == arrayAux[b] &&
				arrayAux[a] == arrayAux[c]
			) {
				alert(checkTurn);
			}
		}
	};
	const numbers = [];

	for (let i = 0; i < 9; i++) {
		numbers.push(
			<Square
				key={i.toString()}
				id={i}
				checkTurn={checkTurn}
				tickFunction={tickFunction}
				fillArray={() => saveClicks(i, checkTurn)}
			/>
		);
	}

	return (
		<Fragment>
			<div className="container">
				<div>
					<h1>🔴 🟠 🟡 Tic Tac Toe 🟢 🔵 🟣</h1>
				</div>
				<div>
					<h2>{player}</h2>
					<button
						className="btn btn-light"
						onClick={() => {
							window.location.reload();
						}}>
						Reset
					</button>
				</div>
				<div className="gridContainer">
					<div className="row">
						{numbers[0]}
						{numbers[3]}
						{numbers[6]}
					</div>
					<div className="row">
						{numbers[1]}
						{numbers[4]}
						{numbers[7]}
					</div>
					<div className="row">
						{numbers[2]}
						{numbers[5]}
						{numbers[8]}
					</div>
				</div>
			</div>
		</Fragment>
	);
};

export default Home;
