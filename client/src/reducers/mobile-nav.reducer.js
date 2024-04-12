const mobileNavActionTypes = {
  toggleMobileNav: "TOGGLE_MOBILE_NAV",
};

export const initialMobileNavState = {
  modalOpened: false,
};

const toggledMobileNavObject = (state) => {
  switch (state.modalOpened) {
    case true:
      return {
        modalOpened: false,
      };
    case false:
      return {
        modalOpened: true,
      };
  }
};
const toggleMobileNav = (state) => {
  return {
    ...state,
    ...toggledMobileNavObject(state),
  };
};

export const mobileNavReducer = (state = initialMobileNavState, action) => {
  switch (action.type) {
    case mobileNavActionTypes.toggleMobileNav:
      return toggleMobileNav(state);
    default:
      return state;
  }
};
export const __toggleMobileNav = () => {
  return {
    type: mobileNavActionTypes.toggleMobileNav,
  };
};
