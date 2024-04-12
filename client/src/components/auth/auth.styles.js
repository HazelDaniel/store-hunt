import styled from "styled-components";
import { _overlay } from "../../layout-components/modal-overlay/modal-overlay.styles";
import { makeAbsoluteBottomRightDiv, makeAbsoluteTopLefDiv, makeColFlexCenter, makeColFlexStart, makeFullWidthBlock, makeRowFlexCenter, makeRowFlexStart } from "../../styles/styles";


export const AuthStyled = styled.div`
	${_overlay};
	overflow: auto;
	z-index: 6;
	${makeColFlexCenter};
	padding-bottom: 5rem;

	.auth-body {
		width: 75%;
		height: max-content;
		min-height: 80%;
		margin: 3rem auto;
		max-width: 35rem;

		@media screen and (max-width: 640px) {
			max-width: 100vw;
			width: 100%;
		}

		min-width: 30rem;

		${makeColFlexStart};
		align-items: center;
		overflow: auto;
		overflow-x: visible;
		padding: 1rem;

		transform: scaleX(0.8);

		&::-webkit-scrollbar {
			width: 0.8rem;
		}

		/* Track */
		&::-webkit-scrollbar-track {
			background: ${({ theme }) => theme.$DirectoryBlurColorDark};
			border-radius: 0.3rem;
		}

		/* Handle */
		&::-webkit-scrollbar-thumb {
			background: ${({ theme }) => theme.$authFormColor};
			border-radius: 0.3rem;
			transition: background-color 0.2s ease-in-out;
		}

		/* Handle on hover */
		&::-webkit-scrollbar-thumb:hover {
			background: ${({ theme }) => theme.$lessBrightColor};
		}

		.auth-tab {
			${makeFullWidthBlock};
			${makeRowFlexCenter};
			margin-bottom: 1.5rem;
			overflow: visible;

			& > * {
				position: relative;
				overflow: visible;
				cursor: pointer;
				font-family: nunito;
				color: ${({ theme }) => theme.$authInactiveTextColor};
				transform: scale(0.9);

				&.active {
					transform: scale(1);
					color: ${({ theme }) => theme.$authActiveTextColor};

					&::after {
						${makeAbsoluteBottomRightDiv};
						width: 65%;
						height: 0.25rem;
						border-radius: 4rem;
						background-color: ${({ theme }) => theme.$authActiveTextColor};
						bottom: -0.5rem;
					}
				}
			}

			justify-content: space-around;

			.sign-up {
				margin-left: 15%;
			}

			.sign-in {
				margin-right: 15%;
			}
		}

		form {
			${makeFullWidthBlock};
			border-radius: 0.6rem;
			background-color: ${({ theme }) => theme.$authFormColor};
			box-shadow: 0.1rem 0.1rem 0.3rem ${({ theme }) => theme.$DirectoryBlurColorDark};

			font-family: latoMedium;
			text-transform: capitalize;
			padding: 0 0.5rem;
			${makeFullWidthBlock};
			height: max-content;

			overflow: visible;
			padding: 2.5rem;
			padding-top: 5rem;
			font-size: 0.8rem;

			.inline-input-div {
				overflow: visible;
				${makeFullWidthBlock};
				${makeRowFlexStart};
				position: relative;
				height: max-content;
				margin: 1.5rem 0;
				margin-top: 1.5rem;

				input[type="tel"] {
					margin-top: 1.5rem;
				}

				&:first-of-type {
					.S {
						margin-top: 1.5rem;
					}

					label {
						top: 0rem;
					}
				}

				.S {
					margin-top: 3.5rem;
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
				border: 0.1rem solid #c5c5c7;
				color: ${({ theme }) => theme.$darkAccentColor};

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
						margin-top: 1.5rem;
					}
				}
			}

			label {
				display: block;
				margin-bottom: 1rem;
				color: #ffffff;
				font-size: 1.1rem;
				font-family:manjariLight;
			}

			input.confirm {
				margin-bottom: 2.5rem;
			}

			input[type="submit"] {
				border: unset;
				outline: unset;
				width: max-content;
				padding: 0 3rem;
				border-radius: 5rem;
				height: 2rem;
				margin: 0 auto;
				background-color: ${({ theme }) => theme.$brightColor};
				cursor: pointer;
			}
		}
	}
`;