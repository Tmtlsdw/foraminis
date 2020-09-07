import {bgActivated, bgDeactivated, touchEvent} from "../../constants/constants.mjs";
import {body} from "../../constants/dom.mjs";
import {movement} from "../../gameplay/player/movement.mjs";

export const movementTouchEnd = (e) => {
	touchEvent.deltaX = e.changedTouches[0].clientX - touchEvent.startX;
	touchEvent.deltaY = e.changedTouches[0].clientY - touchEvent.startY;

	if (Math.abs(touchEvent.deltaX) > Math.abs(touchEvent.deltaY)) {
		touchEvent.key = touchEvent.deltaX > 0 ? "ArrowRight" : "ArrowLeft";
	} else if (Math.abs(touchEvent.deltaX) < Math.abs(touchEvent.deltaY)) {
		touchEvent.key = touchEvent.deltaY < 0 ? "ArrowUp" : "ArrowDown";
	} else {
		touchEvent.key = "";
		touchEvent.shiftKey = !touchEvent.shiftKey;
		if (touchEvent.clicked) {
			body.style.background = bgDeactivated;
			touchEvent.clicked = false;
		} else {
			touchEvent.clicked = true;
			body.style.background = bgActivated;
		}
	}
	movement(touchEvent);
};