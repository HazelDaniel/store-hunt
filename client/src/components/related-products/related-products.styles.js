import styled from "styled-components";
import {
  makeColFlexStart,
  makeFullHeightBlock,
  makeFullWidthBlock,
  makeRowFlexCenter,
  makeRowFlexStart,
  makeUnSelectableTextDiv,
} from "../../styles/styles";

export const RelatedProductsStyled = styled.section`
  ${makeUnSelectableTextDiv};
  ${makeFullWidthBlock};
  height: 30rem;
  background-color: ${({ theme }) => theme.$brightColor};
  color: ${({ theme }) => theme.$darkAccentColor};
  padding: 3rem;
  position: relative;
  padding-bottom: 5rem;

  .related-products-title {
    &,
    * {
      font-family: nunito;
      font-size: 1.8rem;
    }

    ${makeFullWidthBlock};
    ${makeRowFlexCenter};
    height: max-content;
    margin-bottom: 2rem;

    span {
      margin-left: 0.5rem;
      background-color: ${({ theme }) => theme.$darkAccentColor};
      color: ${({ theme }) => theme.$lessBrightColor};
      padding: 0 1rem;
      transform: translateX(-0.5rem);
      cursor: pointer;
      border-top-left-radius: 2rem;
    }
  }

  .related-products-wrapper {
    ${makeRowFlexStart};
    justify-content: flex-start !important;
    position: relative;
    padding-bottom: 3rem;

    .swiper-wrapper {
      justify-content: flex-start;
      margin-left: 0;
      width: fit-content;
      overflow: visible;
    }

    .swiper-pagination {
      z-index: 3 !important;
      opacity: 1;
      position: absolute !important;
      /* width: 100vw; */
      bottom: 10%;
      @media screen and (min-width: 540px) and (max-width: 639px){
        bottom: 20%;
      }
      ${makeRowFlexCenter};
      

      & > * {
        background-color: red !important;

      }
      .swiper-pagination-bullet {
        /* background-color: ${({ theme }) => theme.$accentColor}!important; */
        background-color: #D1C3B9 !important;
        border: 1pt solid ${({ theme }) => theme.$darkAccentColor};
        &-active{
          /* background-color: ${({ theme }) => theme.$lessBrightColor} !important;  */
          background-color: #08090A;
          /* display: none; */
        }
      }
    }
    .shop-product-swiper-div {
      ${makeFullWidthBlock};
      ${makeColFlexStart};
      align-items: center;
      justify-content: center;
      align-self: flex-start;

      .shop-product-div {
        /* min-width: 15rem; */
        width: 12rem;
        height: 15rem;
        position: relative;
        @media screen and (min-width: 768px) {
          width: 100% !important;
        }
        overflow: hidden;

        /* margin: 2.5rem 2vw; */
        /* &:first-of-type {
					margin-left: 0;
				} */
      }
    }
  }
  .RPW-carousel-control {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.$lessBrightColor};
    box-shadow: 0.3rem 0.3rem 1.5rem
      ${({ theme }) => theme.$lightestShadowColor};
    position: absolute;
    top: 15rem;
    z-index: 3;
    transition: transform 0.2s ease-in;
    cursor: pointer;
    svg {
      ${makeFullHeightBlock};
      transform: scale(0.6);
      path {
        fill: ${({ theme }) => theme.$darkAccentColor};
      }
    }
    &.left {
      left: 1.5rem;
      @media screen and (min-width: 641px) {
        left: 3rem;
      }
      &:hover {
        transform: scale(0.8);
      }
    }
    &.right {
      right: 1.5rem;
      @media screen and (min-width: 641px) {
        right: 3rem;
      }
      transform: scaleX(-1);
      &:hover {
        transform: scale(-0.8, 0.8);
      }
    }
  }
`;
