import {data, erased, move, spawn, wave} from "../../constants/constants.mjs";

export const initializeHUDData = () => {
	data.move = move;
	data.erased = erased;
	data.wave = wave;
	data.alive = spawn;
	document.getElementById("moves").innerText = `Moves : ${data.move}`;
	document.getElementById("alive").innerText = `Alive : ${data.alive}`;
	document.getElementById("wave").innerText = `Wave : ${data.wave}`;
	document.getElementById("erased").innerText = `Erased : ${data.erased}`;
};