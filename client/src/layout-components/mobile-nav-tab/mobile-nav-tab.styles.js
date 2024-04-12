import { default as styled, css } from "styled-components";
import { makeAbsoluteTopDiv, makeColFlexCenter, makeColFlexStart, makeFullHeightBlock, makeFullWidthBlock, makeRowFlexStart, removeScrollBar } from "../../styles/styles";



const _navDivStyles = css`
	${makeFullWidthBlock};
	margin-bottom: 2rem;
	height: max-content;
`;

export const MobileNavTabStyled = styled.nav`
	border: unset;
	background-color: ${({ theme }) => theme.$darkAccentColor};
	${makeFullHeightBlock};
	${makeColFlexStart};
	width: 65%;
	transform: translateX(100%);
	transition: transform 0.3s ease-in-out;
	padding: 1rem;
	position: relative;
	padding-bottom: 5rem;
	overflow: auto !important;
	${removeScrollBar};
	& > div {
		${makeRowFlexStart};
		justify-content: space-between;
	}

	&.opened {
		transform: translateX(0) !important;
	}

	svg {
		${makeFullHeightBlock};
	}
`;

export const NavThemeIconDivStyled = styled.div`
	${makeAbsoluteTopDiv};
	${_navDivStyles};
	height: 3rem;
	display: flex;
	flex-direction: row;
	align-items: center !important;
	justify-content: center !important;

	svg {
		cursor: pointer;
		height: 2rem;

		& > g {
			& > circle {
				fill: ${({ theme }) => theme.$homeGoldLikeColor};
			}
		}
	}
`;

export const MobileNavDivsStyled = styled.div`
	${_navDivStyles};
	height: max-content;
	min-height: 85%;
	margin-top: 3rem;
	overflow: auto !important;
	${removeScrollBar};
	display: flex;
	flex-direction: column !important;
	justify-content: flex-start;

`;

export const MobileNavLinksStyled = styled.ul`
	height: max-content;
	${makeColFlexCenter};
	min-height: 10rem;
	justify-content: space-evenly;
	position: relative;
	padding: 0 3rem;
	width: 100%;
	li{
		margin-left: 25%;
	}

	.ST-link {
		font-family: openSansLight;
		font-weight: lighter !important;
		${makeFullWidthBlock};
		text-align: start;
		padding-bottom: 0.3rem;
		color: ${({ theme }) => theme.$lessBrightColor};
		cursor: pointer;
	}
`;

export const SideTabTitleLinkDivStyled = styled.div`
	width: 100%;
	${makeRowFlexStart};

	justify-content: space-between;
	min-height: 3rem;
	margin-bottom: 1.5rem;
	align-items: center;

	svg {
		width: 2rem !important;
		fill: ${({ theme }) => theme.$lessBrightColor};
		cursor: pointer;

		path {
			fill: ${({ theme }) => theme.$lessBrightColor};
		}
	}

	p {
		width: max-content;
		text-align: start;
		cursor: pointer;
		color: ${({ theme }) => theme.$homeGoldLikeColor};
		font-family: openSansMedium;
		font-weight: 300;
		margin-left: 1rem;

		&.disabled {
			color: ${({ theme }) => theme.$mobileNavDisabledColor};
		}
	}

	&.secluded {
		p {
			color: ${({ theme }) => theme.$lessBrightColor};
		}
	}
`;
