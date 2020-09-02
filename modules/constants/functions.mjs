import {register, signButton, signEmail, signIn, signName, signPassword, tbody} from "./dom.mjs";
import {data, displayStyle, user} from "./constants.mjs";
import {game} from "../../index.mjs";

export const post = (route, data) => {
	fetch(`http://localhost:3000/${route}`, {
		method: "post",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(data)
	}).then(response => response.json());
};
export const display = (what, how) => {
	if (!Array.isArray(what) && !NodeList.prototype.isPrototypeOf(what)) {
		what.style.display = how;
		return;
	}
	what.forEach(x => x.style.display = how);
};
export const registration = () => {
	let userToRegister = {
		name: signName.value,
		password: signPassword.value,
		email: signEmail.value,
		erased: data.erased,
		wave: data.wave
	};
	post("register", userToRegister)
		.then(data => {
			if (data) {
				const {wave, erased, name, id} = data;
				user.name = name;
				user.erased = erased;
				user.wave = wave;
				user.id = id;
				game(false);
			}
		});
};
export const login = () => {
	let userToLog = {
		password: signPassword.value,
		email: signEmail.value
	};
	fetch("http://localhost:3000/login", {
		method: "post",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(userToLog)
	})
		.then(response => response.json())
		.then(data => {
			if (data) {
				const {wave, erased, name, id} = data;
				user.name = name;
				user.erased = erased;
				user.wave = wave;
				user.id = id;
				game(false);
			}
		});
};
export const fetchLadder = () => {
	fetch("http://localhost:3000/")
		.then(response => response.json())
		.then(initializeLadder);
};
export const initializeLadder = (ladder) => {
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
	let functionToCall;
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