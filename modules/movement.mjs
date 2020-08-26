import {setPlayer, thickness, unsetPlayer} from "./constants.mjs";
import {dataChange} from "./dataChange.mjs";
import {encounterFoe} from "./encounterFoe.mjs";
import {playerChasing} from "./playerChasing.mjs";
import {gameDone} from "./gameDone.mjs";

export const movement = (e) => {
	const player = document.querySelector("[player='true']");
	const x = Number(player.getAttribute("x"));
	const y = Number(player.getAttribute("y"));
	const breadth = e.shiftKey ? 2 : 1;
	const direction = (e, xTarget, yTarget, reverse = false) => {
		unsetPlayer(player);
		setPlayer(document.querySelector(`[x='${xTarget}'][y='${yTarget}']`));
		encounterFoe();
		if (!playerChasing(reverse)) {
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
			direction(e, x - breadth, y);
			break;
		case "ArrowUp":
			if (e.shiftKey) {
				if (x >= thickness - 2) return;
			}
			if (x === thickness - 1) return;
			direction(e, x + breadth, y, true);
			break;
		case "ArrowLeft":
			if (e.shiftKey) {
				if (y <= 1) return;
			}
			if (y === 0) return;
			direction(e, x, y - breadth);
			break;
		case "ArrowRight":
			if (e.shiftKey) {
				if (y >= thickness - 2) return;
			}
			if (y === thickness - 1) return;
			direction(e, x, y + breadth, true);
			break;
		default:
			return;
	}
};