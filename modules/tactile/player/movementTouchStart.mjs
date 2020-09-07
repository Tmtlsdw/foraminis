import {touchEvent} from "../../constants/constants.mjs";

export const movementTouchStart = (e) => {
	touchEvent.startX = e.touches[0].clientX;
	touchEvent.startY = e.touches[0].clientY;
}