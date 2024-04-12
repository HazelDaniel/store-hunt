import { mobileNavContext } from "../../contexts/mobile-nav.context.js";
import { useContext } from "react";
import {
  NavThemeIconDivStyled,
  MobileNavDivsStyled,
  MobileNavTabStyled,
  SideTabTitleLinkDivStyled,
  MobileNavLinksStyled,
} from "./mobile-nav-tab.styles.js";
import { __toggleTheme } from "../../reducers/theme.reducer.js";

//ROUTING
import { useNavigate } from "react-router-dom";


export const MobileNavTab = ({themeDispatch}) => {
	const { mobileNavState } = useContext(mobileNavContext);
	const navigate = useNavigate();
  return (
		<MobileNavTabStyled className={mobileNavState.modalOpened ? "opened" : ""}>
			<NavThemeIconDivStyled>
				<svg viewBox="0 0 55 55" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=> themeDispatch(__toggleTheme())}>
					<g filter="url(#filter0_i_15_540)">
						<circle cx="27.5" cy="27.5" r="27.5" fill="#AB893B" />
					</g>
					<circle cx="27.5" cy="27.5" r="27" stroke="#F3F3EE" />
					<g clipPath="url(#clip0_15_540)">
						<path
							d="M23.6256 12.5392C23.9786 12.9696 24.0991 13.6182 23.7814 14.2013C22.6952 16.1942 22.0779 18.4771 22.0779 20.9064C22.0779 28.696 28.4306 35.0034 36.2579 35.0034C37.2778 35.0034 38.2713 34.8964 39.2285 34.6937C39.8829 34.555 40.4781 34.8509 40.7973 35.3054C41.1264 35.7745 41.1954 36.4741 40.7366 37.0372C37.7753 40.6721 33.2443 43 28.1657 43C19.2335 43 12 35.8047 12 26.9382C12 20.265 16.0962 14.5419 21.9269 12.1164C22.6005 11.8362 23.2613 12.0951 23.6256 12.5392Z"
							fill="#F3F3EE"
						/>
					</g>
					<defs>
						<filter id="filter0_i_15_540" x="0" y="0" width="55" height="59" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
							<feFlood floodOpacity="0" result="BackgroundImageFix" />
							<feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="2" />
							<feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
							<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
							<feBlend mode="normal" in2="shape" result="effect1_innerShadow_15_540" />
						</filter>
						<clipPath id="clip0_15_540">
							<rect width="31" height="31" fill="white" transform="translate(12 12)" />
						</clipPath>
					</defs>
				</svg>
			</NavThemeIconDivStyled>

			<MobileNavDivsStyled>
				<SideTabTitleLinkDivStyled>
					<p className="ST-title-link" onClick={() => navigate("shop")}>
						SHOP
					</p>
				</SideTabTitleLinkDivStyled>
				<MobileNavLinksStyled>
					<li className="ST-link" onClick={() => navigate("cart")}>
						SHOPPING CART
					</li>
					<li className="ST-link" onClick={() => navigate("checkout")}>
						CHECKOUT
					</li>
					<li className="ST-link">WISHLIST</li>
				</MobileNavLinksStyled>
				<SideTabTitleLinkDivStyled>
					<p className="ST-title-link disabled" onClick={() => navigate("auth")}>
						SIGN-IN/SIGN-UP
					</p>
				</SideTabTitleLinkDivStyled>
				<SideTabTitleLinkDivStyled>
					<p className="ST-title-link" onClick={() => navigate("auth")}>
						SIGN-OUT
					</p>
				</SideTabTitleLinkDivStyled>
				<SideTabTitleLinkDivStyled>
					<p className="ST-title-link">PROFILE</p>
				</SideTabTitleLinkDivStyled>
				<SideTabTitleLinkDivStyled>
					<p className="ST-title-link" onClick={() => navigate("blog")}>
						BLOG
					</p>
				</SideTabTitleLinkDivStyled>
				<SideTabTitleLinkDivStyled className="ST-title-link-div secluded">
					<p className="ST-title-link">USD</p>
					<svg viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clipPath="url(#clip0_15_523)" filter="url(#filter0_d_15_523)">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M46.4286 15.7142H9.36534L15.2899 21.639C15.9038 22.2528 15.9038 23.2476 15.2899 23.8615C14.6765 24.4751 13.6813 24.4751 13.0678 23.8615L4.46038 15.254C3.84654 14.6402 3.84654 13.6454 4.46038 13.0316L13.0678 4.4241C13.6813 3.81046 14.6765 3.81046 15.2899 4.4241C15.9038 5.03794 15.9038 6.03274 15.2899 6.64658L9.36534 12.5714H46.4286C47.2964 12.5714 48 13.275 48 14.1428C48 15.0106 47.2964 15.7142 46.4286 15.7142Z"
								fill="#F3F3EE"
							/>
						</g>
						<g clipPath="url(#clip1_15_523)" filter="url(#filter1_d_15_523)">
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M5.57143 37.7141H42.6347L36.7101 43.6389C36.0962 44.2527 36.0962 45.2475 36.7101 45.8614C37.3235 46.475 38.3187 46.475 38.9322 45.8614L47.5396 37.2539C48.1535 36.6401 48.1535 35.6453 47.5396 35.0314L38.9322 26.424C38.3187 25.8103 37.3235 25.8103 36.7101 26.424C36.0962 27.0378 36.0962 28.0326 36.7101 28.6465L42.6347 34.5712H5.57143C4.70361 34.5712 4 35.2749 4 36.1427C4 37.0105 4.70361 37.7141 5.57143 37.7141Z"
								fill="#F3F3EE"
							/>
						</g>
						<defs>
							<filter id="filter0_d_15_523" x="0" y="-2" width="52" height="32.3217" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
								<feOffset dy="2" />
								<feGaussianBlur stdDeviation="2" />
								<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.376471 0" />
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_523" />
								<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_523" result="shape" />
							</filter>
							<filter id="filter1_d_15_523" x="0" y="19.9999" width="52" height="32.3218" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
								<feFlood floodOpacity="0" result="BackgroundImageFix" />
								<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
								<feOffset dy="2" />
								<feGaussianBlur stdDeviation="2" />
								<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.376471 0" />
								<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_15_523" />
								<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_15_523" result="shape" />
							</filter>
							<clipPath id="clip0_15_523">
								<rect width="44" height="24.3217" fill="white" transform="translate(4)" />
							</clipPath>
							<clipPath id="clip1_15_523">
								<rect width="44" height="24.3217" fill="white" transform="translate(4 21.9999)" />
							</clipPath>
						</defs>
					</svg>
				</SideTabTitleLinkDivStyled>
			</MobileNavDivsStyled>
		</MobileNavTabStyled>
  );
};
