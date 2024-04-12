import styled from "styled-components";
import { makeAbsoluteTopRightDiv, makeColFlexCenter, makeFullWidthBlock, makeRowFlexCenter } from "../../styles/styles";

export const CustomSelectStyled = styled.div`
	margin-right: 3.5vw;
	position: relative;
	font-family: Arial;
	width: 25vw;
	max-width: 15rem;
overflow: visible;
	select {
		display: none;
	}

	${makeColFlexCenter};

	.select-items {
		position: absolute;
		background-color: ${({ theme }) => theme.$accentColor};
		top: 110%;
		left: 0;
		right: 0;
		z-index: 5 !important;

		div {
			text-align: center;
			padding: 0.5rem;
			border: 1px solid transparent;
			border-color: transparent transparent ${({ theme }) => theme.$accentColor} transparent;
			cursor: pointer;
		}
	}

	.select-selected {
		${makeFullWidthBlock};
		position: relative;
		max-height: 2rem !important;
		padding-right: 2rem;
		text-align: center;
		color: ${({ theme }) => theme.$darkAccentColor} !important;
		${makeRowFlexCenter};
		border: 1px solid transparent;
		border-color: transparent transparent ${({ theme }) => theme.$accentColor} transparent;
		cursor: pointer;

		&::after {
			${makeAbsoluteTopRightDiv};
			top: 25%;
			right: 2%;
			width: 0;
			height: 0;
			border: 6px solid transparent;
			border-color: ${({ theme }) => theme.$accentColor} transparent transparent transparent;
		}

		&.select-arrow-active::after {
			border-color: transparent transparent ${({ theme }) => theme.$accentColor} transparent;
			transform: translateY(-1);
			transform-origin: top;
		}
	}

	.select-hide {
		display: none;
	}

	.select-items div:hover,
	.same-as-selected {
		background-color: #0000001a;
	}
`;
