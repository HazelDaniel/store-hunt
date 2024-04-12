import styled from "styled-components";
import { makeAbsoluteTopDiv, makeColFlexCenter, makeColFlexEnd, makeColFlexStart, makeFullSizeBlock, makeFullWidthBlock, makeRowFlexCenter, makeRowFlexStart, removeScrollBar } from "../../styles/styles";

export const ProductDetailsDisplayStyled = styled.div`
	${makeFullWidthBlock};
	${makeColFlexCenter};

	@media screen and (min-width: 641px) {
		${makeRowFlexCenter};
		padding-bottom: 10%;
	}

	background-color: ${({ theme }) => theme.$lessBrightColor};
	position: relative;
	height: 55rem;
	padding-bottom: 30%;

	.product-wrapper-decorator {
		${makeAbsoluteTopDiv};
		width: 0;
		height: 0;
		border-bottom: 55rem solid ${({ theme }) => theme.$darkAccentColor};
		border-right: 101vw solid transparent;
	}

	.product-previews-div {
		order: 2;
		width: 78%;
		position: inherit;
		${makeRowFlexStart};
		align-items: center;
		overflow: auto !important;
		${removeScrollBar};

		@media screen and (min-width: 641px) {
			padding-top: 10%;
			width: 30%;
			max-width: 8rem;
			${makeColFlexStart};
			order: 0;
			margin-left: auto;
			height: 100%;
		}

		.product-preview-div {
			width: 25%;
			height: 10rem;
			margin: 0 0.5rem;
			min-width: 8rem;
			border-radius: 0.2rem;
			cursor: pointer;

			&.active {
				transform: scale(0.9);
			}

			@media screen and (min-width: 641px) {
				${makeFullWidthBlock};
				margin: 1rem 0;
				min-height: 10rem !important;
			}

			img {
				height: 100%;
				${makeFullSizeBlock};
				object-fit: cover;
				aspect-ratio: 1 / 1;
				box-shadow: inset 0.2rem 0.3rem 0.5rem ${({ theme }) => theme.$homeOutlineColor};
			}
		}
	}

	.product-view-div {
		${makeFullWidthBlock};
		
		@media screen and (min-width: 641px) {
			margin-bottom: 0;
			margin: auto;
			margin-left: 0;
			width: 70%;
		}

		position: inherit;
		height: 70%;
		margin: auto;
		margin-bottom: 10rem;
		${makeColFlexEnd};
		align-items: center;
		
		img {
			filter: drop-shadow(0.2rem 0.2rem 0.5rem $darkAccentColor);
			height: 80%;
		}
	}
`;
