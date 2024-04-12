import styled from "styled-components";
import { makeAbsoluteTopRightDiv, makeRowFlex } from "../../styles/styles.js";

export const SearchBoxStyled = styled.div`
  width: 10rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.$oddColor};
  position: relative;
  ${makeRowFlex};
  justify-content: space-between;
  padding-right: 1rem;
  overflow: visible;
  margin: 0 auto;

  span {
    height: 2rem;
    overflow: visible;

    svg {
      height: 80%;
      scale: 0.7;

      path {
        fill: ${({ theme }) => theme.$lessBrightColor};
      }
    }

    margin-right: 0.3rem;
  }

  .search-cancel {
    display: none;
  }
`;
export const SearchInputStyled = styled.input`
	padding: 0 1rem;
	width: 75%;
	all: unset;
	caret-color: ${({ theme }) => theme.$homeGoldLikeColor};
	overflow: hidden;
	color: ${({ theme }) => theme.$lessBrightColor};

	&::-webkit-search-cancel-button {
		-webkit-appearance: none;
	}

	&:focus ~ .search-cancel {
		display: block;
		${makeAbsoluteTopRightDiv};
		right: -10%;
		height: 100%;
		width: 2rem;

		svg {
			width: 100%;
			transform: scale(0.6);
		}
	}
`;
