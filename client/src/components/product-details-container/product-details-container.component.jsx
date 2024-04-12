import { ProductDetailsDisplay } from "../product-details-display/product-details-display.component";
import { RatingDiv } from "../rating-div/rating-div.component";
import { AccordionListStyled } from "../shop-accordion/shop-accordion.styles";
import { ProductDetailsContainerStyled } from "./product-details-container.styles";

export const ProductDetailsContainer = ({ product }) => {
	return (
		<ProductDetailsContainerStyled>
			<ProductDetailsDisplay productImage={product.image} />
			<div className="product-bottom-wrapper">
				<div className="product-visual-description-wrapper">
					<p className="product-name">{product.name}</p>
					<div className="products-ratings-div">
						<span>Reviews</span>
						<RatingDiv ratings={product.ratings} />
					</div>
					<div className="product-price-div">
						<p className="product-price">${product.discountedPrice.toFixed(2)}</p>
						<del className="cancelled-price">
							<i>${product.price.toFixed(2)}</i>
						</del>
					</div>
					<p className="product-brief-details">{product.title}</p>
					<div className="product-visual-details-divs">
						<div className="PVD-div">
							<span className="PVD-title">Size:</span>
							<ul>
								{product.sizes.map((size, i) => (
									<li className="product-size-list" key={i}>
										{size}
									</li>
								))}
							</ul>
						</div>
						<div className="PVD-div">
							<span className="PVD-title">Color:</span>
							<ul>
								{product.colors.list.map((color) => (
									<AccordionListStyled $listId={`C-${color.id}`} id={`C-${color.id}`} className={product.colors.className} key={color.id} />
								))}
							</ul>
						</div>
						<div className="PVD-div">
							<span className="PVD-title">Quantity:</span>
							<ul>
								<li className="">{product.quantity}</li>
							</ul>
						</div>
					</div>

					<div className="product-text-details-divs">
						<div className="PTD-div">
							<span className="PTD-title">Product Id:</span>
							<ul>
								<li>{product.PId}</li>
							</ul>
						</div>
						<div className="PTD-div">
							<span className="PTD-title">Category:</span>
							<ul>
								<li>{product.category}</li>
							</ul>
						</div>
						<div className="PTD-div">
							<span className="PTD-title">Tags:</span>
							<ul>
								{product.tags.map((tag, i) => (
									<li key={i}>{tag}</li>
								))}
							</ul>
						</div>
					</div>
					<div className="product-cta-buttons">
						<button className="product-cta-button secondary">ADD TO WISHLIST</button>
						<button className="product-cta-button primary">ADD TO CART</button>
					</div>
				</div>
				<div className="product-text-description-wrapper">
					<p className="PTD-title">DESCRIPTION</p>
					<p className="PTD-text">{product.description}</p>
				</div>
			</div>
		</ProductDetailsContainerStyled>
	);
};
