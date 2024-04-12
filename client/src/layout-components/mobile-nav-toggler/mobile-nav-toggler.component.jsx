import { MobileNavTogglerStyled } from "./mobile-nav-toggler.styles.js";
import { mobileNavContext } from "../../contexts/mobile-nav.context.js";
import { useContext } from "react";
import { __toggleMobileNav } from "../../reducers/mobile-nav.reducer.js";

export const MobileNavToggler = () => {
  const { mobileNavState, mobileNavDispatch } = useContext(mobileNavContext);
  return (
    <MobileNavTogglerStyled>
      <div
        className={`open ${mobileNavState.modalOpened ? "opened" : ""}`}
        onClick={() => mobileNavDispatch(__toggleMobileNav())}
      >
        <span className="cls cls-close"></span>
        <span className="cls"></span>
        <span className="cls"></span>
      </div>
    </MobileNavTogglerStyled>
  );
};
