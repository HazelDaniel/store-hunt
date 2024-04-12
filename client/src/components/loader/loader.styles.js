import { default as styled, css } from "styled-components";

import { debug, makeAbsoluteBottomDiv, makeColFlexCenter, makeColFlexEnd, makeRowFlexCenter } from "../../styles/styles";

export const LoaderOverlayStyled = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	z-index: 7;
	width: 100vw;
	height: 100vh;
	background-color: ${({ theme }) => theme.$darkAccentColor};
	backdrop-filter: blur(0.3rem);
	${makeColFlexCenter};
	font-size: calc(12px + (24 - 12) * (100vw - 320px) / (2560 - 320));
`;
export const LoaderTextStyled = styled.div`
	text-align: center;
	position: relative;
	overflow: visible;
	width: 13rem;
	height: 3rem;
	padding-top: 1.1rem;
	font-size: 1.5;
	background: ${({ theme }) => theme.$accentColor};
	font-family: manjariMedium;
	font-weight: 800;
	color: ${({ theme }) => theme.$darkAccentColor};
	${makeRowFlexCenter};
	span {
		font-family: manjariMedium;
		${makeColFlexCenter};
		align-items: flex-start;
		display: inline-flex;
		background-color: ${({ theme }) => theme.$darkAccentColor};
		color: ${({ theme }) => theme.$brightColor};
		margin-left: -.2rem;
		width: 50%;
		height: 120%;
		
	}
`;

export const LoaderUnderlineStyled = styled.div`
	height: 0.4rem;
	width: 100%;
	background: linear-gradient(${({ theme }) => theme.$accentColor} 0 0), linear-gradient(${({ theme }) => theme.$darkAccentColor} 0 0), ${({ theme }) => theme.$brightColor};
	background-size: 60% 100%;
	background-repeat: no-repeat;
	animation: p6 3s infinite;
	animation-direction: alternate;
	${makeAbsoluteBottomDiv};
	bottom: -0.4rem;
	left: 0;

	@keyframes p6 {
		0% {
			background-position: -150% 0, -150% 0;
		}
		66% {
			background-position: 250% 0, -150% 0;
		}
		100% {
			background-position: 250% 0, 250% 0;
		}
	}
`;
