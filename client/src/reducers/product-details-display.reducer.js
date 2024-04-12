

const detailsDisplayActionTypes = {
	sendToView: "SEND_TO_VIEW",
};

export const initialDetailsDisplayState = {
	currentView: 0,
};


const sendToView = (state,index) => {
	return {
		...state,
		currentView: index,
	};
};

export const detailsDisplayReducer = (state = initialDetailsDisplayState, action) => {
	switch (action.type) {
		case detailsDisplayActionTypes.sendToView:
			return sendToView(state,action.payload);
		default:
			return state;
	}
};
export const __sendToView = (index) => {
	return {
		type: detailsDisplayActionTypes.sendToView,
		payload: index,
	};
};
