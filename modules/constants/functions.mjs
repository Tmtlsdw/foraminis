
export const setPawn = (tile, isHere, kind) => {
	tile.setAttribute(kind, String(isHere));
	isHere ?
		drawPawn(tile, kind):
		erasePawn(tile, kind);

};
export const setFoes = (tiles) => {
	tiles.forEach(tile => {
		setPawn(tile, true, "foe");
	});
};
export const drawPawn = (tile, kind) => {
	const pawn = document.createElement("div");
	pawn.setAttribute("class", kind);
	tile.append(pawn);
};
export const erasePawn = (tile, kind) => {
	let x = String(tile.getAttribute("x"));
	let y = String(tile.getAttribute("y"));
	document.querySelector(`[x='${x}'][y='${y}']>.${kind}`).remove();
};
export const ladderRegistration = (e) => {
	if (e.key === "Enter") {
		console.log("OH YEAH");
	}
	;

};
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
export const tilesColor = (value, isEven) => {
	let q = isEven ? ".even" : ".odd";
	document.querySelectorAll(q).forEach(tile => tile.style.backgroundColor = value);
};
export const pawnsColor = (value, kind) => {
		document.querySelectorAll(`.${kind}`).forEach(pawn => pawn.style.backgroundColor = value);
};
