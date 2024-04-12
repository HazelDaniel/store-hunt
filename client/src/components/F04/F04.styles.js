import styled from "styled-components";
import { debug, makeColFlexCenter, makeFullSizeBlock, makeRowFlexCenter, removeScrollBar } from "../../styles/styles";

export const F04Styled = styled.div`
	height: 100vh;
	width: 100vw;
	top: 0;
	left: 0;
	position: relative;
	${makeColFlexCenter};
	${removeScrollBar};
	padding: 3rem;
	position: fixed;
	z-index: 5;
	background: url("IMAGES/404/404.png");
	background-size: cover;
	background-color: ${({ theme }) => theme.$brightColor};
	p {
		&:last-of-type {
			color: #fc2222;
			font-family: Arial, Helvetica, sans-serif;
			font-family: manjariLight;
		}
	}
	button {
		border: unset;
		outline: unset;
		background-color: #08090a;
		height: 2rem;
		width: max-content;
		padding: 0 1rem;
		color: #ffffff;
		cursor: pointer;
		
	}
`;

export const F04CodeTextStyled = styled.p`
	font-size: 3rem;
	font-family: manjariMedium;
	font-weight: 700;
	${makeRowFlexCenter};
	color: ${({ theme }) => theme.$darkAccentColor} !important;
	transform: scale(2);
	text-transform: uppercase;
`;
