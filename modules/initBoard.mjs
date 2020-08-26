import {thickness} from "./constants.mjs";

export const initBoard = () => {
	const gameBoard = document.getElementById("gameBoard");

	const board = document.createElement("div");
	board.setAttribute("id", "board");

	let counter = 0;

	for (let i = 0; i < thickness; i++) {

		let row = document.createElement("div");
		row.classList.add("row");

		for (let j = 0; j < thickness; j++) {

			let tile = document.createElement("div");
			tile.classList.add("tiles");
			tile.setAttribute("x", i);
			tile.setAttribute("y", j);
			tile.setAttribute("player", false);
			tile.setAttribute("foe", false);
			(counter % 2 === 0) ?
				tile.classList.add("even") :
				tile.classList.add("odd");
			row.append(tile);
			counter++;
		}
		board.append(row);
	}
	gameBoard.append(board);
};