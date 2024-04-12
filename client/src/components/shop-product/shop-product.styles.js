import styled, { css } from "styled-components";
import { debug, makeAbsoluteBottomLeftDiv, makeAbsoluteTopLefDiv, makeAbsoluteTopRightDiv, makeColFlexCenter, makeColFlexStart, makeFullHeightBlock, makeFullSizeBlock, makeFullWidthBlock, makeRowFlexCenter, makeRowFlexEnd, makeUnSelectableTextDiv } from "../../styles/styles";
import { _computeListColor } from "../shop-accordion/shop-accordion.styles";
import { SwiperSlide } from "swiper/react";



const _TAlignText = css`
	height: 2rem;
	top: 0.5rem;
	font-family: latoLight !important;
	font-weight: 600;
`;


export const ShopProductStyled = styled(SwiperSlide)`
	${makeColFlexStart};
	align-items: center;
	overflow: hidden;
	margin: 10%;
	${makeUnSelectableTextDiv};
	max-width: 12rem;
	height: 16rem;

	* {
		overflow: inherit;
	}

	& > div {
		${makeFullWidthBlock};
	}

	.SPD-top {
		${makeColFlexCenter};
		position: relative;
		height: 65%;
		background-color: ${({ theme }) => theme.$lessBrightColor};
      background-color: ${({ theme }) => theme.$singleProductMainTextColor};
 

		.SPD-image-div {
			${makeFullSizeBlock};
			position: relative;

			img {
				${makeFullSizeBlock};
				object-fit: cover;
				aspect-ratio: 3/2;
			}

			.SPD-top-cta-div {
				${makeAbsoluteTopRightDiv};
				${makeFullHeightBlock};
				width: 15%;
				${makeColFlexStart};
				align-items: center;
				padding: 1rem 0;
				background: linear-gradient(${({ theme }) => theme.$lessBrightColor} 0%, ${({ theme }) => theme.$homeOutlineColor} 100%);
				opacity: 0;
				transition: opacity 0.3s ease-in-out;

				div {
					${makeColFlexCenter};
					width: 1.5rem;
					height: 1.7rem;
					border-radius: 0.2rem;
					background-color: ${({ theme }) => theme.$lessBrightColor};
				}

				svg {
					${makeFullHeightBlock};
					cursor: pointer;
				}
			}
		}

		&:hover {
			.SPD-top-cta-div {
				opacity: 1;
			}
		}
	}

	.SPD-content {
		${makeFullWidthBlock};
		${makeColFlexCenter};
		align-items: flex-end;
		position: relative;
		height: 35%;
		text-transform: capitalize;
		border-bottom: .1rem solid ${({ theme,$isVariant }) => $isVariant?theme.$darkAccentColor: "unset"};
		&:hover {
			.SPD-top-cta-div {
				opacity: 1;
			}

			.SPDC-name {
				visibility: hidden !important;
			}
		}

		* {
			color: ${({ theme }) => theme.$darkAccentColor};
		}

		&:hover {
			.SPD-content-cta-div {
				opacity: 1;
			}

			.SPDC-name {
				opacity: 0;
			}
		}

		.SPD-content-cta-div {
			${makeAbsoluteTopLefDiv};
			${makeFullWidthBlock};
			${makeRowFlexEnd};
			cursor: pointer;
			justify-content: space-between;
			${_TAlignText};
			cursor: pointer;
			opacity: 0;
			transition: all 0.3s ease-in-out;
			z-index: 3;

			.SPD-content-colors-div {
				width: 40%;
				${makeFullHeightBlock};
				${makeRowFlexCenter};

				span {
					height: 0.6rem;
					width: 0.6rem;
					border-radius: 50%;
					margin: 0 0.3rem;
					border: 0.1rem solid ${({ theme }) => theme.$homeOutlineColor};
					transform: scale(1.1);

					&#C-2BCBD6 {
						background-color: #2bcbd6;
					}

					&#C-4878FC {
						background-color: #4878fc;
					}

					&#C-CD1613 {
						background-color: #cd1613;
					}
				}
			}
		}

		.SPDC-rating-div {
			margin-right: 0.5rem;
			width: 30%;
			${makeRowFlexEnd};
			height: 1rem;

			svg {
				height: 80%;

				& > path {
					// a toggle between these two fills to none will give us the rating effect we need
					&:first-of-type {
						fill: ${({ theme }) => theme.$accentColor};
					}

					&:last-of-type {
						fill: ${({ theme }) => theme.$accentColor};
					}
				}

				&:nth-of-type(n + 3) {
					& > path {
						// a toggle between these two fills to none will give us the rating effect we need
						&:first-of-type {
							fill: none;
						}

						&:last-of-type {
							fill: ${({ theme }) => theme.$accentColor};
						}
					}
				}
			}
		}

		.SPDC-name {
			${makeAbsoluteTopLefDiv};
			${_TAlignText};
			${makeRowFlexEnd};
			opacity: 1;
			transition: all 0.3s ease-in-out;
		}

		.SPDC-price {
			${makeAbsoluteBottomLeftDiv};
			${makeFullWidthBlock};
			bottom: 5%;
		}
	}
`;

export const ProductColorsListStyled = styled.span`
	${_computeListColor};
`;
