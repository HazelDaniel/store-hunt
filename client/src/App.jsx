import { ThemeProvider } from "styled-components";
import { GlobalCSS } from "./styles/styles.js";
import { initialThemeState, themeReducer } from "./reducers/theme.reducer.js";
import { useMemo, useReducer } from "react";
import { UpperPane } from "./layout-components/upper-pane/upper-pane.component";
import { ModalOverlay } from "./layout-components/modal-overlay/modal-overlay.component.jsx";
import { MobileNavProvider } from "./contexts/mobile-nav.context.js";
import { initialMobileNavState, mobileNavReducer } from "./reducers/mobile-nav.reducer.js";
import { DesktopSideTab } from "./layout-components/desktop-side-tab/desktop-side-tab.component.jsx";
import { Footer } from "./layout-components/footer/footer.component.jsx";

// ROUTING
import { Outlet, useNavigation } from "react-router-dom";
import { Loader } from "./components/loader/loader.component.jsx";
import { ScrollRestoration } from "react-router-dom";
const initialThemeChecked = () => {
	if (JSON.parse(localStorage.getItem("themes"))) {
		return JSON.parse(localStorage.getItem("themes"));
	} else {
		return initialThemeState;
	}
};
export function App() {
	const initialThemeStateCheckedMemo = useMemo(() => initialThemeChecked(), []);
	const [themeState, themeDispatch] = useReducer(themeReducer, initialThemeStateCheckedMemo, (state) => state);
	const [mobileNavState, mobileNavDispatch] = useReducer(mobileNavReducer, initialMobileNavState, (state) => state);
	const navigation = useNavigation();

	const mobileNavValue = useMemo(
		() => ({
			mobileNavState,
			mobileNavDispatch,
		}),
		[mobileNavState]
	);
	const themeValue = useMemo(
		() => ({
			themeState,
			themeDispatch,
		}),
		[themeState]
	);

	// noinspection JSValidateTypes
	return (
		<ThemeProvider theme={themeValue.themeState.theme}>
			<GlobalCSS />
			<MobileNavProvider value={mobileNavValue}>
				<>
					<ScrollRestoration
						getKey={(location) => {
							const paths = ["/blog","/auth"];
							return paths.includes(location.pathname)
								? // home and notifications restore by pathname
								  location.pathname
								: // everything else by location like the browser
								  location.key;
						}}
					/>
					<UpperPane />
					{/* {console.log(navigation.state)}
					<Loader /> */}
					<ModalOverlay themeDispatch={themeValue.themeDispatch} />
					<DesktopSideTab themeDispatch={themeValue.themeDispatch} /> {/* <Shop /> */}
					<Outlet />
					<Footer />
				</>
			</MobileNavProvider>
		</ThemeProvider>
	);
}

export default App;
