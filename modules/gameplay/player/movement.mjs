import {dataChange} from "../../game/hud/dataChange.mjs";
import {encounterFoe} from "./encounterFoe.mjs";
import {playerChasing} from "../foes/playerChasing.mjs";
import {gameDone} from "../../game/gameDone.mjs";
import {thickness} from "../../constants/constants.mjs";
import {setPawn} from "../../game/board/miscellaneousPawns.mjs";
export const movement = (e) => {
	const player = document.querySelector("[player='true']");
	if (player === null) {
		window.removeEventListener("keyup", movement);
		return;
	}
	const x = Number(player.getAttribute("x"));
	const y = Number(player.getAttribute("y"));

	const breadth = e.shiftKey ? 2 : 1;
	const direction = (xTarget, yTarget) => {
		setPawn(player, false, "player");
		setPawn(document.querySelector(`[x='${xTarget}'][y='${yTarget}']`), true, "player");
		encounterFoe();
		if (!playerChasing()) {
			dataChange();
		} else {
			gameDone();
			window.removeEventListener("keyup", movement);
		}

	};

	switch (e.key) {
		case "ArrowDown":
			if (e.shiftKey) {
				if (x <= 1) return;
			}
			if (x === 0) return;
			direction(x - breadth, y);
			break;
		case "ArrowUp":
			if (e.shiftKey) {
				if (x >= thickness - 2) return;
			}
			if (x === thickness - 1) return;
			direction(x + breadth, y);
			break;
		case "ArrowLeft":
			if (e.shiftKey) {
				if (y <= 1) return;
			}
			if (y === 0) return;
			direction(x, y - breadth);
			break;
		case "ArrowRight":
			if (e.shiftKey) {
				if (y >= thickness - 2) return;
			}
			if (y === thickness - 1) return;
			direction(x, y + breadth);
			break;
		default:
			console.log(e.key)
			return;
	}
};
