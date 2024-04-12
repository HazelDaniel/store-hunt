import {default as styled,css} from "styled-components";
import { makeAbsoluteBottomLeftDiv, makeAbsoluteTopRightDiv, makeColFlexCenter, makeColFlexStart, makeFullSizeBlock, makeFullWidthBlock, makeRowFlexCenter, makeRowFlexStart, makeUnSelectableTextDiv } from "../../styles/styles";

export const _makeHomeSection = css`
	${makeFullWidthBlock};
	background-color: ${({ theme }) => theme.$lessBrightColor};
	height: fit-content;
	position: relative;
	padding-bottom: 10rem;
`;
const _floatAndBlack = css`
	${makeAbsoluteTopRightDiv};
	color: ${({ theme }) => theme.$darkAccentColor};
`;
export const DealOfTheWeekStyled = styled.section`
	${_makeHomeSection};
	padding: 4rem 0;
	margin-top: 0;
	${makeRowFlexStart};
	outline: 1rem solid ${({ theme }) => theme.$lessBrightColor};
	border-bottom: 10rem solid ${({ theme }) => theme.$lessBrightColor};
	z-index: 3 !important;

	.DOW-side-tab {
		${makeColFlexCenter};
		height: 15rem;
		width: 10rem;
		margin-top: 6rem;
		border-top-right-radius: 0.8rem;
		border-bottom-right-radius: 0.8rem;
		background-color: ${({ theme }) => theme.$brightColor};
		color: ${({ theme }) => theme.$homeOutlineColor};
		box-shadow: 0.3rem 0.15rem 0.5rem ${({ theme }) => theme.$lightestShadowColor};
		overflow: visible;

		.DOW-tab-lists {
			list-style-type: none;
			transform: translateX(5rem);
			${makeColFlexStart};
			justify-content: space-evenly;
			align-items: flex-start;

			.DOW-tab-list {
				text-align: start;
				width: max-content;
				margin: 0.5rem 0;
				cursor: pointer;

				span {
					visibility: hidden;
				}

				&.active-dow-tab-list {
					color: ${({ theme }) => theme.$darkAccentColor};
					font-weight: 500;
					transform: translateX(0.5rem);

					span {
						visibility: visible;
						display: inline-block;
					}
				}
			}
		}
	}

	.DOW-item-div {
		width: 18rem;
		height: 15rem;
		margin: 6rem auto 0 25%;
		position: relative;
		overflow: visible;
		${makeUnSelectableTextDiv};

		.DOW-item {
			${makeFullSizeBlock};
			object-fit: cover;
			aspect-ratio: 1/1;
		}

		.DOW-item-tag {
			${makeAbsoluteTopRightDiv};
			height: 6rem;
			width: 6rem;
			border-radius: 50%;
			background-color: ${({ theme }) => theme.$darkAccentColor};
			top: -1.5rem;
			${makeColFlexCenter};
			color: ${({ theme }) => theme.$lessBrightColor};

			p:first-of-type {
				font-family: openSansLight;
			}
		}
	}

	.DOW-title {
		${_floatAndBlack};
		color: ${({ theme }) => theme.$accentColor};
		left: 15vw;
		top: 3rem;
		text-transform: uppercase;
		width: max-content;
		max-width: 20rem;

		@media screen and (min-width: 1010px) {
			top: 5rem;
			left: 75vw;
		}

		span {
			width: 2rem;
			height: 2rem;
			${makeColFlexCenter};
			display: inline-flex;
			justify-self: flex-end;
			transform: translateY(0.5rem);

			svg {
				height: 80%;
			}
		}
	}

	.DOW-product-title {
		${_floatAndBlack};
		left: 22vw;
		top: 6rem;
		font-size: 1.5rem;
		font-family: nunito;
		@media screen and (min-width: 1010px) {
			top: 8rem;
			left: 75vw;
			padding-right: 2.5vw;
		}
	}

	.DOW-time-div {
		${makeAbsoluteBottomLeftDiv};
		color: ${({ theme }) => theme.$darkAccentColor};
		bottom: 0rem;
		left: 6rem;
		@media screen and (min-width: 1010px) {
			bottom: unset;
			left: 72vw;
			transform: scale(0.8);
			top: 15rem;
		}
		
		.DOW-time-count-div {
			font-size: 1.4rem;
			${makeRowFlexCenter};
			justify-content: space-evenly;
			width: 14rem;
		}

		.DOW-time-count-label-div {
			width: 14rem;
			${makeRowFlexCenter};
			justify-content: flex-end;
			font-size: 0.8rem;

			span {
				margin-right: 1rem;

				&:last-of-type {
					margin-right: 0;
				}
			}
		}
	}

	.DOW-cta {
		all: unset;
		${makeColFlexCenter};
		${makeAbsoluteBottomLeftDiv};
		bottom: -4rem;
		right: -50%;
		transform: translateX(50%);
		width: 10rem;
		height: 2.5rem;
		background-color: ${({ theme }) => theme.$darkAccentColor};
		color: ${({ theme }) => theme.$brightColor};
		font-weight: lighter;
		font-family: openSansLight;
		font-size: 0.8rem;
		z-index: 3 !important;
		cursor: pointer;
	}
`;