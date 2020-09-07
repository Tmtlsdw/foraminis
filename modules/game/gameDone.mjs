import {game} from "../../index.mjs";
import {data, displayStyle, user} from "../constants/constants.mjs";
import {app, form} from "../constants/dom.mjs";
import {display, eventListenersActivation, initializeSign, send} from "../constants/functions.mjs";

export const gameDone = () => {
	eventListenersActivation(false);
	document.getElementById("game").remove();
	const gameOver = document.createElement("div");
	gameOver.setAttribute("id", "gameOver");
	app.append(gameOver);

	gameOver.innerHTML = `<p>You'll do better next time !</p>
							<p>Your stats</p>
							<hr>
							<p>Erased : ${data.erased}</p>
							<p>Wave : ${data.wave}</p>
							<button id="retry">Retry</button>`;
	if (!user.signedIn) {
		gameOver.innerHTML += `<p>Wanna save your score ?</p>
								<a href="#" id="save">Save it here</a>`;
		const save = document.getElementById("save");
		save.onclick = () => {
			display(form, displayStyle.flex);
			display(gameOver, displayStyle.none);
			initializeSign("up");
		};
	}
	if (user.signedIn) {
		if (data.erased > user.erased) {
			send("lost", {erased: data.erased, wave: data.wave, id: user.id}, "post");
		}
	}
	document.getElementById("retry").onclick = () => game(true);
};