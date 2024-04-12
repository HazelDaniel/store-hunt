import {
  DesktopNavLinksStyled,
  DesktopNavLinkStyled,
  DesktopNavTabStyled,
} from "./desktop-nav-tab.styles";


// ROUTING
import { NavLink } from "react-router-dom";

export const DesktopNavTab = () => {
  return (
		<DesktopNavTabStyled>
			<DesktopNavLinksStyled>
				<DesktopNavLinkStyled className="desktop-nav-link">
					<NavLink to="shop" className={({ isActive }) => (isActive ? "active" : "")}>
						SHOP
					</NavLink>
				</DesktopNavLinkStyled>
				<DesktopNavLinkStyled className="desktop-nav-link">
					<NavLink to="blog" className={({ isActive }) => (isActive ? "active" : "")}>
						BLOG
					</NavLink>
				</DesktopNavLinkStyled>
				<DesktopNavLinkStyled className="desktop-nav-link">
					<NavLink to="auth" className={({ isActive }) => (isActive ? "active" : "")}>
						SIGNOUT
					</NavLink>
				</DesktopNavLinkStyled>
			</DesktopNavLinksStyled>
		</DesktopNavTabStyled>
  );
};
