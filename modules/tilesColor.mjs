export const tilesColor = (value = "000", isEven = false) => {

	if (!!isEven) {
		let evenTiles = document.querySelectorAll(".even");
		evenTiles.forEach(tile => tile.style.backgroundColor = value)
	} else {
		let oddTiles = document.querySelectorAll(".odd");
		oddTiles.forEach(tile => tile.style.backgroundColor = value)
	}

};