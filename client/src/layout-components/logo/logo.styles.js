import styled from "styled-components";
import {
  makeAbsoluteTopLefDiv,
  makeColFlexCenter,
  makeFullSizeBlock,
} from "../../styles/styles.js";

const _computeLogoSize = ({ $variant }) => {
		if ($variant === "footer") {
			return `2.2rem`;
		}
		return `3rem`;
	}
const _computeLogoMargin = ({ $variant }) => {
		if ($variant === "footer") {
			return `0 0 1.5rem 0`;
		}
		return `0 auto 0 1rem`;
	}

export const LogoStyled = styled.div`
	height: ${_computeLogoSize};
	width: ${_computeLogoSize};

	${makeColFlexCenter};
	margin: ${_computeLogoMargin};
	position: relative;

	a {
		${makeAbsoluteTopLefDiv};
		${makeFullSizeBlock};
	}

	svg {
		height: 80%;
	}
`;
