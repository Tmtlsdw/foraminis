export const tilesColor = (value, isEven) => {
	let q = isEven ? ".even" : ".odd";
	document.querySelectorAll(q).forEach(tile => tile.style.backgroundColor = value);
};