export const initializeHUD = (isFirstHalf) => {
	const content = isFirstHalf ?
		"<p id='moves'></p><p id='alive'></p>" :
		"<p id='erased'></p><p id='wave'></p>";

	const hud = document.createElement("div");
	hud.setAttribute("class", "hud");
	hud.innerHTML = content;

	return hud;
};