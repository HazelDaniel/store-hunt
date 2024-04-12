import { default as styled, css } from "styled-components";
import {
  debug,
  makeAbsoluteTopLefDiv,
  makeFullSizeBlock,
  makeFullWidthBlock,
  makeRowFlex,
} from "../../styles/styles.js";

export const UpperPaneStyled = styled.div`
  ${makeFullWidthBlock};
  height: max-content;
  background-color: ${({ theme }) => theme.$darkAccentColor};
  ${makeRowFlex};
  justify-content: space-evenly;
  align-items: center;
  padding: 0.5rem;
  z-index: 6;
  position: fixed;
  min-height: 5rem;
`;

export const AnnounceDivStyled = styled.div`
	position: fixed;
	left: 0;
	${makeFullWidthBlock};
	padding: 0.5rem 1rem;
	z-index: 9;
	top: 5.05rem;

	&::before {
		${makeAbsoluteTopLefDiv};
		${makeFullWidthBlock};
		position: fixed;
		height: 0.05rem;
		background-color: ${({ theme }) => theme.$DirectoryBlurColor};
		backdrop-filter: blur(2px);
		top: 5rem;
		z-index: 8 !important;
	}

	height: 2.5rem;
	background-color: ${({ theme }) => theme.$darkAccentColor};

	.announce-text {
   width: max-content;
		color: ${({ theme }) => theme.$homeGoldLikeColor};
		animation-name: horizontalSlideShow;
		animation-duration: 20s;
		animation-timing-function: cubic-bezier(0.215, 0.3, 0.9, 1);
		animation-iteration-count: infinite;
	}
	@keyframes horizontalSlideShow {
		from {
			transform: translateX(90vw);
		}
		to {
			transform: translateX(-26vw);
		}
	}
`;
