import {
	register,
	signButton,
	signEmail,
	signIn,
	signName,
	signOut,
	signPassword,
	tbody,
	userNameDisplay
} from "./dom.mjs";
import {alive, data, displayStyle, erased, move, user, wave} from "./constants.mjs";
import {game} from "../../index.mjs";

export const logout = () => {
	user.signedIn = false;
	user.name = "";
	user.id = "";
	user.erased = "";
	user.wave = "";
	game(false);
	display([signOut, userNameDisplay], displayStyle.none);
	display([signIn, register], displayStyle.flex);

};
export const display = (what, how) => {
	if (!Array.isArray(what) && !NodeList.prototype.isPrototypeOf(what)) {
		what.style.display = how;
		return;
	}
	what.forEach(x => x.style.display = how);
};
export const fetchLadder = () => {
	fetch("https://infinite-thicket-69660.herokuapp.com/")
		.then(response => response.json())
		.then(initializeLadder);
};
export const send = (route, data , method) => {
	fetch(`https://infinite-thicket-69660.herokuapp.com/${route}`, {
		method: method,
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(data)
	}).then(response => response.json())
		.then(data => {
			if (Object.prototype.isPrototypeOf(data)) {
				const {wave, erased, name, id} = data;
				if (route !== "lost") {
					user.name = name;
					user.id = id;
					user.signedIn = true;
				}
				user.erased = erased;
				user.wave = wave;

				switch (route) {
					case "register":
					case "login":
						game(false);
						display([signIn, register], displayStyle.none);
						userNameDisplay.innerText = name;
						display([signOut, userNameDisplay], displayStyle.flex);
						break;
					default:
						return;
				}
				return;
			}
			alert(data);
		});
};

const registration = () => {
	if (!signEmail.value.includes("@")) {
		alert("This was not an email.");
		return;
	}
	if (signName.value.length < 1 || signPassword.value.length < 1 || signEmail.value.length < 8) {
		alert("Use slightly longer credentials.");
		return;
	}
	if (signName.value.length > 40 || signPassword.value.length > 64 || signEmail.value.length > 40) {
		alert("Shorten your credentials.");
		return;
	}
	let userToRegister = {
		name: String(signName.value),
		password: String(signPassword.value),
		email: String(signEmail.value),
		erased: data.erased,
		wave: data.wave
	};
	send("register", userToRegister, "post");
};
const login = () => {
	if (!signEmail.value.includes("@")) {
		alert("This was not an email.");
		return;
	}
	if (signPassword.value.length === 0) {
		alert("No password entered.");
		return;
	}
	if (signPassword.value.length > 64 || signEmail.value.length > 40) {
		alert("The lengths of your credentials are longer than required.");
		return;
	}
	let userToLog = {
		password: String(signPassword.value),
		email: String(signEmail.value)
	};
	send("login", userToLog, "post");
};

const initializeLadder = (ladder) => {
	if (ladder.length < 1) return;
	tbody.innerHTML = "";
	const rank = (i) => {
		switch (i) {
			case 0:
				return "1st";
			case 1:
				return "2nd";
			case 2:
				return "3rd";
			default:
				return `${i + 1}th`;
		}
	};
	for (let i = 0; i < ladder.length; i++) {

		const tr = document.createElement("tr");
		const rankTD = document.createElement("td");
		const nameTD = document.createElement("td");
		const erasedTD = document.createElement("td");
		const waveTD = document.createElement("td");

		rankTD.innerText = rank(i);
		nameTD.innerText = ladder[i].name;
		erasedTD.innerText = ladder[i].erased;
		waveTD.innerText = ladder[i].wave;

		tr.append(rankTD);
		tr.append(nameTD);
		tr.append(erasedTD);
		tr.append(waveTD);
		tbody.append(tr);
	}
};

export const initializeSign = (how) => {
	let nameLabelInput = document.querySelectorAll(".name");
	let gameOver = document.getElementById("gameOver");
	if (gameOver !== null) gameOver.remove();
	let functionToCall = undefined;
	if (how === "in") {
		display(nameLabelInput, displayStyle.none);
		signEmail.setAttribute("autofocus", "");
		signButton.innerText = signIn.innerText;
		functionToCall = () => login();
	}
	if (how === "up") {
		display(nameLabelInput, displayStyle.block);
		signName.setAttribute("autofocus", "");
		signButton.innerText = register.innerText;
		functionToCall = () => registration();
	}
	signPassword.addEventListener("keyup", (e) => {
		if (e.key !== "Enter") return;
		functionToCall();
	});
	signButton.onclick = functionToCall;
};

export const initializeData = () => {
	Object.assign(data, {move, erased, wave, alive});
};