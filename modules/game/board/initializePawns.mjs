import {spawnFoes} from "../../gameplay/foes/spawnFoes.mjs"
import {pawnsColor, setPawn} from "../../constants/functions.mjs";
import {thickness} from "../../constants/constants.mjs";
import {foesColor, playerColor} from "../../constants/dom.mjs";
export const initializePawns = () => {
	setPawn(document.querySelectorAll(".tiles")[Math.floor(Math.random() * (thickness * thickness))], true, "player")
	spawnFoes();
	pawnsColor(foesColor.value, "foe");
	pawnsColor(playerColor.value, "player");
};