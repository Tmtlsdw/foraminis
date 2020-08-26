import {setFoe, currentData, move} from "./constants.mjs";

export const spawnFoe = () => {
	const tiles = document.querySelectorAll("[player='false'][foe='false']");
	let i = 0;
	while (i < move / 2) {
		let tile = Math.floor(Math.random() * (tiles.length));
		if (tiles[tile].getAttribute("foe") === "false") {
			setFoe(tiles[tile]);
			currentData.alive += 1;
			++i;
		}
	}
};