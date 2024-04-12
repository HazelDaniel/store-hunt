import { Placeholder } from "../placeholder/placeholder.component";
import { ProductStateTag } from "../product-state-tag/product-state-tag.component";
import { RatingDiv } from "../rating-div/rating-div.component";
import { useNavigate } from "react-router-dom";
import {
  ProductColorsListStyled,
  ShopProductStyled,
} from "./shop-product.styles";

export const ShopProduct = ({ product, $isVariant }) => {
  const navigate = useNavigate();
  // product = null;
  return product ? (
    <ShopProductStyled $isVariant={$isVariant} className="shop-product-div">
      <div className="SPD-top" onClick={(e)=> {
        if(e.target.tagName !== 'IMG')return;
        navigate("/product-details");

      }}>
        {/* TODO: REMEMBER TO FIRST CHECK IF THE PRODUCT HAS IS-FEATURED IS-DISCOUNTED , ETC. PROPERTIES BEFORE RENDERING THE STATE TAG */}
        <ProductStateTag
          message={product.quantity > 0 ? "out of stock" : "featured"}
        />
        <div className="SPD-image-div">
          <img src={product.image.url} alt="" />
          <div className="SPD-top-cta-div">
            <div>
              <svg
                width="16"
                height="15"
                viewBox="0 0 16 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M8 15C-7.53427 4.7355 3.56164 -3.24799 8 1.314C12.4384 -3.24799 23.5343 4.7355 8 15Z"
                  fill="#D3D3D3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="SPD-content">
        <div className="SPD-content-cta-div">
          + Add to cart
          <div className="SPD-content-colors-div">
            {product.colors.list.map((color) => (
              <ProductColorsListStyled
                id={`C-${color.id}`}
                $listId={`C-${color.id}`}
                key={color.id}
              />
            ))}
          </div>
        </div>
        <RatingDiv ratings={product.ratings} />
        <p className="SPDC-name">{product.name}</p>
        <p className="SPDC-price">${product.price.toFixed(2)}</p>
      </div>
    </ShopProductStyled>
  ) : (
    <Placeholder />
  );
};
