export const tilesColor = (value, isEven) => {
	let q = isEven ? ".even" : ".odd";
	document.querySelectorAll(q).forEach(tile => tile.style.backgroundColor = value);
};
export const pawnsColor = (value, kind) => {
	document.querySelectorAll(`.${kind}`).forEach(pawn => pawn.style.backgroundColor = value);
};