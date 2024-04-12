import styled from "styled-components";
import { debug, makeAbsoluteTopDiv, makeAbsoluteTopLefDiv, makeColFlexCenter, makeColFlexStart, makeFullWidthBlock, makeRowFlexCenter, makeRowFlexStart } from "../../styles/styles";



export const ShopTopPaneStyled = styled.div`
	${makeFullWidthBlock};
	min-height: 15vh;
	background-color: ${({ theme }) => theme.$brightColor};
	height: 10rem;
	${makeRowFlexStart};
	justify-content: space-between;
	color: ${({ theme }) => theme.$darkAccentColor};
	padding: 0 1rem;
	position: relative;
	overflow: hidden !important;

	&::before {
		${makeAbsoluteTopLefDiv};
		${makeFullWidthBlock};
		height: 3rem;
		background-color: ${({ theme }) => theme.$lessBrightColor};
	}

	& > div {
		margin-top: 3rem;
	}

	.shop-nav-label {
		margin-left: 1rem;
		width: max-content;
		min-width: 8rem;
		${makeColFlexCenter};
		align-items: flex-start;
		text-transform: uppercase;

		.shop-nav-label-title {
			font-family: nunito;
			font-size: 1.5rem;
			text-transform: capitalize !important;
			margin-bottom: 0.5rem;
		}

		.shop-nav-label-links-div {
			width: max-content;

			span {
				font-family: openSansLight;
				font-size: 0.9rem;
			}

			.shop-nav-label-divide {
				height: 0.7rem;
				overflow: hidden;
				${makeRowFlexCenter};
				align-items: center;
				display: inline-flex;
				margin: 0 0.5rem;
				svg {
					height: 100%;
					path {
						fill: ${({ theme }) => theme.$darkAccentColor};
					}
				}
			}

			.shop-nav-label-link {
				font-weight: 500;
				/* ${debug}; */
				font-weight: bolder !important;
			}
		}
	}

	.shop-cart-total-div {
		margin-right: 4vw;
		${makeRowFlexStart};

		.shop-bag-icon-div {
			height: 2rem;
			${makeColFlexCenter};
			align-items: center;
			position: relative;
			align-self: center;

			svg {
				height: 80%;
				transform: scale(0.9);
			}

			span {
				${makeAbsoluteTopDiv};
				top: 40%;
				font-size: 45%;
				text-align: center;
			}
		}

		.shop-cart-total-price {
			font-size: 0.8rem;
			margin: auto;
			text-align: center;
		}
	}
`;