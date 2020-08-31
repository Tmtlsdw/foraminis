import {setPawn} from "../../game/board/miscellaneousPawns.mjs";

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
	if ((document.querySelector(`[x='${xTarget}'][y='${yTarget}'][foe='false']`))) {
		setPawn(document.querySelector(`[x='${xTarget}'][y='${yTarget}']`), true, "foe");
		setPawn(entity, false, "foe");
	}
};