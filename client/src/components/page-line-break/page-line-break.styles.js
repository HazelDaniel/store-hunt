import styled from "styled-components";
import { makeFullWidthBlock } from "../../styles/styles";

export const PageLineBreakStyled = styled.div`
	${makeFullWidthBlock};
	background-color: ${({ theme }) => theme.$lessBrightColor};
	height: 1rem;
	transform: translateY(-2rem);

	svg {
		${makeFullWidthBlock};
		path {
			stroke:  ${({ theme }) => theme.$singleProductMainTextColor};
		}
	}
`;