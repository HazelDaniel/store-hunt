import {default as styled, css} from "styled-components";
import { makeAbsoluteTopLefDiv, makeFullWidthBlock, makeRowFlexCenter } from "../../styles/styles";



const _computeTagColorFromState = ({ $key, theme }) => {
	return css`
		color: ${theme[$key.color]};
	`;
};

export const ProductStateTagStyled = styled.div`
	${makeAbsoluteTopLefDiv};
	width: 45%;
	top: 15%;
	transform: rotateZ(-40deg);
	left: -25%;
	z-index: 2;
	${makeRowFlexCenter};
	align-items: center;
	padding: 0 1rem;
	width: 80%;
	background-color: ${({ theme }) => theme.$brightColor};
	box-shadow: 0.1rem 0.2rem 0.4rem ${({ theme }) => theme.$lightestShadowColor};

	p {
		${makeFullWidthBlock};
		height: 1.3rem;
		text-align: center;
		font-size: 0.8rem;
		font-family: manjariMedium;
		transform: translateY(25%);
		${_computeTagColorFromState};
	}
`;
