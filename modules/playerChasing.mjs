import {playerEncountered} from "./playerEncountered.mjs";
import {chase} from "./constants/functions.mjs";
export const playerChasing = () => {
	let foes = document.querySelectorAll("[foe='true']");
	let player = document.querySelector("[player='true']");
	let xp = Number(player.getAttribute("x"));
	let yp = Number(player.getAttribute("y"));

	foes.forEach(foe => {
		let xf = Number(foe.getAttribute("x"));
		let yf = Number(foe.getAttribute("y"));
		let way;
		if (xf - yf === xp - yp) {
			if (xf > xp) {
				way = "sw";
			} else {
				way = "ne";
			}
		} else if (xf + yf === xp + yp) {
			if (xf > xp) {
				way = "se";
			} else {
				way = "nw";
			}
		} else {
			if (xf === xp) {
				if (yf > yp) {
					way = "w";
				} else {
					way = "e";
				}
			} else if (yf === yp) {
				if (xf > xp) {
					way = "s";
				} else {
					way = "n";
				}
			} else {
				if (Math.abs(xf - xp) < Math.abs(yf - yp)) {
					if (yf > yp) {
						way = "w";
					} else {
						way = "e";
					}
				} else {
					if (xf > xp) {
						way = "s";
					} else {
						way = "n";
					}
				}
			}
		}
		chase(foe, xf, yf, way);
	});
	return !!playerEncountered();
};
