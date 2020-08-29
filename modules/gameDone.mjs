import {data} from "./constants/constants.mjs";
import {app} from "./constants/dom.mjs";
import {movement} from "./gameplay/player/movement.mjs";
import {start} from "../index.mjs";
import {ladderRegistration} from "./constants/functions.mjs";

export const gameDone = () => {
	document.getElementById("game").remove();
	const gameOver = document.createElement("div");
	gameOver.setAttribute("id", "gameOver");

	gameOver.innerHTML = `<p>You'll do better next time !</p>
							<p>Your stats</p>
							<hr>
							<p>Erased : ${data.erased}</p>
							<p>Wave : ${data.wave}</p>
							<button id="retry">Retry</button>
							<p>Enter a name to save your score in the ladder !</p>
							<input id="nameGameOver" type="text" limit="20" autofocus>`;
	app.append(gameOver);
	document.getElementById("retry").onclick = () => start(true);
	window.removeEventListener("keyup", movement);
	window.addEventListener("keyup", ladderRegistration);
};