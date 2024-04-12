import { default as styled, css } from "styled-components";
import {
  debug,
  makeAbsoluteTopDiv,
  makeAbsoluteTopLefDiv,
  makeAbsoluteTopRightDiv,
  makeColFlexCenter,
  makeColFlexStart,
  makeFullSizeBlock,
  makeFullWidthBlock,
  makeRowFlexCenter,
} from "../../styles/styles";

const _imageAdjust = css`
  background-repeat: no-repeat;
  background-size: cover;
  padding: 2rem;

  &::before {
    display: none;
  }
`;

export const _sectionTitle = css`
  ${makeAbsoluteTopDiv};
  ${makeRowFlexCenter};
  width: max-content;
  height: 2.5rem;
  cursor: pointer;
  align-items: center;
  font-size: 1.5rem;
  transform: translateY(-3.5rem);
  z-index: 3;

  span {
    background-color: ${({ theme }) => theme.$darkAccentColor};
    color: ${({ theme }) => theme.$lessBrightColor};
    padding: 0.2rem;
    margin-left: 0.2rem;
    display: inline-flex !important;
    border-top-left-radius: 1.3rem;
  }
`;
export const DirectoryStyled = styled.div`
  ${makeFullWidthBlock};
  ${makeColFlexStart};
  height: max-content;
  min-height: 90vh;
  background-color: ${({ theme }) => theme.$lessBrightColor};
  overflow: hidden !important;
  padding: 5rem 0;
  position: relative;
  padding-top: 10rem;

  .directories {
    color: ${({ theme }) => theme.$darkAccentColor};
    max-width: 1800px;
    padding: 3rem 0;
    position: relative;
    z-index: 2;
    overflow: visible;

    .directories-title {
      ${_sectionTitle};
      top: -2rem;
      left: 50%;
      transform: translateX(-50%);
    }

    .directory {
      @media screen and (max-width: 640px) {
        height: 5rem !important;
        overflow: visible;
        border-radius: 0.3rem;
        margin: 2rem 0;

        &:nth-of-type(even) {
          transform: translateX(2rem);
          margin-bottom: 0;
        }

        &:nth-of-type(odd) {
          transform: translateX(-2rem);
        }

        &::before {
          border-radius: inherit;
        }

        .directory-tag-div {
          transform: scale(0.8);
          transform-origin: top;
        }
      }

      &::before {
        ${makeAbsoluteTopLefDiv}
        ${makeFullSizeBlock};
        background-color: #03030246;
        z-index: -1;
        backdrop-filter: blur(2px);
      }

      .directory-tag-div {
        position: absolute;
        top: 10%;
        right: 10%;
        width: max-content;
        height: max-content;
        ${makeColFlexCenter};
        background-color: ${({ theme }) => theme.$darkAccentColor};
        color: ${({ theme }) => theme.$lessBrightColor};
        padding: 0.5rem;
        z-index: 3;

        @media screen and (max-width: 640px) {
          top: -5%;
        }

        .directory-title {
          font-family: openSansCondensedLight;
          font-size: 1.2rem;
          width: 8rem;
          text-align: start;
        }

        .directory-cta {
          background-color: transparent;
          border: none;
          width: 6rem;
          height: 3rem;
          color: inherit;
          cursor: pointer;
          position: relative;
          overflow: visible;
          font-size: 0.8rem;

          &:hover::before {
            height: 0;
            width: 0;
          }

          &::before {
            ${makeAbsoluteTopRightDiv};
            height: 110%;
            width: 3rem;
            right: -1rem;
            top: -0.5rem;
            z-index: -1;
            background-color: inherit;
            backdrop-filter: blur(0.2rem);
            background-color: ${({ theme }) => theme.$darkAccentColor};
            transition: all 0.3s ease-in-out;
            transition-delay: 0.05s;
          }

          &::after {
            ${makeAbsoluteTopLefDiv}
            ${makeFullSizeBlock};
            transform: scale(1.09);
            z-index: -2;
            border: 0.1rem solid ${({ theme }) => theme.$lessBrightColor};
          }
        }
      }

      img {
        @media screen and (max-width: 640px) {
          width: 5rem;
          border-radius: inherit;
        }
      }

      @media screen and (min-width: 676px) and (max-width: 1013px) {
        &:nth-of-type(7) {
          order: 8;
        }

        &.no-content {
          &:last-of-type {
            order: 7;
          }
        }
      }
      @media screen and (min-width: 641px) and (max-width: 676px) {
        &.no-content {
          display: none;
        }
      }
      @media screen and (min-width: 641px) {
        position: relative;
        height: 20rem;
        background: url("../IMAGES/dark-floral-background.jpg") no-repeat;
        background-attachment: fixed;
        background-size: cover;

        & > img {
          display: none;
        }
				&::before {
					transition: all 0.5s linear;
				}

        &:hover {
					&::before {
						background-color: #5353534f;
						filter: blur(5px);
						z-index: 1;
					}
        }

        &::before {
          backdrop-filter: blur(5px);
        }

        &.no-content {
          &:hover {
            background-color: unset;
            transform: unset;
          }

          &:nth-of-type(1) {
            background: url("../IMAGES/diagonal-stoke-bg-bottom.svg");
            ${_imageAdjust};
            background-position: 100% 100%;
          }

          &:last-of-type {
            background: url("../IMAGES/diagonal-stoke-bg-top.svg");
            ${_imageAdjust};
          }
        }
      }
    }

    @media screen and (min-width: 641px) {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
      grid-auto-flow: row;
      grid-auto-rows: max-content;
      grid-gap: 0.1rem;
      width: 95vw;
      height: max-content;
      margin: auto;
      margin-top: 3rem;
      & > div {
        border-radius: 2rem;
        border: 0.1rem solid #5c53534f;
        &.no-content {
          border: none;
				}
       
      .directories-title {
        top: -5rem !important;
      }
    }

    @media screen and (max-width: 640px) {
      ${makeColFlexStart};
      justify-content: space-evenly;
      align-items: center;
      width: 80%;
      margin: auto;
      height: max-content;
      min-height: max-content;
      position: relative;

      .directory {
        max-width: 50rem;
        ${makeColFlexCenter};
        position: relative;
        width: 25rem;
        max-width: 80%;
        height: 15rem;
        margin: 2rem 0;
        align-items: flex-end;

        &.no-content {
          display: none;
        }

        &::before {
          ${makeAbsoluteTopLefDiv};
          ${makeFullSizeBlock};
          background-color: ${({ theme }) => theme.$lightestShadowColor};
          z-index: 1;
          backdrop-filter: blur(2px);
        }

        img {
          ${makeAbsoluteTopLefDiv};
          ${makeFullSizeBlock};
          object-fit: cover;
          aspect-ratio: 1/1;
          z-index: 0;
          filter: grayscale(0.2);
          /* background: url("../IMAGES/amsterdam-big.jpg") !important; */
        }
      }
    }
  }
`;
