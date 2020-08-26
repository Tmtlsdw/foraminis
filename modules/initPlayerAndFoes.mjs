import {thickness, setPlayer} from "./constants.mjs";
import {spawnFoe} from "./spawnFoe.mjs"
const starterTile = () => {
	const tile = Math.floor(Math.random() * (thickness * thickness));
	const tiles = document.querySelectorAll(".tiles")
	setPlayer(tiles[tile])
};

export const initPlayerAndFoes = () => {
	starterTile();
	spawnFoe();
};