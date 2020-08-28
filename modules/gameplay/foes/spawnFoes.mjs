import {setFoes} from "./constants/functions.mjs";
import {move} from "./constants/constants.mjs";

export const spawnFoe = () => {
	let foes = document.querySelectorAll("[player='false'][foe='false']");
	let tiles = [];
	let i = 0;
	while (i < move / 2) {
		let foe = Math.floor(Math.random() * (foes.length));
			tiles.push(foes[foe]);
			foes.splice(foe, 1);
			++i;
	}
	setFoes(tiles);
	return tiles.length;
};