import {spawnFoes} from "../../gameplay/foes/spawnFoes.mjs"
import {thickness} from "../../constants/constants.mjs";
import {foesColor, playerColor} from "../../constants/dom.mjs";
import {pawnsColor} from "../hud/functionColor.mjs";
import {setPawn} from "./miscellaneousPawns.mjs";
export const initializePawns = () => {
	setPawn(document.querySelectorAll(".tiles")[Math.floor(Math.random() * (thickness * thickness))], true, "player")
	spawnFoes();
	pawnsColor(foesColor.value, "foe");
	pawnsColor(playerColor.value, "player");
};