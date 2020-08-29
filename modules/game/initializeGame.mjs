import {initializeBoard} from "./board/initializeBoard.mjs";
import {initializeHUD} from "./hud/initializeHUD.mjs";
import {app, evenColor, foesColor, oddColor, playerColor} from "../constants/dom.mjs";
import {movement} from "../gameplay/player/movement.mjs";
import {initializeHUDData} from "./hud/initializeHUDData.mjs";
import {tilesColor} from "../constants/functions.mjs";

export const initializeGame = () => {
	const board = initializeBoard();
	const hud1 = initializeHUD(true);
	const hud2 = initializeHUD(false);

	const game = document.createElement("div");
	game.setAttribute("id", "game");
	game.append(hud1);
	game.append(board);
	game.append(hud2);
	app.append(game);
	tilesColor(evenColor.value, true);
	tilesColor(oddColor.value, false);
	initializeHUDData();
	window.addEventListener("keyup", movement);
};