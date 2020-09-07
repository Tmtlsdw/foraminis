export const thickness = 15;
export const move = 20;
export const spawn = move / 2;
export const alive = 0;
export const wave = 1;
export const erased = 0;
export const data = {
	move: move,
	alive: alive,
	wave: wave,
	erased: erased
};
export const displayStyle = {
	none: "none",
	block: "block",
	flex: "flex"
};
export const user = {
	signedIn: false,
	id: "",
	name: "",
	erased: "",
	wave: ""
};
export const bgDeactivated = "radial-gradient(circle at center bottom, rgba(0, 0, 0, .9), rgba(0, 0, 0, .7), rgba(0," +
	" 0, 0," +
	" .5)) no-repeat";
export const bgActivated = "black no-repeat";

export const touchEvent = {
	key: "",
	shiftKey: false,
	startX: 0,
	startY: 0,
	deltaX: 0,
	deltaY: 0,
	clicked: false
};

