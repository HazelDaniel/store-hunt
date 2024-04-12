import styled, { css } from "styled-components";
import {
	makeAbsoluteBottomRightDiv,
	makeAbsoluteTopLefDiv,
	makeColFlexCenter,
	makeColFlexStart,
	makeFullHeightBlock,
	makeFullSizeBlock,
	makeFullWidthBlock,
	makeRowFlexCenter,
	makeRowFlexEnd,
	makeRowFlexStart,
} from "../../styles/styles";

const _uniformlySpacedContainer = css`
	${makeFullWidthBlock};
	${makeRowFlexStart}
	justify-content: space-between;
`;
export const _customForm = css`
	font-family: latoMedium;
	text-transform: capitalize;
	padding: 0 0.5rem;
	${makeFullWidthBlock};
	height: max-content;

	overflow: visible;
	/* display: none; */

	.inline-input-div {
		overflow: visible;
		${makeFullWidthBlock};
		${makeRowFlexStart};
		position: relative;
		height: max-content;
		margin: 2rem 0;
		margin-top: 2rem;

		input[type="tel"] {
			margin-top: 2rem;
		}

		&:first-of-type {
			.S {
				margin-top: 2rem;
			}

			label {
				top: 0rem;
			}
		}

		.S {
			margin-top: 4rem;
			width: 45%;

			&:first-of-type {
				margin-right: 3rem;
			}
		}

		label {
			${makeAbsoluteTopLefDiv};
			top: 0;

			&:nth-of-type(n + 2) {
				left: calc(45% + 3rem);
			}
		}
	}

	input {
		${makeFullWidthBlock};
		height: 2rem;
		outline: unset;
		padding-left: 1rem;
		border-radius: 0.3rem;
		background-color: transparent;
		border: 0.1rem solid ${({ theme }) => theme.$singleProductMainTextColor};
		color: $darkAccentColor;

		&::placeholder {
			color: ${({ theme }) => theme.$singleProductMainTextColor};
			text-transform: capitalize;
			font-family: latoLight;
		}

		&[type="email"] {
			&::placeholder {
				text-transform: unset;
			}
		}

		&.L {
			~ label {
				margin-top: 2rem;
			}
		}

		&:focus {
			&::placeholder {
				transform: translateY( -0.5rem);
				font-size: smaller;
				transition: transform 0.2s ease-in-out;
			}
		}
	}

	label {
		display: block;
		margin-bottom: 1.5rem;
	}
`;
export const CheckoutStyled = styled.section`
	${makeFullWidthBlock};
	${makeColFlexStart};

	@media screen and (min-width: 900px) {
		${makeRowFlexStart}
	}

	height: max-content;
	min-height: 100vh;

	.checkout-container {
		font-family: latoMedium;
		${makeFullWidthBlock};
		${makeColFlexStart};
		background-color: ${({ theme }) => theme.$lessBrightColor};
		padding-bottom: 20%;

		@media screen and (min-width: 900px) {
			order: 2;
		}

		.checkout-discount-wrapper {
			align-items: flex-start;
			background-color: transparent;
			// FIXING ...
			align-self: flex-end;
			margin-bottom: 3rem;
			margin-right: 2rem;
			margin: 2rem 2rem 3rem 0;

			& > p {
				${makeFullWidthBlock};
				margin-bottom: 1rem;
				font-size: 0.8rem;
				text-transform: uppercase;
				color: ${({ theme }) => theme.$darkAccentColor};
			}

			& > div {
				&.discount-code-box {
					width: max-content;

					overflow: visible;

					form {
						${makeFullSizeBlock};
						${makeRowFlexEnd};
						overflow: visible;
						height: 2.5rem;

						* {
							font-family: latoLight;
						}

						& > * {
							outline: none;
							border: unset;
						}
						
						input {
							${makeFullHeightBlock};
							z-index: 3;
							color: #000000;
							
							&::selection {
								background-color: ${({ theme }) => theme.$darkAccentColor};
								color: ${({ theme }) => theme.$lessBrightColor};
							}

							padding-left: 10%;

							&::placeholder {
								color: ${({ theme }) => theme.$singleProductMainTextColor};
							}

							&:focus {
								box-shadow: inset 0.1rem 0.2rem 1rem ${({ theme }) => theme.$lightestShadowColor}, -0.2rem 0 1rem ${({ theme }) => theme.$lightestShadowColor};
							}
						}

						button {
							width: 6rem;
							${makeFullHeightBlock};
							background-color: ${({ theme }) => theme.$darkAccentColor};
							color: ${({ theme }) => theme.$lessBrightColor};
						}
					}
				}
			}
		}

		.checkout-body {
			${makeColFlexStart};
			min-height: 70vh;
			background-color: ${({ theme }) => theme.$accentColorTrans};
			padding: 2rem;
			width: 90%;
			color: ${({ theme }) => theme.$darkAccentColor};
			// display: none;

			span {
				font-family: manjariMedium;
			}

			@media screen and (min-width: 850px) and (max-width: 899px) {
				max-width: 25rem;
				align-self: flex-start;
				margin-left: 10%;
			}

			// @media screen and (min-width)

			& > div {
				${makeFullWidthBlock};
				height: max-content;
				padding: 2rem 0.5rem;

				&:first-of-type {
					border-bottom: 0.1rem solid ${({ theme }) => theme.$lessBrightColor};
				}

				&:last-of-type {
					margin-bottom: 10rem;
				}
			}

			.CB-title {
				${makeFullWidthBlock};
				text-align: center;
				font-size: larger;
				font-weight: 500;
				margin-bottom: 3rem;
				margin-top: 1rem;
			}

			.checkout-product-summary {
				.checkout-summary-heading-div {
					${_uniformlySpacedContainer};
					margin-bottom: 2rem;

					p {
						font-family: latoLight;
						font-weight: 600;
					}
				}

				.checkout-summary-details-div {
					${makeColFlexCenter};
					align-items: center;
					overflow: visible;

					ol {
						${makeFullWidthBlock};
						height: max-content;

						li {
							${_uniformlySpacedContainer};
							margin: 0.5rem 0;
						}
					}
				}
			}

			.checkout-total-price-summary {
				${makeFullWidthBlock};
				${makeColFlexCenter};
				align-items: center;
				height: max-content;
				text-transform: capitalize;

				ul {
					${makeFullWidthBlock};

					li {
						${_uniformlySpacedContainer};
						margin: 0.5rem 0;

						span {
							color: ${({ theme }) => theme.$redTextColor};
						}
					}
				}
			}

			& > button {
				outline: none;
				border: unset;
				width: 65%;
				height: 2.5rem;
				font-family: latoLight;
				color: ${({ theme }) => theme.$brightColor};
				background-color: ${({ theme }) => theme.$darkAccentColor};
				cursor: pointer;
			}
		}
	}

	.checkout-form-container {
		${makeFullWidthBlock};
		align-self: flex-start;
		min-height: 60vh;
		height: max-content;
		padding: 1.5rem;
		padding-top: 3rem;
		color: ${({ theme }) => theme.$darkAccentColor};
		background-color: ${({ theme }) => theme.$lessBrightColor};
		position: relative;
		/* display: none; */

		@media screen and (min-width: 900px) {
			min-width: 35rem;
		}

		.form-progress-indicators {
			width: max-content;
			min-width: 10rem;
			height: max-content;
			margin: auto;
			margin-bottom: 3.5rem;
			${makeRowFlexStart}

			.FPI {
				width: 1.25rem;
				height: 1.25rem;
				border-radius: 50%;
				${makeColFlexCenter};
				align-items: center;
				padding: 0.08rem;
				background-color: ${({ theme }) => theme.$checkoutConnectorColor};

				span {
					${makeFullSizeBlock};
					cursor: pointer;
				}

				& + .FPI-connector {
					width: 4.5rem;
					height: 0.2rem;
					margin: auto 0.3rem;
					border-radius: 4rem;
					background-color: ${({ theme }) => theme.$checkoutConnectorColor};
				}

				&.FPI-active {
					span {
						border-radius: 50%;
						background-color: ${({ theme }) => theme.$darkAccentColor};
						transform: scale(0.9);
					}
				}
			}
		}

		.progress-back-cta {
			${makeAbsoluteTopLefDiv};
			top: 5rem;
			left: 2rem;
			${makeRowFlexStart}
			width: max-content;
			span {
				margin-right: 0.5rem;
				${makeRowFlexCenter}
				align-items: center;
				height: 2rem;
				svg {
					${makeFullHeightBlock};
					path {
						fill: ${({ theme }) => theme.$singleProductMainTextColor};
					}
				}
			}
			button {
				cursor: pointer;
				outline: unset;
				border: unset;
				background-color: unset;
				font-size: 0.8rem;
				font-family: latoLight;
				color: ${({ theme }) => theme.$darkAccentColor};
			}
		}

		.checkout-form-heading {
			height: max-content;
			padding-bottom: 1rem;
			border-bottom: 0.1rem solid ${({ theme }) => theme.$singleProductMainTextColor};
			margin-bottom: 1.5rem;

			&-text {
				font-size: 1.4rem;
				font-family: nunito;
			}
		}

		form {
			${_customForm};
			display: none;

			.AHA-div {
				${makeRowFlexStart}
				margin-top: 5rem;

				input[type="checkbox"] {
					accent-color: ${({ theme }) => theme.$darkAccentColor};
					height: 1rem;
					width: 1rem;
					margin-right: 0.5rem;

					& + span {
						display: inline;
						font-size: 0.8rem;
						margin: auto 0;
					}
				}
			}

			.checkout-form-cta {
				width: max-content;
				padding: 0 2rem;
				margin: 4rem 2rem 0 auto;
				position: relative;

				input {
					height: 2.5rem;
					width: max-content;
					border: none;
					background-color: transparent;
					color: ${({ theme }) => theme.$darkAccentColor};

					~ span {
						${makeAbsoluteBottomRightDiv};
						${makeColFlexCenter};
						align-items: center;
						top: 50%;
						right: 5%;
						transform: translateY(-50%);
						height: 1.5rem;
						width: 1.5rem;

						svg {
							${makeFullHeightBlock};
							transform: scale(0.9);

							path {
								fill: ${({ theme }) => theme.$darkAccentColor};
							}
						}
					}
				}
			}
		}

		.confirmation-section {
			font-family: latoMedium;
			text-transform: capitalize;
			padding: 0 0.5rem;
			${makeFullWidthBlock};
			height: max-content;
			/* display: none; */
			padding: 2rem 5rem 10rem 0.5rem;
			* {
				font-family: nunito;
				font-weight: 500;
			}
			.greeting-text {
				${makeFullWidthBlock};
				font-size: 1.1rem;
				margin-bottom: 1rem;
			}
			.confirmation-text {
				font-size: 0.9rem;
			}

			.confirmation-form {
				${makeFullWidthBlock};
				${makeColFlexStart};
				align-items: flex-start;
				margin-top: 3rem;
				position: relative;
				.agreement-check-div {
					${makeFullWidthBlock};
					${makeRowFlexStart}
					margin-bottom: 3rem;
					height: 6rem;
					input[type="checkbox"] {
						accent-color: ${({ theme }) => theme.$darkAccentColor};
						height: 1.5rem;
						width: 1.5rem;
						margin-right: 0.5rem;
					}
					span {
						font-size: 0.8rem;
						label {
							margin: 25% 0;
							height: max-content;
						}
						${makeColFlexCenter};
						display: inline-flex;
						height: max-content;
					}
				}

				textarea {
					width: 25rem;
					height: 5rem;
					outline: none;
					border: unset;
					padding: 0.5rem 1rem;
					color: ${({ theme }) => theme.$whiteBGInputTextColor};

					&::placeholder {
						text-transform: capitalize;
						font-family: nunitoLight;
						color: ${({ theme }) => theme.$singleProductMainTextColor};
					}
				}
				& > input {
					width: max-content;
					${makeAbsoluteBottomRightDiv};
					padding: 0 1rem;
					border-radius: unset;
					border: unset;
					outline: unset;
					color: ${({ theme }) => theme.$lessBrightColor};
					background-color: ${({ theme }) => theme.$darkAccentColor};
					font-family: latoLight;
					bottom: -6rem;
					right: 5%;
				}
			}
		}
	}
`;
