const shopAccordionActions = {
	toggleAccordion: "TOGGLE_ACCORDION",
};

export const initialShopAccordionState = {
	accordionOpened: true,
};

const toggledAccordionObject = (state) => {
	switch (state.accordionOpened) {
		case true:
			return {
				accordionOpened: false,
			};
		case false:
			return {
				accordionOpened: true,
			};
	}
};
const toggleAccordion = (state) => {
	return {
		...state,
		...toggledAccordionObject(state),
	};
};


export const shopAccordionReducer = (state = initialShopAccordionState, action) => {
	switch (action.type) {
		case shopAccordionActions.toggleAccordion:
			return toggleAccordion(state);
		default:
			return state;
	}
};
export const __toggleAccordion = () => {
	return {
		type: shopAccordionActions.toggleAccordion,
	};
};

