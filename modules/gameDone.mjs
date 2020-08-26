import {currentData, synonyms} from "./constants.mjs";

const max = synonyms.length;
export const gameDone = () => {
	const synonym = document.getElementById("synonym");
	const erasedGO = document.getElementById("erasedGO");
	const waveGO = document.getElementById("waveGO");
	synonym.innerText = synonyms[(Math.floor(Math.random() * max))];
	erasedGO.innerText = String(currentData.erased);
	waveGO.innerText = String(currentData.wave);
	document.getElementById("game").style.display = "none";
	document.getElementById("gameOver").style.display = "flex";
};