export const playerEncountered = () => {
	const encountered = document.querySelector("[player='true'][foe='true']");
	return !!encountered;
};