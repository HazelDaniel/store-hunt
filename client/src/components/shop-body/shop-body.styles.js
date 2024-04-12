import styled from "styled-components";
import { debug, makeFullWidthBlock, makeRowFlexStart } from "../../styles/styles";


export const ShopBodyStyled = styled.div`
	${makeFullWidthBlock};
	${makeRowFlexStart};
	align-items: flex-start;
	height: fit-content;
	min-height: 100vh;
	padding-bottom: 30vh;
	position: relative;

	* {
		color: ${({ theme }) => theme.$shopSideTabListColor};
	}
	@media screen and (min-width: 1095px) {
		.shop-products-wrapper {
			width: unset !important;
			width: calc(100vw - 25rem) !important;
			margin-left: auto;
		}
	}
`;