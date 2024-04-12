import styled from "styled-components";
import { debug, makeAbsoluteTopLefDiv, makeColFlexCenter, makeColFlexStart, makeFullWidthBlock } from "../../styles/styles";

export const DesktopSideTabStyled = styled.div`
	@media screen and (max-width: 640px) {
		display: none !important;
	}
	${makeColFlexStart};
	position: fixed;
	right: 0;
	width: 3rem;
	height: 70vh;
	top: 50%;
	transform: translateY(-40%);
	z-index: 6;
	border-top-left-radius: 1.5rem;
	border-bottom-left-radius: 1.5rem;
	align-items: center;
	padding: 2rem 0.5rem;
	background-color: ${({ theme }) => theme.$desktopSideTabColor};
	box-shadow: -0.05rem -0.1rem 0.5rem ${({ theme }) => theme.$DirectoryBlurColorDark};
	overflow: visible;

	& > div {
		${makeFullWidthBlock};
		${makeColFlexCenter};
		align-items: center;
		margin: auto;
		overflow: visible;
		&.user-connected {
			& > svg {
				height: 2rem;
			}
		}
		&.UI-connected{
			svg{
				margin: 20% 0;
			}
		}

		.user-connected-cart-icon {
			${makeFullWidthBlock};
			// @include debug;
			position: relative;
			overflow: visible;
			width: 100% !important;

			span {
				${makeAbsoluteTopLefDiv}
				height: 1rem;
				width: 1rem;
				top: -5%;
				left: -5%;
				background-color: ${({ theme }) => theme.$DirectoryBlurColorDark};
				color: ${({ theme }) => theme.$brightColor};
				border-radius: 50%;
				z-index: 3;
			}
		}
		a {
			${makeFullWidthBlock};
			&.active {
				svg {
					path {
						fill: ${({ theme }) => theme.$activeSideTabColor};
					}
				}
			}
		}
		svg {
			${makeFullWidthBlock};
			fill: ${({ theme }) => theme.$desktopSideTabIconColor};
			transform: scale(0.85);
			cursor: pointer;

			path {
				fill: ${({ theme }) => theme.$desktopSideTabIconColor};
			}
		}
	}
`;
