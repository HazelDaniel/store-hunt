import { createGlobalStyle, css } from "styled-components";

//FUNCTIONS
export const removeScrollBar = () => css`
  &::-webkit-scrollbar {
    display: none !important;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none !important;
  scrollbar-width: none !important;
`;

export const makeUnSelectableTextDiv = () => css`
  * {
    &::selection {
      background-color: transparent;
    }
  }
`;
export const debug = css`
  border: 0.1rem solid red;
  background-color: #0000ff44;
`;
export const makeFlexCenter = css`
  display: flex;
  align-items: center;
`;
export const makeFlex = css`
  display: flex;
  align-items: center;
`;
export const makeFlexEnd = css`
  display: flex;
  align-items: flex-end;
`;
export const makeRowFlex = css`
  display: flex;
  flex-direction: row;
`;
export const makeRowFlexStart = css`
  ${makeRowFlex};
  flex-direction: row;
  justify-content: flex-start;
`;
export const makeRowFlexCenter = css`
  ${makeFlex};
  flex-direction: row;
  justify-content: center;
`;
export const makeRowFlexEnd = css`
  ${makeFlex};
  flex-direction: row;
  justify-content: flex-end;
`;
export const makeColFlexStart = css`
  ${makeFlex};
  flex-direction: column;
  justify-content: flex-start;
`;
export const makeColFlexCenter = css`
  ${makeFlex};
  flex-direction: column;
  justify-content: center;
`;
export const makeColFlexEnd = css`
  ${makeFlex};
  flex-direction: column;
  justify-content: flex-end;
`;
export const makeFullWidthBlock = css`
  display: block;
  width: 100%;
`;
export const makeFullHeightBlock = css`
  display: block;
  height: 100%;
`;
export const makeFullSizeBlock = css`
  ${makeFullWidthBlock};
  ${makeFullHeightBlock};
`;
export const makeAbsoluteDiv = css`
  position: absolute;
  content: "";
`;
export const makeAbsoluteTopDiv = css`
  ${makeAbsoluteDiv};
  top: 0;
`;
export const makeAbsoluteTopRightDiv = css`
  ${makeAbsoluteTopDiv};
  right: 0;
`;
export const makeAbsoluteTopLefDiv = css`
  ${makeAbsoluteTopDiv};
  left: 0;
`;
export const makeAbsoluteBottomDiv = css`
  ${makeAbsoluteDiv};
  bottom: 0;
`;
export const makeAbsoluteBottomRightDiv = css`
  ${makeAbsoluteBottomDiv};
  right: 0;
`;
export const makeAbsoluteBottomLeftDiv = css`
  ${makeAbsoluteBottomDiv};
  left: 0;
`;
export const makeMainContainer = css`
  margin-top: 5rem;
  ${makeFullWidthBlock};
  ${makeColFlexStart};

  height: max-content;
  position: relative;
  min-height: 100vh;
`;

