import React from "react";
import { useState } from "react";
import "./Keypad.css";
export const Keypad = () => {
	const [result, setResult] = useState("");
	const calculate = () => {
		setResult(eval(result));
	};

	const renderKeys = () => {
		const array = [];
		for (var i = 0; i < 10; i++) {
			array.push(
				<button name={String(i)} onClick={buttonPressed}>
					{i}
				</button>
			);
		}

		const operations = ["+", "-", "*", "/", "=", "Clear All"];
		array.push(
			operations.map((i) => (
				<button name={String(i)} onClick={buttonPressed}>
					{i}
				</button>
			))
		);
		return array;
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
    <div className='display'>
      <div>
        <p>Calculator</p>
        {result}
      </div>
      <div className='buttons'>{renderKeys()}</div>
    </div>
  );
};
