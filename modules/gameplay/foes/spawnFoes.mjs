import {setFoes} from "../../constants/functions.mjs";
import {spawn} from "../../constants/constants.mjs";

export const spawnFoes = () => {
	let foes = document.querySelectorAll("[player='false'][foe='false']");
	let tiles = [];
	let i = 0;
	while (i < spawn) {
		let foe = Math.floor(Math.random() * (foes.length));
		if (!tiles.includes(foes[foe])) {
			tiles.push(foes[foe]);
			++i;
		}
	}
	setFoes(tiles);
};