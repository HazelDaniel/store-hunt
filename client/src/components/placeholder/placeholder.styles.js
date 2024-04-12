import styled, { keyframes } from "styled-components";
import { makeColFlexStart, makeFullWidthBlock } from "../../styles/styles";

export const PlaceholderStyled = styled.div`
	height: 16rem;
	width: 12rem;
	${makeColFlexStart};
	`;

export const PlaceholderSectionStyled = styled.div`
	${makeFullWidthBlock};
	height: 15%;
	&:first-of-type{
		height: 30%;
		margin-bottom: 0;
	}
	&:nth-of-type(2n){
		margin-top: 0;
		margin-bottom: 0;
	}
	margin: 10% 0;
	background: linear-gradient(to right, ${({ theme }) => theme.$accentColor} 0%, ${({ theme }) => theme.$brightColor} 50%, ${({ theme }) => theme.$brightColor} 100%);
	animation-name: blinkingPlaceholder;
	animation-timing-function: ease-in-out;
	animation-duration: calc(2 * 1.6183s);
	animation-iteration-count: infinite;
	animation-direction: both;
	@keyframes blinkingPlaceholder {
		from {
			background: linear-gradient(to right, ${({ theme }) => theme.$accentColor} 0%, ${({ theme }) => theme.$brightColor} 50%, ${({ theme }) => theme.$brightColor} 100%);
		}
		25% {
			background: linear-gradient(to right, ${({ theme }) => theme.$accentColor} 0%, ${({ theme }) => theme.$accentColor} 50%, ${({ theme }) => theme.$brightColor} 100%);
		}
		50% {
			background: linear-gradient(to right, ${({ theme }) => theme.$brightColor} 0%, ${({ theme }) => theme.$accentColor} 50%, ${({ theme }) => theme.$accentColor} 100%);
		}
		75% {
			background: linear-gradient(to right, ${({ theme }) => theme.$brightColor} 0%, ${({ theme }) => theme.$brightColor} 50%, ${({ theme }) => theme.$accentColor} 100%);
		}
		to {
			background: linear-gradient(to right, ${({ theme }) => theme.$accentColor} 0%, ${({ theme }) => theme.$brightColor} 50%, ${({ theme }) => theme.$brightColor} 100%);
		}
	}
`;
