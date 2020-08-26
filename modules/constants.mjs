export const movesDiv = document.getElementById("moves");
export const aliveDiv = document.getElementById("alive");
export const waveDiv = document.getElementById("wave");
export const erasedDiv = document.getElementById("erased");
export const retry = document.getElementById("retry");
export const game = document.getElementById("game");
export const gameOver = document.getElementById("gameOver");
export const move = 20;
export const alive = 0;
export const wave = 1;
export const erased = 0;
export const currentData = {
	move: move,
	alive: alive,
	wave: wave,
	erased: erased
};
export const thickness = 15;
export const setPlayer = (tile) => tile.setAttribute("player", true);
export const unsetPlayer = (tile) => tile.setAttribute("player", false);
export const setFoe = (tile) => {
	if (tile.getAttribute("foe") === "true") return false;
	tile.setAttribute("foe", true);
	return true;
};
export const unsetFoe = (tile) => tile.setAttribute("foe", false);
export const synonyms = [
	"shabbily",
	"miserably",
	"poorly",
	"piteously",
	"painfully",
	"pitifully",
	"clumsily"
];