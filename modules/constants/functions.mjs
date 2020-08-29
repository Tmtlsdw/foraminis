export const setPawn = (tile, isHere = true, kind = "foe") => {
	tile.setAttribute(kind, String(isHere));
	if (!isHere) return;
	drawPawn(tile, kind);

};
export const setFoes = (tiles, isHere = true) => {
	tiles.forEach(tile => {
		setPawn(tile, isHere);
	});
};
export const drawPawn = (tile, kind) => {
	const pawn = document.createElement("div");
	pawn.setAttribute("class", kind);
	tile.append(pawn);
};
export const erasePawn = (isAlone = true, isFoe = true) => {
if (!isFoe) {
	document.querySelector(".player").remove();
	return;
}
if(!isAlone){
	document.querySelectorAll(".foe").forEach( pawn => pawn.remove());
return;
}
document.querySelector("[player='true'][foe='true']>.foe").remove()
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
		setPawn(document.querySelector(`[x='${xTarget}'][y='${yTarget}']`));
		drawPawn(document.querySelector(`[x='${xTarget}'][y='${yTarget}']`), "foe")
		setPawn(entity, false);
		erasePawn();

	}
};
export const tilesColor = (value, isEven) => {
	let q = isEven ? ".even" : ".odd";
	document.querySelectorAll(q).forEach(tile => tile.style.backgroundColor = value);
};
export const pawnsColor = (value, isFoe = true) => {
	isFoe ?
		document.querySelectorAll(".foe").forEach(foe => foe.style.backgroundColor = value) :
		document.querySelector(".player").style.backgroundColor = value;
};