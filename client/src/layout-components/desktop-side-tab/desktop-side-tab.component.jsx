import { DesktopSideTabStyled } from "./desktop-side-tab.styles";
import { __toggleTheme } from "../../reducers/theme.reducer";
import { NavLink } from "react-router-dom";
export const DesktopSideTab = ({ themeDispatch }) => {
  return (
    <DesktopSideTabStyled>
      <div className="user-connected">
        <svg fill="none" viewBox="0 0 38 38">
          <g filter="url(#prefix__filter0_d_0_336)">
            <path
              d="M18.617 18.72a5.436 5.436 0 110-10.872 5.436 5.436 0 010 10.872zm0-16.307c8.005 0 14.495 6.49 14.495 14.495 0 8.005-6.49 14.495-14.495 14.495-8.006 0-14.495-6.49-14.495-14.495 0-8.006 6.49-14.495 14.495-14.495zM5.934 16.908a12.63 12.63 0 002.775 7.919c1.289-2.076 4.118-4.296 9.908-4.296 5.79 0 8.62 2.22 9.908 4.296a12.63 12.63 0 002.775-7.92c0-7.004-5.678-12.683-12.683-12.683S5.934 9.903 5.934 16.908z"
              fill="#BB9D88"
            />
          </g>
          <defs>
            <filter
              id="prefix__filter0_d_0_336"
              x={0.122}
              y={0.413}
              width={36.99}
              height={36.99}
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity={0} result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy={2} />
              <feGaussianBlur stdDeviation={2} />
              <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.376471 0" />
              <feBlend
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_336"
              />
              <feBlend
                in="SourceGraphic"
                in2="effect1_dropShadow_0_336"
                result="shape"
              />
            </filter>
          </defs>
        </svg>

        <div className="user-connected-cart-icon">
          <span></span>
          <NavLink to="cart">
            <svg
              width="43"
              height="44"
              viewBox="0 0 43 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_0_329)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.14516 2.95093H8.5627C9.08543 2.95093 9.54108 3.30669 9.66786 3.81382L10.5913 7.50764H37.0422C37.3811 7.50764 37.7024 7.65852 37.9188 7.9193C38.1352 8.18008 38.2243 8.52368 38.1618 8.85676L34.7443 27.0836C34.6433 27.6224 34.1728 28.0129 33.6246 28.0129H31.3463H15.3978H13.1194C12.5712 28.0129 12.1008 27.6224 11.9997 27.0836L8.58847 8.89015L7.67325 5.22929H5.14516C4.51601 5.22929 4.00598 4.71926 4.00598 4.09011C4.00598 3.46096 4.51601 2.95093 5.14516 2.95093ZM14.0648 25.7345H32.6792L35.6695 9.786H11.0745L14.0648 25.7345ZM10.8411 32.5696C10.8411 35.0862 12.8812 37.1263 15.3978 37.1263C17.9144 37.1263 19.9545 35.0862 19.9545 32.5696C19.9545 30.053 17.9144 28.0129 15.3978 28.0129C12.8812 28.0129 10.8411 30.053 10.8411 32.5696ZM26.7896 32.5696C26.7896 35.0862 28.8297 37.1263 31.3463 37.1263C33.8629 37.1263 35.903 35.0862 35.903 32.5696C35.903 30.053 33.8629 28.0129 31.3463 28.0129C28.8297 28.0129 26.7896 30.053 26.7896 32.5696ZM17.6761 32.5696C17.6761 33.8279 16.6561 34.8479 15.3978 34.8479C14.1395 34.8479 13.1194 33.8279 13.1194 32.5696C13.1194 31.3113 14.1395 30.2912 15.3978 30.2912C16.6561 30.2912 17.6761 31.3113 17.6761 32.5696ZM33.6246 32.5696C33.6246 33.8279 32.6046 34.8479 31.3463 34.8479C30.088 34.8479 29.0679 33.8279 29.0679 32.5696C29.0679 31.3113 30.088 30.2912 31.3463 30.2912C32.6046 30.2912 33.6246 31.3113 33.6246 32.5696Z"
                  fill="#BB9D88"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_0_329"
                  x="0.00598145"
                  y="0.950928"
                  width="42.1754"
                  height="42.1754"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.376471 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_0_329"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_0_329"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </NavLink>
        </div>
        <svg viewBox="0 0 37 41" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_d_0_321)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.3723 9.76131C25.3723 5.87633 22.2229 2.72693 18.3379 2.72693C14.4529 2.72693 11.3035 5.87633 11.3035 9.76131V10.7662H4.26917V30.8645C4.26917 33.0845 6.06882 34.8841 8.28881 34.8841H28.387C30.607 34.8841 32.4067 33.0845 32.4067 30.8645V10.7662H25.3723V9.76131ZM23.3625 9.76131V10.7662H13.3134V9.76131C13.3134 6.98632 15.5629 4.73675 18.3379 4.73675C21.1129 4.73675 23.3625 6.98632 23.3625 9.76131ZM18.3379 29.1059C6.63 21.3697 14.9928 15.3526 18.3379 18.791C21.6831 15.3526 30.0459 21.3697 18.3379 29.1059Z"
              fill="#BB9D88"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_0_321"
              x="0.269165"
              y="0.726929"
              width="36.1376"
              height="40.1572"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.376471 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_0_321"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_0_321"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
      <div className="UI-connected">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 33.83 33.83"
          onClick={() => themeDispatch(__toggleTheme())}
        >
          <g data-name="Layer 2">
            <g data-name="Layer 1">
              <path
                d="M9.18,9.18a10.93,10.93,0,1,0,3.49-2.35A11,11,0,0,0,9.18,9.18Zm7.76,16.89a9.13,9.13,0,1,1-.2-18.26h.2Z"
                data-name="Path 4642"
              />
              <path d="M16.92,33.83A16.92,16.92,0,1,1,33.83,16.92,16.94,16.94,0,0,1,16.92,33.83Zm0-31.13A14.22,14.22,0,1,0,31.14,16.92,14.24,14.24,0,0,0,16.92,2.7Z" />
            </g>
          </g>
        </svg>
        <svg viewBox="0 0 52 53" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_15_523)" filter="url(#filter0_d_15_523)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M46.4286 15.7142H9.36534L15.2899 21.639C15.9038 22.2528 15.9038 23.2476 15.2899 23.8615C14.6765 24.4751 13.6813 24.4751 13.0678 23.8615L4.46038 15.254C3.84654 14.6402 3.84654 13.6454 4.46038 13.0316L13.0678 4.4241C13.6813 3.81046 14.6765 3.81046 15.2899 4.4241C15.9038 5.03794 15.9038 6.03274 15.2899 6.64658L9.36534 12.5714H46.4286C47.2964 12.5714 48 13.275 48 14.1428C48 15.0106 47.2964 15.7142 46.4286 15.7142Z"
              fill="#F3F3EE"
            />
          </g>
          <g clipPath="url(#clip1_15_523)" filter="url(#filter1_d_15_523)">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.57143 37.7141H42.6347L36.7101 43.6389C36.0962 44.2527 36.0962 45.2475 36.7101 45.8614C37.3235 46.475 38.3187 46.475 38.9322 45.8614L47.5396 37.2539C48.1535 36.6401 48.1535 35.6453 47.5396 35.0314L38.9322 26.424C38.3187 25.8103 37.3235 25.8103 36.7101 26.424C36.0962 27.0378 36.0962 28.0326 36.7101 28.6465L42.6347 34.5712H5.57143C4.70361 34.5712 4 35.2749 4 36.1427C4 37.0105 4.70361 37.7141 5.57143 37.7141Z"
              fill="#F3F3EE"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_15_523"
              x="0"
              y="-2"
              width="52"
              height="32.3217"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.376471 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_15_523"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_15_523"
                result="shape"
              />
            </filter>
            <filter
              id="filter1_d_15_523"
              x="0"
              y="19.9999"
              width="52"
              height="32.3218"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.376471 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_15_523"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_15_523"
                result="shape"
              />
            </filter>
            <clipPath id="clip0_15_523">
              <rect
                width="44"
                height="24.3217"
                fill="white"
                transform="translate(4)"
              />
            </clipPath>
            <clipPath id="clip1_15_523">
              <rect
                width="44"
                height="24.3217"
                fill="white"
                transform="translate(4 21.9999)"
              />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className="misc-connected">
        <NavLink to="contact">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 414.937 414.937"
          >
            <g>
              <path
                d="M159.138,256.452c37.217,36.944,80.295,72.236,97.207,55.195c24.215-24.392,39.12-45.614,92.854-2.761
		c53.734,42.874,12.696,71.727-10.757,95.363c-27.064,27.269-128.432,1.911-228.909-97.804C9.062,206.71-17.07,105.54,10.014,78.258
		c23.46-23.637,52.006-64.879,95.254-11.458c43.269,53.394,22.161,68.462-2.054,92.861
		C86.31,176.695,121.915,219.501,159.138,256.452z M213.104,80.203c0,0-11.227-1.754-19.088,6.113
		c-8.092,8.092-8.445,22.032,0.082,30.552c5.039,5.039,12.145,6.113,12.145,6.113c13.852,2.598,34.728,6.997,56.944,29.206
		c22.209,22.208,26.608,43.084,29.206,56.943c0,0,1.074,7.106,6.113,12.145c8.521,8.521,22.46,8.174,30.552,0.082
		c7.861-7.86,6.113-19.087,6.113-19.087c-4.399-28.057-17.999-57.365-41.351-80.716C270.462,98.203,241.153,84.609,213.104,80.203z
		 M318.415,96.958c40.719,40.719,58.079,86.932,52.428,124.379c0,0-1.972,11.859,5.773,19.604
		c8.718,8.718,22.535,8.215,30.695,0.062c5.243-5.243,6.385-13.777,6.385-13.777c4.672-32.361-1.203-97.464-64.647-160.901
		C285.605,2.887,220.509-2.988,188.147,1.677c0,0-8.527,1.136-13.777,6.385c-8.16,8.16-8.656,21.978,0.061,30.695
		c7.746,7.746,19.604,5.773,19.604,5.773C231.484,38.879,277.696,56.24,318.415,96.958z"
              />
            </g>
          </svg>
        </NavLink>
      </div>
    </DesktopSideTabStyled>
  );
};
