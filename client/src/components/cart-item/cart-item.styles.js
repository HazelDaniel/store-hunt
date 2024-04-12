import styled from "styled-components";
import { makeAbsoluteTopLefDiv, makeColFlexCenter, makeFullHeightBlock, makeFullSizeBlock, makeFullWidthBlock, makeRowFlexCenter, makeRowFlexStart } from "../../styles/styles";
import { _centerAlignedDiv, _rightAlignedDiv } from "../cart/cart.styles";


export const CartItemStyled = styled.div`
		${makeFullWidthBlock};
		height: 10rem;
		margin-top: 0.5rem;
		padding-bottom: 1rem;
		border-bottom: 0.1rem solid ${({ theme }) => theme.$singleProductMainTextColor};
		position: relative;

		& > * {
			${makeAbsoluteTopLefDiv};
			top: 50%;
			transform: translateY(-50%);
		}

		.cart-product-details-div {
			height: 80%;
			top: 0.5rem;
			transform: unset;
			width: max-content;
			${makeRowFlexStart};
			font-size: 0.8rem;

			.cart-image-div {
				width: 6.5rem;
				${makeFullHeightBlock};

				img {
					${makeFullSizeBlock};
					object-fit: cover;
					aspect-ratio: 1/1;
				}
			}

			.cart-product-details {
				margin-left: 1rem;
				${makeColFlexCenter};

				p {
					${makeFullWidthBlock};
				}

				.cart-product-name {
					color: ${({ theme }) => theme.$accentColor};
				}

				.cart-product-price {
					color: ${({ theme }) => theme.$darkAccentColor};
				}
			}
		}

		.cart-quantity-details-div {
			width: max-content;
			min-width: 6rem;
			${_centerAlignedDiv};
			${makeRowFlexCenter};

			& > * {
				width: 2rem;
				height: 2rem;
				color: ${({ theme }) => theme.$darkAccentColor};
				${makeRowFlexCenter};
				align-items: center;
				display: inline-flex;
			}

			.cart-cta {
				border: 0.1rem solid ${({ theme }) => theme.$accentColor};
				cursor: pointer;
				transition: transform 0.2s ease-in;
				font-weight: bolder;

				&:hover {
					transform: scale(0.95);
				}
			}

			.cart-cta-text {
				font-size: 0.8rem;
				width: max-content;
				min-width: 2rem;
			}
		}

		.cart-price-details-text {
			${_rightAlignedDiv};
			color: ${({ theme }) => theme.$darkAccentColor};
		}

		.cart-delete-div {
			height: 1.5rem;
			width: 1.5rem;
			position: relative;
			margin-left: auto;
			${makeRowFlexCenter};
			align-items: center;
			svg {
				${makeFullHeightBlock};

				path {
					fill: ${({ theme }) => theme.$accentColor};
				}
			}
		}
		&.modified {
			background-color: ${({ theme }) => theme.$lightestShadowColor};
		}
`;