import styled, { css } from "styled-components";
import { makeAbsoluteBottomLeftDiv, makeAbsoluteTopLefDiv, makeColFlexCenter, makeColFlexStart, makeFullHeightBlock, makeFullSizeBlock, makeFullWidthBlock, makeRowFlexCenter, makeRowFlexStart, makeUnSelectableTextDiv } from "../../styles/styles";

const _leftAligned = css`
	left: 10%;
`;
const _centerAligned = css`
		left: 45%;
`;
export const _rightAligned = css`
		left: 75%;
`;
const _leftAlignedDiv = css`
		left: 10%;
`;
export const _centerAlignedDiv = css`
		left: 42.5%;
`;
export const _rightAlignedDiv = css`
		left: 72.5%;
`;
export const _checkoutCartCommonContainer = css`
	${makeFullWidthBlock};
	min-height: 100vh;
	height: max-content;
	font-family: latoMedium;
	background-color: ${({ theme }) => theme.$lessBrightColor};
	${makeColFlexStart};
	align-items: center;
	padding: 3rem 0;

	@media screen and (min-width: 910px) {
		${makeRowFlexStart};
		justify-content: center;
		padding: 3rem;
		align-items: flex-start;
	}
`;
export const _checkoutCartCommonBody = css`
	position: relative;
	${makeFullWidthBlock};
	align-self: flex-end;
	height: max-content;
	margin: 0 auto;

	@media screen and (min-width: 910px) {
		width: 80vw;
		margin: 3rem;
	}
`;

export const _checkoutCartCommonTopWrapper = css`
	${makeColFlexCenter};
	height: max-content;
	padding: 1.5rem;
	margin-bottom: 3rem;
	width: max-content;
	min-width: 25vw;
	align-self: flex-end;
	background-color: ${({ theme }) => theme.$accentColorTrans};
	color: ${({ theme }) => theme.$darkAccentColor};
	margin-right: 3rem;

	@media screen and (min-width: 910px) {
		order: 2;
		justify-self: flex-end;
		align-self: flex-start;
	}
`;

export const CartStyled = styled.div`
	${_checkoutCartCommonContainer};

	padding-bottom: 25vh;

	button {
		outline: unset;
		border: unset;
		cursor: pointer;
		color: ${({ theme }) => theme.$darkAccentColor};
	}

	.cart-total-price-wrapper {
		${_checkoutCartCommonTopWrapper};

		& > * {
			${makeFullWidthBlock};
			${makeColFlexCenter};
			max-width: 15rem;
			margin: 0.5rem 0;
			min-height: 2.5rem;
			text-transform: uppercase;
			min-width: 15rem;
		}

		P {
			text-align: center;
			${makeRowFlexCenter};

			span {
				margin-left: 10%;
				font-weight: lighter;
				font-family: latoLight;
				font-weight: bolder;
			}
		}

		button {
			background-color: ${({ theme }) => theme.$darkAccentColor};
			font-family: latoLight;
			color: ${({ theme }) => theme.$lessBrightColor};
		}
	}

	.cart-body {
		${_checkoutCartCommonBody};
		.cart-heading-div {
			width: 95%;
			margin: 0 auto;
			height: 3rem;
			position: relative;
			color: ${({ theme }) => theme.$darkAccentColor};
			${makeUnSelectableTextDiv};
			font-size: 0.9rem;
			overflow: visible;

			& > * {
				${makeAbsoluteTopLefDiv};
				top: 50%;
				transform: translateY(-50%);
				text-align: center;
			}

			.product-title {
				${_leftAligned};
			}

			.quantity-title {
				${_centerAligned};
			}

			.total-title {
				${_rightAligned};
			}

			&::after {
				${makeAbsoluteBottomLeftDiv};
				${makeFullWidthBlock};
				bottom: -0.15rem;
				height: 0.3rem;
				background-color: ${({ theme }) => theme.$accentColor};
			}
		}

		.cart-items-div {
			width: 95%;
			margin: auto;
			height: max-content;
			min-height: 40vh;
			${makeColFlexStart};
			align-items: center;
			padding-bottom: 12rem;
			border-bottom: 0.3rem solid ${({ theme }) => theme.$accentColor};
		}

		.cart-cta-div {
			width: max-content;
			min-width: 60vw;
			margin: 4rem auto;
			height: 3rem;
			${makeRowFlexCenter};
			align-items: center;
			button {
				height: 80%;
				border: 0.1rem solid ${({ theme }) => theme.$darkAccentColor};
				padding: 0 1rem;
				width: max-content !important;
				min-width: 8rem;
				font-family: latoLight;
				font-size: 0.7rem;
				transition: transform 0.1s ease-in-out;
				&:first-of-type {
					background-color: transparent;
					margin-right: 3rem;
					&:hover {
						transform: scale(0.95);
					}
				}
				&:last-of-type {
					background-color: ${({ theme }) => theme.$darkAccentColor};
					color: ${({ theme }) => theme.$brightColor};
				}
			}
		}

		&::before {
			${makeAbsoluteTopLefDiv};
			${makeFullWidthBlock};
			height: 3rem;
			background-color: ${({ theme }) => theme.$brightColor};
			box-shadow: 0.2rem 0.2rem 3rem ${({ theme }) => theme.$lightestShadowColor};
		}
	}
`;
