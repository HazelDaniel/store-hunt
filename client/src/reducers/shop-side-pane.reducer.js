const shopSidePaneActions = {
	toggleSidePane: "TOGGLE_SIDE_PANE",
	openSidePane: "OPEN_SIDE_PANE"
};

export const initialShopSidePaneState = {
	sidePaneOpened: false,
};

const toggledSidePaneObject = (state) => {
	switch (state.sidePaneOpened) {
		case true:
			return {
				sidePaneOpened: false,
			};
		case false:
			return {
				sidePaneOpened: true,
			};
	}
};
const toggleSidePane = (state) => {
	return {
		...state,
		...toggledSidePaneObject(state),
	};
};
const openSidePane = (state) => {
	return {
		...state,
		sidePaneOpened: true,
	};
}

export const shopSidePaneReducer = (state = initialShopSidePaneState, action) => {
	switch (action.type) {
		case shopSidePaneActions.toggleSidePane:
			return toggleSidePane(state);
		case shopSidePaneActions.openSidePane:
			return openSidePane(state);
		default:
			return state;
	}
};
export const __toggleSidePane = () => {
	return {
		type: shopSidePaneActions.toggleSidePane,
	};
};

export const __openSidePane = () => {
	return {
		type: shopSidePaneActions.openSidePane,
	}
}
