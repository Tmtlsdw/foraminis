import {data} from "../constants/constants.mjs";
import {app} from "../constants/dom.mjs";
import {movement} from "../gameplay/player/movement.mjs";
import {start} from "../../index.mjs";
import {ladderRegistration} from "../constants/functions.mjs";

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
							<input id="nameGameOver" type="text" autofocus required>
							<label for="nameGameOver">Name</label>`;
	app.append(gameOver);
	const nameGameOver = document.getElementById("nameGameOver");
	document.getElementById("retry").onclick = () => start(true);
	window.removeEventListener("keyup", movement);

	const displayInputs = () => {
		const inputPassword = document.createElement("input");
		const labelPassword = document.createElement("label");
		const inputEmail = document.createElement("input");
		const labelEmail = document.createElement("label");
		const inputButton = document.createElement("button");

		inputPassword.setAttribute("type", "password");
		inputPassword.setAttribute("limit", "64");
		inputPassword.setAttribute("id", "passwordGameOver");
		inputPassword.setAttribute("required", "");
		inputEmail.setAttribute("type", "email");
		inputEmail.setAttribute("id", "emailGameOver");
		inputButton.setAttribute("id", "buttonGameOver");
		inputButton.setAttribute("required", "");
		inputButton.innerText = "Register";
		labelPassword.setAttribute("for", "passwordGameOver");
		labelPassword.innerText = "Password";
		labelEmail.setAttribute("for", "emailGameOver");
		labelEmail.innerText = "Email";

		gameOver.append(inputEmail);
		gameOver.append(labelEmail);
		gameOver.append(inputPassword);
		gameOver.append(labelPassword);
		gameOver.append(inputButton);
		document.getElementById("buttonGameOver").onclick = () => ladderRegistration();
	};

	nameGameOver.addEventListener("change", displayInputs, {once: true});
};