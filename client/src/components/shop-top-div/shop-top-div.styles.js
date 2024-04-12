import styled from "styled-components";
import { makeFullWidthBlock, makeRowFlexEnd, makeRowFlexStart } from "../../styles/styles";


export const ShopTopDivStyled = styled.div`
	${makeFullWidthBlock};
	background-color: ${({ theme }) => theme.$brightColor};
	color: ${({ theme }) => theme.$darkAccentColor};
	padding: 0 1rem;
	${makeRowFlexStart};
	justify-content: space-between;
	align-items: flex-end;
	height: max-content;
	padding-bottom: 0.5rem;
	overflow: visible !important;

	* {
		font-family: latoMedium !important;
	}

	.shop-results-count-text {
		margin-left: 1rem;
		width: max-content;
		min-width: 40%;
		text-align: start;
	}
	.shop-filter-div {
		min-width: 40%;
		${makeRowFlexEnd};
		overflow: visible !important;
		align-items: flex-end;

		span {
			margin-right: 1rem;
			padding-bottom: 0.2rem;
		}
	}

	@media screen and (min-width: 1095px) {
		margin-left: auto;
		width: calc(100% - 25rem) !important;

		.shop-results-count-text {
			min-width: max-content !important;
		}
	}
`;