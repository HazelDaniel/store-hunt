import { createContext } from "react";
import { initialMobileNavState } from "../reducers/mobile-nav.reducer.js";

export const mobileNavContext = createContext(initialMobileNavState);
export const MobileNavProvider = mobileNavContext.Provider;
