import React from "react";
import { useState } from "react";

export const Keypad = () => {
	const [result, setResult] = useState("press a button");
	const buttonPressed = (b) => {
		setResult(b.target.name);
	};
	return (
		<>
			<h2>Calculator</h2>

			<div>
				<h3>{result}</h3>

				<button name='1' onClick={buttonPressed}>
					1
				</button>
				<button name='2' onClick={buttonPressed}>
					2
				</button>
				<button name='3' onClick={buttonPressed}>
					3
				</button>
				<button name='4' onClick={buttonPressed}>
					4
				</button>
				<button name='5' onClick={buttonPressed}>
					5
				</button>
				<button name='6' onClick={buttonPressed}>
					6
				</button>
				<button name='7' onClick={buttonPressed}>
					7
				</button>
				<button name='8' onClick={buttonPressed}>
					8
				</button>
				<button name='9' onClick={buttonPressed}>
					9
				</button>
				<button name='0' onClick={buttonPressed}>
					0
				</button>
				<button name='+' onClick={buttonPressed}>
					+
				</button>
				<button name='=' onClick={buttonPressed}>
					=
				</button>
			</div>
		</>
	);
};
