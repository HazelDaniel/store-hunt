import { default as styled, css } from "styled-components";
import {
  makeAbsoluteTopLefDiv,
  makeFullSizeBlock,
  makeMainContainer,
  makeRowFlexEnd,
} from "../../styles/styles.js";
export const _overlay = css`
  background-color: ${({ theme }) => theme.$DirectoryBlurColorDark};
  backdrop-filter: blur(2px);
  display: none;
  ${makeMainContainer};
  ${makeAbsoluteTopLefDiv};
  position: fixed;
  ${makeFullSizeBlock};
  height: calc(100vh - 5rem);
  width: 100%;
`;
export const ModalOverlayStyled = styled.div`
  ${_overlay};
  ${makeRowFlexEnd};
  transform: translateX(100vw);
  z-index: 6 !important;
  background-color: transparent;

  &.opened {
    transform: unset;
    z-index: 6 !important;
    background-color: ${({ theme }) => theme.$DirectoryBlurColorDark};
  }
  @media screen and (min-width:641px) {
		display: none !important;
	}
`;
