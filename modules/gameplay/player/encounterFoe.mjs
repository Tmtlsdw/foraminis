import {data, thickness} from "../../constants/constants.mjs";
import {chase} from "../foes/chase.mjs";
import {setPawn} from "../../game/board/miscellaneousPawns.mjs";


export const encounterFoe = () => {
	const player = document.querySelector("[player='true']");
	if (player.getAttribute("foe") === "true") {
		setPawn(player, false, "foe");
		data.alive -= 1;
		data.erased += 1;
		document.getElementById("alive").innerText = `Alive : ${data.alive}`;
		document.getElementById("erased").innerText = `Erased : ${data.erased}`;
		const x = Number(player.getAttribute("x"));
		const y = Number(player.getAttribute("y"));
		let conditionsPositions = [
			(x !== 0),
			(x !== thickness - 1),
			(y !== 0),
			(y !== thickness - 1),
			(x !== 0 && y !== 0),
			(x !== 0 && y !== thickness - 1),
			(x !== thickness - 1 && y !== 0),
			(x !== thickness - 1 && y !== thickness - 1)
		];
		let foesPositions = [
			{
				x: x - 1,
				y: y,
				way: "s"
			},
			{
				x: x + 1,
				y: y,
				way: "n"
			},
			{
				x: x,
				y: y - 1,
				way: "w"
			},
			{
				x: x,
				y: y + 1,
				way: "e"
			},
			{
				x: x - 1,
				y: y - 1,
				way: "sw"
			},
			{
				x: x - 1,
				y: y + 1,
				way: "se"
			},
			{
				x: x + 1,
				y: y - 1,
				way: "nw"
			},
			{
				x: x + 1,
				y: y + 1,
				way: "ne"
			}
		];
		for (let i = 0; i < foesPositions.length; i++) {
			let isFoe = document.querySelector(`[x="${foesPositions[i].x}"][y="${foesPositions[i].y}"][foe="true"]`);
			if (conditionsPositions[i] && !!isFoe) {
				chase(isFoe, foesPositions[i].x, foesPositions[i].y, foesPositions[i].way);
			}

		}
	}
};