//GLOBAL
export const GlobalCSS = createGlobalStyle`
  @font-face {
    font-family: openSansCondensedLight;
    src: url("../../src/assets/fonts/open-sans-condensed/OpenSans-CondLight.ttf");
  }
  @font-face {
    font-family: openSansLight;
    font-style: normal;
    font-weight: 300;
    src: url('../../src/assets/fonts/OpenSans/OpenSans-Light.ttf'); /* IE9 Compat Modes */
    
  }
  @font-face {
    font-family: openSansMedium;
      font-style: normal;
      font-weight: 400;
      src: url('../../src/assets/fonts/open-sans-v34-latin/open-sans-v34-latin-regular.eot'); /* IE9 Compat Modes */
      src: local(''),
      url('../../src/assets/fonts/open-sans-v34-latin/open-sans-v34-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
      url('../../src/assets/fonts/open-sans-v34-latin/open-sans-v34-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
      url('../../src/assets/fonts/open-sans-v34-latin/open-sans-v34-latin-regular.woff') format('woff'), /* Modern Browsers */
      url('../../src/assets/fonts/open-sans-v34-latin/open-sans-v34-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
      url('../../src/assets/fonts/open-sans-v34-latin/open-sans-v34-latin-regular.svg#OpenSans') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: latoMedium;
    font-style: normal;
    font-weight: 400;
    src: url('../../src/assets/fonts/lato-v23-latin/lato-v23-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('../../src/assets/fonts/lato-v23-latin/lato-v23-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../../src/assets/fonts/lato-v23-latin/lato-v23-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
    url('../../src/assets/fonts/lato-v23-latin/lato-v23-latin-regular.woff') format('woff'), /* Modern Browsers */
    url('../../src/assets/fonts/lato-v23-latin/lato-v23-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
    url('../../src/assets/fonts/lato-v23-latin/lato-v23-latin-regular.svg#Lato') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: latoLight;
    font-style: normal;
    font-weight: 300;
    src: url('../../src/assets/fonts/LATO/Lato-Light.ttf'); /* IE9 Compat Modes */
  }
  @font-face {
    font-family: manjariMedium;
    font-style: normal;
    font-weight: 400;
    src: url('../../src/assets/fonts/manjari-v9-latin/manjari-v9-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('../../src/assets/fonts/manjari-v9-latin/manjari-v9-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../../src/assets/fonts/manjari-v9-latin/manjari-v9-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
    url('../../src/assets/fonts/manjari-v9-latin/manjari-v9-latin-regular.woff') format('woff'), /* Modern Browsers */
    url('../../src/assets/fonts/manjari-v9-latin/manjari-v9-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
    url('../../src/assets/fonts/manjari-v9-latin/manjari-v9-latin-regular.svg#Manjari') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: manjariLight;
    font-style: normal;
    font-weight: 100;
    src: url('../../src/assets/fonts/Manjari/Manjari-Thin.ttf'); /* IE9 Compat Modes */
  }
  @font-face {
    font-family: robotoMedium;
    font-style: normal;
    font-weight: 400;
    src: url('../../src/assets/fonts/roboto-v30-latin/roboto-v30-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('../../src/assets/fonts/roboto-v30-latin/roboto-v30-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../../src/assets/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
    url('../../src/assets/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff') format('woff'), /* Modern Browsers */
    url('../../src/assets/fonts/roboto-v30-latin/roboto-v30-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
    url('../../src/assets/fonts/roboto-v30-latin/roboto-v30-latin-regular.svg#Roboto') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: poppinsLight;
    font-style: normal;
    font-weight: 300;
    src: url('../../src/assets/fonts/poppins-v20-latin/poppins-v20-latin-300.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('../../src/assets/fonts/poppins-v20-latin/poppins-v20-latin-300.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../../src/assets/fonts/poppins-v20-latin/poppins-v20-latin-300.woff2') format('woff2'), /* Super Modern Browsers */
    url('../../src/assets/fonts/poppins-v20-latin/poppins-v20-latin-300.woff') format('woff'), /* Modern Browsers */
    url('../../src/assets/fonts/poppins-v20-latin/poppins-v20-latin-300.ttf') format('truetype'), /* Safari, Android, iOS */
    url('../../src/assets/fonts/poppins-v20-latin/poppins-v20-latin-300.svg#Poppins') format('svg'); /* Legacy iOS */
  }
  @font-face {
    font-family: nunitoLight;
    font-style: normal;
    font-weight: 300;
    src: url('../../src/assets/fonts/Nunito-Light.ttf'); /* IE9 Compat Modes */
  }
  @font-face {
    font-family: nunito;
    font-style: normal;
    font-weight: 400;
    src: url('../../src/assets/fonts/nunito-v25-latin/nunito-v25-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
    url('../../src/assets/fonts/nunito-v25-latin/nunito-v25-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
    url('../../src/assets/fonts/nunito-v25-latin/nunito-v25-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
    url('../../src/assets/fonts/nunito-v25-latin/nunito-v25-latin-regular.woff') format('woff'), /* Modern Browsers */
    url('../../src/assets/fonts/nunito-v25-latin/nunito-v25-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
    url('../../src/assets/fonts/nunito-v25-latin/nunito-v25-latin-regular.svg#Nunito') format('svg'); /* Legacy iOS */
  }
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-tap-highlight-color: transparent;
        font-family: openSansMedium;
      font-family: latoMedium;
    }
  button{
      border: unset;
      outline: unset;
      cursor: pointer;
  }
  #root {
    width: 100%;
    height: max-content;
    position: relative;
    min-height: 100vh;
    ${makeColFlexStart};
  }
    html {
        box-sizing: border-box;
        scroll-behavior: smooth;
        font-size: 16px;
        @media screen and (max-width: 650px){
          font-size: 14px;
        }
        @media screen and (max-width: 450px){
          font-size: 12px;
        }
        ${removeScrollBar};
        height: 100%;
        width: 100%;
    
        * {
            overflow: hidden;
        }
    }
    a{
        text-decoration: none;
    }
    body {
       ${makeFullWidthBlock};
        ${makeColFlexStart};
        height: max-content !important;
        min-height: 100vh;
        background-color: ${({ theme }) => theme.$lessBrightColor};
        position: relative;
        overflow: auto !important;
        width: 100vw;
    }
    input{
      caret-color: ${({ theme }) => theme.$darkAccentColor};
      color: ${({ theme }) => theme.$darkAccentColor};
    }
`;
