import {thickness} from "../../constants/constants.mjs";

export const initializeBoard = () => {
	const board = document.createElement("div");
	board.setAttribute("id", "board");

	let counter = 0;

	for (let i = 0; i < thickness; i++) {
		let row = document.createElement("div");
		row.setAttribute("class", "row");

		for (let j = 0; j < thickness; j++) {
			let isEvenOrOdd = (counter % 2 === 0) ? "even" : "odd";
			let tile = document.createElement("div");
			tile.setAttribute("class", `tiles ${isEvenOrOdd}`);
			tile.setAttribute("x", String(i))
			tile.setAttribute("y", String(j))
			tile.setAttribute("player", "false")
			tile.setAttribute("foe", "false");
			row.append(tile);
			counter++;
		}
		board.append(row);
	}
	return board;
};