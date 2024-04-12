import styled from "styled-components";

export const MobileNavTogglerStyled = styled.div`
  margin-right: 1rem;
  transform: scale(0.7);

  .open {
    width: 4rem;
    height: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    cursor: pointer;
    transition: opacity 0.2s linear;

    &:hover {
      opacity: 0.8;
    }

    span {
      display: block;
      height: 0.2rem;
      width: 80%;
      border-radius: 4rem;
      background-color: ${({ theme }) => theme.$brightColor};
      position: absolute;
      overflow: hidden;
      transition: all 0.4s ease;

      &:nth-child(1) {
        margin-top: 0.5rem;
        z-index: 9;
      }

      &:nth-child(2) {
        margin-top: 1.25rem;
        transition: transform 0.3s ease-in-out;
      }

      &:nth-child(3) {
        margin-top: 2rem;
      }
    }
  }

  .opened {
    span:nth-child(1) {
      transform: rotate(45deg) translateY(0.6rem) translateX(0.6rem);
    }

    span:nth-child(2) {
      transform: scale(0, 1.3) rotate(30deg);
      border-radius: 50%;
      background-color: #2654858a;
      visibility: hidden;
    }

    span:nth-child(3) {
      transform: rotate(-45deg) translateY(-0.5rem) translateX(0.5rem);
    }
  }

  span {
    z-index: -1;
  }
  @media screen and (min-width: 641px) {
    display: none !important;
  }
`;
