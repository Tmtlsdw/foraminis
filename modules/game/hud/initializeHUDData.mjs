import {data} from "../../constants/constants.mjs";
export const initializeHUDDisplay = () => {
	let movesText = data.move !== 1 ? `Moves : ${data.move}`: `Move : ${data.move}`;
	document.getElementById("moves").innerText = movesText;
	document.getElementById("alive").innerText = `Alive : ${data.alive}`;
	document.getElementById("wave").innerText = `Wave : ${data.wave}`;
	document.getElementById("erased").innerText = `Erased : ${data.erased}`;
};