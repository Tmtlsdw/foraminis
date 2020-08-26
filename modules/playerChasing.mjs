import {setFoe, unsetFoe} from "./constants.mjs";
import {playerEncountered} from "./playerEncountered.mjs";


export const chase = (entity, xTarget, yTarget, way) => {
	switch (way) {
		case "ne":
			xTarget++;
			yTarget++;
			break;
		case "se":
			xTarget--;
			yTarget++;
			break;
		case "sw":
			xTarget--;
			yTarget--;
			break;
		case "nw":
			xTarget++;
			yTarget--;
			break;
		case "n":
			xTarget++;
			break;
		case "e":
			yTarget++;
			break;
		case "s":
			xTarget--;
			break;
		case "w":
			yTarget--;
			break;
	}
	if (setFoe(document.querySelector(`[x='${xTarget}'][y='${yTarget}']`))) unsetFoe(entity);
};

export const playerChasing = (reverse) => {
	let foes = document.querySelectorAll("[foe='true']");
	if (reverse) Array.prototype.reverse.bind(foes);
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
