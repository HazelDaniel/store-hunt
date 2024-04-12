import { AnnounceDivStyled, UpperPaneStyled } from "./upper-pane.styles";
import { Logo } from "../logo/logo.component.jsx";
import { SearchBox } from "../search-box/search-box.component.jsx";
import { MobileNavToggler } from "../mobile-nav-toggler/mobile-nav-toggler.component.jsx";
import { DesktopNavTab } from "../desktop-nav-tab/desktop-nav-tab.component.jsx";

export const UpperPane = () => {
  return (
    <UpperPaneStyled>
      <Logo />
      <SearchBox />
      <MobileNavToggler />
      <DesktopNavTab />
      <AnnounceDivStyled>
        <p className="announce-text">
          Free shipping . 30 day return or refund guarantee
        </p>
      </AnnounceDivStyled>
    </UpperPaneStyled>
  );
};
