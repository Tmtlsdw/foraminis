import {movesDiv, aliveDiv, currentData, waveDiv, move} from "./constants.mjs";
import {spawnFoe} from "./spawnFoe.mjs";
export const dataChange = () => {
	if (currentData.move === 1 || currentData.alive === 0) {
		currentData.wave += 1;
		currentData.move = move;
		spawnFoe();
		aliveDiv.innerText = `Alive : ${currentData.alive}`;
		waveDiv.innerText = `Wave : ${currentData.wave}`;
	} else {
		currentData.move -= 1;
	}
	currentData.move <= 1 ?
		movesDiv.innerText = `Move left : ${currentData.move}` :
		movesDiv.innerText = `Moves lefts : ${currentData.move}`;
};