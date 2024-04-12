import styled, { css } from "styled-components";
import { makeColFlexStart, makeFullWidthBlock } from "../../styles/styles";
import { _customHero } from "../blog/blog.styles";
import { _customForm } from "../checkout/checkout.styles";

const _text = css`
	padding-right: 20vw;
`;
const _largerText = css`
	${_text};
	text-transform: capitalize;
	font-family: nunitoLight;
	font-weight: 600;
	margin-bottom: 2rem;
`;
export const ContactStyled = styled.div`
	${makeFullWidthBlock};
	background-color: ${({ theme }) => theme.$lessBrightColor};
	height: max-content;
	min-height: 100vh;
	color: ${({ theme }) => theme.$darkAccentColor};
	${makeColFlexStart};

	.contact-map-area {
		${_customHero};
		cursor: zoom-in;
	}

	.contact-details-area {
		${makeFullWidthBlock};
		height: max-content;
		padding: 5rem 2rem;

		.contact-heading {
			${_largerText};
			font-size: 1.5rem;
		}

		.contact-text {
			${_text};
			font-family: nunitoLight;
			line-height: 1rem;
			margin-bottom: 3rem;
		}

		.contact-sub-heading {
			${_largerText};
			font-size: 1.2rem;
		}

		.contact-form {
			${_customForm}
			${makeFullWidthBlock};
			padding-right: 3rem;
			height: max-content;
			font-size: 0.8rem;

			input[type="submit"] {
				align-self: flex-start;
				width: max-content;
				padding: 0 2rem;
				border-radius: unset;
				background-color: ${({ theme }) => theme.$darkAccentColor};
				color: ${({ theme }) => theme.$lessBrightColor};
				cursor: pointer;
				outline: none;
				border: none;
			}

			textarea {
				width: 25rem;
				height: 5rem;
				outline: none;
				border: unset;
				padding: 0.5rem 1rem;
				color: ${({ theme }) => theme.$whiteBGInputTextColor};
				margin-bottom: 3rem;

				&::placeholder {
					text-transform: capitalize;
					font-family: nunitoLight;
					color: ${({ theme }) => theme.$singleProductMainTextColor};
				}
			}
		}
	}
`;