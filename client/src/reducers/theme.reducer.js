const themeActionTypes = {
  toggleTheme: "TOGGLE_THEME",
};

const lightTheme = {
	// HOME PAGE
	$homeFadingTextColor: "#333436",
	$homeGoldLikeColor: "#AB893B",
	$homeDarkColor: "#000000",
	$DirectoryCTATextColor: "#272727",
	$DirectoryBlurColor: "#d4d4d4a8",
	$DirectoryBlurColorDark: "#010000af",
	$homeOutlineColorTrans: "#d3d3d398",
	$homeOutlineColor: "#d3d3d3",
	$homeBodyColor: "#E5D6CB",
	$homePlaceholderColor: "#3c3c4344",
	$oddColor: "#D1C3B9",
	$homeSeparatorColor: "#D9CABF",
	$accentColor: "#BB9D88",
	$brightColor: "#FFFFFF",
	$lessBrightColor: "#F3F3EE",
	$darkAccentColor: "#08090A",
	$lightestShadowColor: "#00000018",
	$accentColorTrans: "#bb9d8838",
	$hotDealAccentColor: "#2A2414",
	$hotDealAccentColorTrans: "#2a24144a",

	// SHOP PAGE
	$shopSideTabListColor: "#626262",
	$shopSideTabTitleColor: "#000000a2",
	$redTextColor: "#FC2222",
	$greenTextColor: "#0080007f",
	$blueTextColor: "#0073ff",
	$shopSizeChipColor: "#967E6D",

	// SINGLE PRODUCTS PAGE

	$singleProductMainTextColor: "#C5C5C7",

	// CHECKOUT PAGE
	$checkoutConnectorColor: "#E3DBD2",

	// BLOG PAGE
	$blogHeroPrimaryTextColor: "#ffffff",
	$blogHeroSecondaryTextColor: "#AB893B",

	// CONTACT PAGE

	// SHOPPING CART PAGE

	// AUTH PAGE
	$authActiveTextColor: "#ffffff",
	$authInactiveTextColor: "#B4B4B4",
	$authFormColor: "#4D4D4D",

	// MISC
	$whiteBGInputTextColor: "#3f3f3f",
	$desktopSideTabColor: "#ffffff",
	$desktopSideTabIconColor: "#010000af",
	$mobileNavDisabledColor: "#d3d3d398",
	$activeSideTabColor: "#B4B4B4",
};

const darkTheme = {
	// HOME PAGE
	$homeFadingTextColor: "#333436",
	$homeGoldLikeColor: "#AB893B",
	$homeDarkColor: "#000000",
	$DirectoryCTATextColor: "#272727",
	$DirectoryBlurColor: "#d4d4d4a8",
	$DirectoryBlurColorDark: "#010000af",
	$homeOutlineColorTrans: "#d3d3d398",
	$homeOutlineColor: "#9C9C9C",
	$homeBodyColor: "#D3D3D3",
	$homePlaceholderColor: "#D1C3B9",
	$oddColor: "#FFFFFF",
	$homeSeparatorColor: "#D9CABF",
	$accentColor: "#A37351",
	$brightColor: "#242424",
	$lessBrightColor: "#0E0E0E",
	$darkAccentColor: "#D7D7D7",
	$lightestShadowColor: "#00000018",
	$accentColorTrans: "#bb9d8838",
	// WE STOPPED HERE WITH THE INITIAL THEME DATA
	$hotDealAccentColor: "#2A2414",
	$hotDealAccentColorTrans: "#2a24144a",

	// SHOP PAGE
	$shopSideTabListColor: "#626262",
	$shopSideTabTitleColor: "#9f9f9fa2",
	$redTextColor: "#FC2222",
	$greenTextColor: "#0080007f",
	$blueTextColor: "#0073ff",
	$shopSizeChipColor: "#967E6D",

	// SINGLE PRODUCTS PAGE

	$singleProductMainTextColor: "#4D4D4D",

	// CHECKOUT PAGE
	$checkoutConnectorColor: "#E3DBD2",

	// BLOG PAGE
	$blogHeroPrimaryTextColor: "#ffffff",
	$blogHeroSecondaryTextColor: "#AB893B",

	// CONTACT PAGE

	// SHOPPING CART PAGE

	// AUTH PAGE
	$authActiveTextColor: "#ffffff",
	$authInactiveTextColor: "#3f3f3f",
	$authFormColor: "#4D4D4D",
	// MISC
	$whiteBGInputTextColor: "#3f3f3f",
	$desktopSideTabColor: "#000000",
	$desktopSideTabIconColor: "#626262",
	$mobileNavDisabledColor: "#8c8c8f",
	$activeSideTabColor: "#bb9d8838",
};

export const initialThemeState = {
  theme: lightTheme,
  isLightTheme: true,
};

const toggledThemeObject = (state) => {
  switch (state.isLightTheme) {
    case true:
      return {
        theme: darkTheme,
        isLightTheme: false,
      };
    case false:
      return {
        theme: lightTheme,
        isLightTheme: true,
      };
  }
};

const toggleTheme = (state) => {
  const newTheme = {
    ...state,
    ...toggledThemeObject(state),
  };
  localStorage.setItem("themes", JSON.stringify(newTheme));
  return newTheme;
};
export const themeReducer = (state = initialThemeState, action) => {
  switch (action.type) {
    case themeActionTypes.toggleTheme:
      return toggleTheme(state);
  }
};

export const __toggleTheme = () => {
  return {
    type: themeActionTypes.toggleTheme,
  };
};
