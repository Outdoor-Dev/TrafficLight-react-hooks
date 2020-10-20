import React, { useState, useEffect } from "react";

export const TrafficLight = () => {
	const [color, setColor] = useState("green");
	useEffect(
		() => {
			setTimeout(() => {
				if (color == "green") {
					setColor("yellow");
				} else if (color == "yellow") {
					setColor("red");
				} else if (color == "red") {
					setColor("green");
				}
			}, 2000);
		},
		[color]
	);

	return (
		<>
			<div className="rectangle">
				<div
					className={
						color == "red" ? "red-circle selected" : "red-circle"
					}>
					<i className="icon-hand far fa-hand-paper" />
				</div>
				<div
					className={
						color == "yellow"
							? "yellow-circle selected"
							: "yellow-circle"
					}>
					<img
						className="turtle"
						src="https://img.icons8.com/ios-filled/50/000000/turtle.png"
					/>
				</div>

				<div
					className={
						color == "green"
							? "green-circle selected"
							: "green-circle"
					}>
					<i className="icon-walking fas fa-walking" />
				</div>
			</div>
		</>
	);
};
