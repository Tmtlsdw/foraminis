import {logo, tbody} from "./dom.mjs";
import {data, user} from "./constants.mjs";
import {start} from "../../index.mjs";

export const ladderRegistration = () => {
	user.name = document.getElementById("nameGameOver").value;
	user.password = document.getElementById("passwordGameOver").value;
	user.email = document.getElementById("emailGameOver").value;
	user.erased = data.erased;
	user.wave = data.wave;
	console.log(JSON.stringify(user));
	fetch("http://localhost:3000/register", {
		method: "post",
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(user)
	})
		.then(response => response.json())
		.then(data => {
			if (data) {
				const {wave, erased, email, name, id} = data;
				console.log("alright");
				user.name = name;
				user.email = email;
				user.erased = erased;
				user.wave = wave,
					user.id = id;
				start(false);
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
	tbody.innerHTML= "";
	console.log(ladder)

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