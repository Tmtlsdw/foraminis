import {initBoard} from "./modules/initBoard.mjs";
import {initPlayerAndFoes} from "./modules/initPlayerAndFoes.mjs";
import {movement} from "./modules/movement.mjs";
import {initDataDisplay} from "./modules/initDataDisplay.mjs";
import {tilesColor} from "./modules/tilesColor.mjs";
import {gameOver, retry, game, wave, currentData, move, alive, erased} from "./modules/constants.mjs";

let evenColor = document.getElementById("even");
let oddColor = document.getElementById("odd");

const start = () => {
	initBoard();
	initPlayerAndFoes();
	tilesColor(evenColor.value, true)
	tilesColor(oddColor.value, false)
};

const playAgain = () => {
	currentData.move = move;
	currentData.alive = alive;
	currentData.wave = wave;
	currentData.erased = erased;
	game.style.display = "flex";
	gameOver.style.display = "none";
	document.getElementById("gameBoard").innerHTML = "";
	start();

	initDataDisplay();
	window.addEventListener("keyup", movement);
};

window.onload = start;
evenColor.addEventListener("change", () => { tilesColor(evenColor.value, true);});
oddColor.addEventListener("change", () => { tilesColor(oddColor.value, false);});
window.addEventListener("keyup", initDataDisplay, {once: true});
retry.addEventListener("click", playAgain);
window.addEventListener("keyup", movement);
