import React from "react";
import { useState } from "react";

export const Keypad = () => {
	const [result, setResult] = useState("");
	const calculate = () => {
		setResult(eval(result));
  };

	const buttonPressed = (button) => {
		if (button.target.name === "=") {
			calculate();
		} else if (button.target.name === "Clear All") {
			setResult("");
		} else {
			setResult(result + button.target.name);
		}
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
        <button name='Clear All' onClick={buttonPressed}>
					Clear All
				</button>
			</div>
		</>
	);
};
