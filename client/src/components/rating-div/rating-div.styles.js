import styled, { css } from "styled-components";
import { makeRowFlexEnd, makeRowFlexStart } from "../../styles/styles";
import { _makeCenteredDivSize } from "../product-details-container/product-details-container.styles";


const _computeRatingsCount = ({ $ratings }) => {

	return css`
		&:nth-of-type(n + ${$ratings + 1}) {
			& > path {
				// a toggle between these two fills to none will give us the rating effect we need
				&:first-of-type {
					fill: none;
				}

				&:last-of-type {
					fill: ${({ theme }) => theme.$accentColor};
				}
			}
		}
	`;
};

export const RatingDivStyled = styled.div`
	margin-right: 0.5rem;
	width: 30%;
	height: 1rem;
	${makeRowFlexEnd};

	svg {
		height: 80%;

		& > path {
			// a toggle between these two fills to none will give us the rating effect we need
			&:first-of-type {
				fill: ${({ theme }) => theme.$accentColor};
			}

			&:last-of-type {
				fill: ${({ theme }) => theme.$accentColor};
			}
		}

		${_computeRatingsCount};
	}
`;
