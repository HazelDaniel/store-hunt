import styled, { css } from "styled-components";
import { debug, makeAbsoluteTopDiv, makeColFlexCenter, makeFullWidthBlock, makeRowFlexCenter } from "../../styles/styles";

const _makeButtonSize = css`
	width: 2.8rem;
	height: 1.8rem;
`;

export const ShopProductsDisplayStyled = styled.div`
	${makeFullWidthBlock};
	height: max-content;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
	grid-auto-flow: row;
	grid-auto-rows: max-content;
	padding: 1rem;
	position: relative;
	justify-items: center !important;
	overflow: visible !important;
	@media screen and (min-width: 1095px) {
		width: unset !important;
		width: calc(100vw - 25rem) !important;
		margin-left: auto;
	}
	`;


export const PaginationButtonsDivStyled = styled.div`
		${makeAbsoluteTopDiv};
		${makeFullWidthBlock};
		${makeRowFlexCenter};
		align-items: center !important;
		top: 110%;
		
		.shop-pagination-buttons {
			width: max-content;
			${makeRowFlexCenter};
			align-items: center;

			& > * {
				${makeColFlexCenter};
				align-items: center;
				display: inline-flex;

			}
		}
`;

export const ShopPaginationButtonStyled = styled.button`
		${_makeButtonSize};
		border-radius: 0.5rem;
		margin: 0 0.3rem;
		border: 0.1rem solid ${({ theme }) => theme.$darkAccentColor};
		background-color: unset;
		box-shadow: inset 0.2rem 0.2rem 0.2rem ${({ theme }) => theme.$lightestShadowColor};
		color: ${({ theme }) => theme.$redTextColor} !important;
		cursor: pointer;

	&.spb-active {
		background-color: ${({ theme }) => theme.$darkAccentColor};
		box-shadow: 0.2rem 0.2rem 0.2rem ${({ theme }) => theme.$lightestShadowColor};
	}
`;

export const ShopLoadMoreButtonStyled = styled.div`
		${_makeButtonSize};
		${makeRowFlexCenter};
		flex-direction: row !important;
		align-items: center;
		margin: 0 0.5rem;
		display: inline-flex;

		span {
			width: 12px;
			height: 12px;
			border-radius: 50%;
			background-color: ${({ theme }) => theme.$darkAccentColor};
			transform: scale(0.6) translateY(25%);
			display: inline;
		}
`;