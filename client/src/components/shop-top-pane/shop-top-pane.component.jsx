import { NavThemeIconDivStyled } from "../../layout-components/mobile-nav-tab/mobile-nav-tab.styles";
import { ShopTopPaneStyled } from "./shop-top-pane.styles";

export const ShopTopPane = ({ navText }) => {
  return (
    <ShopTopPaneStyled>
      <div className="shop-nav-label">
        <p className="shop-nav-label-title">
          {navText.subPageText ? navText.subPageText : navText.rootPageText}
        </p>
        <div className="shop-nav-label-links-div">
          <span className="shop-nav-label-link">{navText.rootPageText}</span>
          <span className="shop-nav-label-divide">
            <svg viewBox="0 0 5 8" fill="none">
              <path
                d="M.96.579l3.23 3.23a.27.27 0 010 .381L.96 7.421a.27.27 0 11-.381-.38L3.619 4 .58.96A.27.27 0 01.96.579z"
                fill="#08090A"
              />
            </svg>
          </span>
          {navText.subPageText && <span>{navText.subPageText}</span>}
        </div>
      </div>
      <div className="shop-cart-total-div">
        <span className="shop-bag-icon-div">
          <svg
            width="30"
            height="35"
            viewBox="0 0 30 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M20.3571 7.5V8.57143H9.64286V7.5C9.64286 4.54133 12.0413 2.14286 15 2.14286C17.9587 2.14286 20.3571 4.54133 20.3571 7.5ZM22.5 7.5C22.5 3.35786 19.1421 0 15 0C10.8579 0 7.5 3.35786 7.5 7.5V8.57143H0V30C0 32.3669 1.91878 34.2857 4.28571 34.2857H25.7143C28.0812 34.2857 30 32.3669 30 30V8.57143H22.5V7.5ZM27.8571 10.7143V30C27.8571 31.1835 26.8978 32.1429 25.7143 32.1429H4.28571C3.10225 32.1429 2.14286 31.1835 2.14286 30V10.7143H27.8571Z"
              fill="#08090A"
            />
          </svg>
          <span>200</span>
        </span>
        <p className="shop-cart-total-price">$400.00</p>
      </div>
    </ShopTopPaneStyled>
  );
};
