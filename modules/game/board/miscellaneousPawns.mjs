export const setPawn = (tile, isHere, kind) => {
	tile.setAttribute(kind, String(isHere));
	isHere ?
		drawPawn(tile, kind) :
		erasePawn(tile, kind);

};
export const setFoes = (tiles) => {
	tiles.forEach(tile => {
		setPawn(tile, true, "foe");
	});
};
const drawPawn = (tile, kind) => {
	const pawn = document.createElement("div");
	pawn.setAttribute("class", kind);
	tile.append(pawn);
};
const erasePawn = (tile, kind) => {
	let x = String(tile.getAttribute("x"));
	let y = String(tile.getAttribute("y"));
	document.querySelector(`[x='${x}'][y='${y}']>.${kind}`).remove();
};