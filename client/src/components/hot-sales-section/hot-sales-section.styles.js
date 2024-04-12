import styled, { css, keyframes } from "styled-components";
import { makeAbsoluteBottomLeftDiv, makeAbsoluteBottomRightDiv, makeAbsoluteTopLefDiv, makeAbsoluteTopRightDiv, makeColFlexCenter, makeColFlexStart, makeFullHeightBlock, makeFullSizeBlock, makeUnSelectableTextDiv } from "../../styles/styles";
import { _makeHomeSection } from "../deal-of-the-week-div/deal-of-the-week-div.styles";
import { _sectionTitle } from "../directory/directory.styles";

const _keepAnimating = css`
	animation-iteration-count: infinite;
	animation-duration: 1.618s;
`;


export const HotSalesStyled = styled.section`
	${makeUnSelectableTextDiv};

	@keyframes blinkDisplay {
		from {
			background-color: #ffffff;
		}

		to {
			background-color: #08090a;
		}
	}

	color: ${({ theme }) => theme.$darkAccentColor};
	${_makeHomeSection};
	${makeColFlexStart};
	height: calc(100vw / 1.2565);
	padding: 0;
	background-color: ${({ theme }) => theme.$brightColor};
	overflow: visible;
	animation-name: blinkDisplay;
	${_keepAnimating};
	margin-bottom: 5rem;
	border-top: 5rem solid ${({ theme }) => theme.$lessBrightColor};

	.hot-sales-section-title {
		${_sectionTitle};
		top: -3rem;
	}

	.hot-sales-section-wrapper {
		${makeFullSizeBlock};
		${makeColFlexCenter};
		align-items: flex-end;

		& > * {
			${makeAbsoluteBottomLeftDiv};
		}

		.HSS-side-text-div {
			left: 5%;
			${makeFullHeightBlock};
			width: 15%;

			img {
				${makeFullHeightBlock};
			}
		}

		.HSS-display {
			height: 60%;
			width: 60%;
			position: relative;
			margin-right: 2.5%;
			border-top-left-radius: 8%;
			border-bottom-left-radius: 8%;
			background-color: ${({ theme }) => theme.$homeGoldLikeColor};
			transform: translateY(-10%);
			overflow: visible;
			z-index: 2;

			img {
				${makeAbsoluteTopLefDiv};
				width: 119%;
				transform: rotateZ(-19.38deg);
				left: -28%;
				top: -25%;
			}

			p {
				${makeAbsoluteBottomRightDiv};
				font-size: 2em;
				right: 10%;
				font-weight: bolder;
				bottom: 15%;
				color: ${({ theme }) => theme.$hotDealAccentColor};
				animation-name: blinkDisplayText;
				${_keepAnimating};
			}

			@keyframes blinkDisplayText {
				from {
					color: ${({ theme }) => theme.$darkAccentColor};
				}

				to {
					color: ${({ theme }) => theme.$brightColor};
				}
			}

			button {
				${makeAbsoluteTopRightDiv};
				width: 35%;
				height: 15%;
				border-radius: 4vw;
				top: -18%;
				${makeColFlexCenter};
				align-items: center;
				border: none;
				outline: none;
				background-color: transparent;
				font-weight: bolder;
				cursor: pointer;
				border: 0.15rem solid ${({ theme }) => theme.$darkAccentColor};
				z-index: 3;
				animation-name: blinkDisplayCta;
				${_keepAnimating};
			}

			@keyframes blinkDisplayCta {
				from {
					color: ${({ theme }) => theme.$darkAccentColor};
					border: 0.15rem solid ${({ theme }) => theme.$darkAccentColor};
				}

				to {
					color: #ffffff;
					border: 0.15rem solid #ffffff;
				}
			}
		}

		.HSS-float {
			width: 5vmax;
			height: 5vmax;
			border-radius: 50%;
			z-index: 0;
			background-color: ${({ theme }) => theme.$darkAccentColor};

			&:first-of-type {
				left: 35%;
				bottom: 40%;
			}

			&:nth-of-type(2) {
				left: 73%;
				bottom: 18%;
			}

			&:nth-of-type(3) {
				left: 77%;
				bottom: 7%;
			}

			&:nth-of-type(4) {
				left: 79.5%;
				bottom: 6.5%;
			}

			&.big {
				transform: scale(2);
			}
			&.small {
				transform: scale(0.5);
			}
		}
	}
`;
