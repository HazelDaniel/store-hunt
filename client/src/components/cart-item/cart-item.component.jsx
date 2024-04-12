import { CartItemStyled } from "./cart-item.styles";

export const CartItem = ({ item }) => {
  return (
    <CartItemStyled>
      <div
        className={`cart-product-details-div ${
          item.isModified ? "modified" : ""
        }`}
      >
        <div className="cart-image-div">
          <img src={`${item.imageUrl}`} alt="" />
        </div>
        <div className="cart-product-details">
          <p className="cart-product-name">{item.name}</p>
          <p className="cart-product-price">${`${item.price.toFixed(2)}`}</p>
        </div>
      </div>
      <div className="cart-quantity-details-div">
        <span className="cart-cta dec">-</span>
        <span className="cart-cta-text">{item.quantity}</span>
        <span className="cart-cta inc">+</span>
      </div>
      <div className="cart-price-details-text">
        ${`${(item.price * item.quantity).toFixed(2)}`}
      </div>
      <span className="cart-delete-div">
        <svg
          width="24"
          height="22"
          viewBox="0 0 24 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20.6744 0H9.98265C9.10098 0 8.26332 0.385267 7.68953 1.05469L0.375268 9.588C-0.109464 10.1535 -0.109464 10.988 0.375268 11.5535L7.68953 20.0868C8.26332 20.7563 9.10098 21.1415 9.98265 21.1415H20.6744C22.3424 21.1415 23.6946 19.7893 23.6946 18.1213V3.02022C23.6946 1.3522 22.3424 0 20.6744 0ZM8.8147 6.26159C9.10957 5.96672 9.58764 5.96672 9.88251 6.26159L13.1239 9.50296L16.3652 6.26159C16.6601 5.96672 17.1382 5.96672 17.4331 6.26159C17.7279 6.55645 17.7279 7.03453 17.4331 7.32939L14.1917 10.5708L17.4331 13.8121C17.7279 14.107 17.7279 14.5851 17.4331 14.8799C17.1382 15.1748 16.6601 15.1748 16.3652 14.8799L13.1239 11.6386L9.88251 14.8799C9.58764 15.1748 9.10957 15.1748 8.8147 14.8799C8.51983 14.5851 8.51983 14.107 8.8147 13.8121L12.0561 10.5708L8.8147 7.32939C8.51983 7.03453 8.51983 6.55645 8.8147 6.26159Z"
            fill="#BB9D88"
          />
        </svg>
      </span>
    </CartItemStyled>
  );
};
