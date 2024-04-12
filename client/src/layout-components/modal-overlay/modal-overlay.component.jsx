import { ModalOverlayStyled } from "./modal-overlay.styles.js";
import { MobileNavTab } from "../mobile-nav-tab/mobile-nav-tab.component.jsx";
import { useContext } from "react";
import { mobileNavContext } from "../../contexts/mobile-nav.context.js";
import { __toggleMobileNav } from "../../reducers/mobile-nav.reducer.js";

export const ModalOverlay = ({themeDispatch}) => {
  const { mobileNavState, mobileNavDispatch } = useContext(mobileNavContext);
  return (
    <ModalOverlayStyled
      className={mobileNavState.modalOpened ? "opened" : ""}
      onClick={(e) => {
        e.target?.classList?.contains("opened") &&
          mobileNavDispatch(__toggleMobileNav());
      }}
    >
      <MobileNavTab themeDispatch={themeDispatch} />
    </ModalOverlayStyled>
  );
};
