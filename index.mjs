import * as dom from "./modules/constants/dom.mjs";
import * as constants from "./modules/constants/constants.mjs";
import {initializePawns} from "./modules/game/board/initializePawns.mjs";
import {initializeGame} from "./modules/game/initializeGame.mjs";
import {movement} from "./modules/gameplay/player/movement.mjs";
import {pawnsColor, tilesColor} from "./modules/game/hud/functionColor.mjs";
import {display, fetchLadder, initializeSign} from "./modules/constants/functions.mjs";

const indexComponents = [
	dom.description,
	dom.ladder
];
const signComponents = [
	dom.register,
	dom.signIn
];
const {flex, none, block} = constants.displayStyle;


export const game = (toStart) => {
	display(dom.form, none);
	let game = document.getElementById("game");
	let gameOver = document.getElementById("gameOver");
	if (!!game) game.remove();
	if (!!gameOver) gameOver.remove();
	if (toStart) {
		display(indexComponents, none);
		display(dom.colorDivs, block);
		initializeGame();
		initializePawns();
		return;
	}
	indexComponents.forEach(x => x.style.display = flex);
	dom.colorDivs.forEach(x => x.style.display = none);
	window.removeEventListener("keyup", movement);
	fetchLadder();
};
const showForm = (how) => {
	let game = document.getElementById("game");
	if (!!game) game.remove();
	display(indexComponents, none);
	display(dom.form, flex);
	initializeSign(how);
};
dom.play.onclick = () => game(true);
dom.logo.onclick = () => game(false);
dom.evenColor.onchange = () => tilesColor(dom.evenColor.value, true);
dom.oddColor.onchange = () => tilesColor(dom.oddColor.value, false);
dom.foesColor.onchange = () => pawnsColor(dom.foesColor.value, "foe");
dom.playerColor.onchange = () => pawnsColor(dom.playerColor.value, "player");
dom.register.onclick = () => showForm("up");
dom.signIn.onclick = () => showForm("in");
dom.signButton.onclick = () => display(dom.form, none);
window.onload = fetchLadder;

window.onclick = () => console.log(constants.user)