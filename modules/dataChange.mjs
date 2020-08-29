import {spawnFoes} from "./gameplay/foes/spawnFoes.mjs";
import {data, move, spawn} from "./constants/constants.mjs";
import {pawnsColor} from "./constants/functions.mjs";
import {foesColor, playerColor} from "./constants/dom.mjs";

export const dataChange = () => {
	if (data.move === 1 || data.alive === 0) {
		data.wave += 1;
		data.move = move;
		spawnFoes();
		data.alive += spawn;
		document.getElementById("alive").innerText = `Alive : ${data.alive}`;
		document.getElementById("wave").innerText = `Wave : ${data.wave}`;
	} else {
		data.move -= 1;
	}
	pawnsColor(playerColor.value, "player")
	pawnsColor(foesColor.value, "foe")
	let text = data.move !== 1 ? `Moves : ${data.move}` : `Move : ${data.move}`;
	document.getElementById("moves").innerText = text;
};