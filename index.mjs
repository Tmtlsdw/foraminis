import * as dom from "./modules/constants/dom.mjs";
import * as constants from "./modules/constants/constants.mjs";
import {initializePawns} from "./modules/game/board/initializePawns.mjs";
import {initializeGame} from "./modules/game/initializeGame.mjs";
import {movement} from "./modules/gameplay/player/movement.mjs";
import {pawnsColor, tilesColor} from "./modules/constants/functions.mjs";

const indexComponents = [
	dom.description,
	dom.ladder
];


export const start = (isStart) => {
	let game = document.getElementById("game");
	let gameOver = document.getElementById("gameOver");
	if (!!game) game.remove();
	if (!!gameOver) gameOver.remove();
	if (isStart) {
		indexComponents.forEach(x => x.style.display = constants.display.none);
		dom.colorDivs.forEach(x => x.style.display = constants.display.block);
		initializeGame();
		initializePawns();
	} else {
		indexComponents.forEach(x => x.style.display = constants.display.flex);
		dom.colorDivs.forEach(x => x.style.display = constants.display.none);
		window.removeEventListener("keyup", movement);
	}
};

dom.play.onclick = () => start(true);
dom.logo.onclick = () => start(false);
dom.evenColor.onchange = () => tilesColor(dom.evenColor.value, true);
dom.oddColor.onchange = () => tilesColor(dom.oddColor.value, false);
dom.foesColor.onchange = () => pawnsColor(dom.foesColor.value, "foe");
dom.playerColor.onchange = () => pawnsColor(dom.playerColor.value, "player");
