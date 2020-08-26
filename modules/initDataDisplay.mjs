import {aliveDiv, currentData, erasedDiv, movesDiv, waveDiv} from "./constants.mjs";

export const initDataDisplay = () => {
	movesDiv.innerText = "Moves left : " + currentData.move;
	aliveDiv.innerText = "Alive : " + currentData.alive;
	waveDiv.innerText = "Wave : " + currentData.wave;
	erasedDiv.innerText = "Erased : " + currentData.erased;
};