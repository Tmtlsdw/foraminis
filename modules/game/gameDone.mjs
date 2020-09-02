import {data, displayStyle} from "../constants/constants.mjs";
import {app, form} from "../constants/dom.mjs";
import {movement} from "../gameplay/player/movement.mjs";
import {game} from "../../index.mjs";
import {display, initializeSign} from "../constants/functions.mjs";

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
							<p>Wanna save your score ?</p>
							<a href="#" id="save">Save it here</a>`;
	app.append(gameOver);
	const save = document.getElementById("save");
	document.getElementById("retry").onclick = () => game(true);
	window.removeEventListener("keyup", movement);
	save.onclick = () => {
		display(form, displayStyle.flex);
		display(gameOver, displayStyle.none)
		initializeSign("up");
	};
};