import { useEffect } from "react";
import { useReducer } from "react";
import {
  initialShopSidePaneState,
  shopSidePaneReducer,
  __openSidePane,
  __toggleSidePane,
} from "../../reducers/shop-side-pane.reducer";
import { ShopAccordion } from "../shop-accordion/shop-accordion.component";
import { SHOP_SIDE_PANE_DATA } from "./shop-side-pane.data";
import {
  ShopSearchBoxStyled,
  ShopSidePaneContainerStyled,
  ShopSidePaneStyled,
  ShopSideTabTogglerStyled,
} from "./shop-side-pane.styles";

const handleWindowResize = (dispatch, action) => {
  window.addEventListener("resize", function () {
    if (this.innerWidth < 1095) return;
    dispatch(action);
  });
};

export const ShopSidePane = () => {
  const [sidePaneState, sidePaneDispatch] = useReducer(
    shopSidePaneReducer,
    initialShopSidePaneState,
    (state) => state
  );
  useEffect(() => {
    handleWindowResize(sidePaneDispatch, __openSidePane());
  }, []);
  return (
    <ShopSidePaneStyled
      $closed={
        window.innerWidth >= 1095
          ? false
          : sidePaneState.sidePaneOpened
          ? false
          : !sidePaneState.sidePaneOpened
          ? true
          : false
      }
    >
      <ShopSidePaneContainerStyled>
        <ShopSearchBoxStyled>
          <span className="search-icon">
            <svg
              viewBox="0 0 27 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.9375 10.9687C21.9375 4.91088 17.0266 0 10.9687 0C4.91088 0 0 4.91088 0 10.9687C0 17.0266 4.91088 21.9375 10.9687 21.9375C13.3964 21.9375 15.6398 21.1489 17.4568 19.8138L17.4553 19.8149C17.5051 19.8824 17.5605 19.947 17.6216 20.0081L24.1193 26.5057C24.7783 27.1648 25.8467 27.1648 26.5057 26.5057C27.1648 25.8467 27.1648 24.7783 26.5057 24.1193L20.0081 17.6216C19.947 17.5605 19.8824 17.5051 19.8149 17.4553C21.1493 15.6386 21.9375 13.3957 21.9375 10.9687ZM10.9687 20.25C5.84286 20.25 1.6875 16.0946 1.6875 10.9687C1.6875 5.84286 5.84286 1.6875 10.9687 1.6875C16.0946 1.6875 20.25 5.84286 20.25 10.9687C20.25 16.0946 16.0946 20.25 10.9687 20.25Z"
              />
            </svg>
          </span>
          <input
            type="search"
            name=""
            id=""
            placeholder="search for your product here"
          />
        </ShopSearchBoxStyled>
        {Object.values(SHOP_SIDE_PANE_DATA).map((section, i) => {
          return <ShopAccordion section={section} isFirst={i === 0} key={i} />;
        })}
      </ShopSidePaneContainerStyled>
      <ShopSideTabTogglerStyled
        $closed={
          window.innerWidth >= 1095
            ? false
            : sidePaneState.sidePaneOpened
            ? false
            : !sidePaneState.sidePaneOpened
            ? true
            : false
        }
        onClick={() => {
          if (window.innerWidth >= 1095) return;
          sidePaneDispatch(__toggleSidePane());
        }}
      >
        <svg
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M22.9123 2.91144C22.3245 2.67988 21.6097 2.8676 21.3159 3.33071L14.1764 14.5807C14.0089 14.8446 14.0089 15.1553 14.1764 15.4192L21.3159 26.6692C21.6097 27.1323 22.3245 27.32 22.9123 27.0885C23.5001 26.8569 23.7383 26.2938 23.4444 25.8307L16.5711 15L23.4444 4.16923C23.7383 3.70612 23.5001 3.14298 22.9123 2.91144Z"
            fill="#08090A"
          />
        </svg>
      </ShopSideTabTogglerStyled>
    </ShopSidePaneStyled>
  );
};
