import {spawnFoe} from "../spawnFoe.mjs"
import {setPlayer} from "../constants/functions.mjs";
import {thickness} from "../constants/constants.mjs";
const starterTile = () => {
	const tile = Math.floor(Math.random() * (thickness * thickness));
	const tiles = document.querySelectorAll(".tiles")
	setPlayer(tiles[tile])
};

export const initializePawns = () => {
	starterTile();
	spawnFoe();
};