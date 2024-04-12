import { ShopProduct } from "../shop-product/shop-product.component";
import { ShopProductsDisplayStyled, PaginationButtonsDivStyled, ShopPaginationButtonStyled, ShopLoadMoreButtonStyled } from "./shop-products-display.styles";

const SHOP_PRODUCTS_DATA = {
	products: [
		{
			name: `NIKE N1`,
			price: 120.0,
			quantity: 3,
			ratings: 3,
			isDiscounted: true,
			isFeatured: false,
			dateAdded: "",
			discountedPrice: 100.0,
			category: `Sneakers`,
			title: `a simple nike sneakers with adjustable lace.`,
			tags: [`Sneakers`, `Brown`],
			sizes: [`XXL`, `S`, `L`],
			PId: `89543958373`,
			image: {
				url: `IMAGES/product/product-1.jpg`,
				variants: [{ url: `IMAGES/shop-details/thumb-1.png` }, { url: `IMAGES/shop-details/thumb-2.png` }, { url: `IMAGES/shop-details/thumb-3.png` }],
			},
			colors: {
				list: [
					{ id: `d6dbde`, isActive: false },
					{ id: `b49d7e`, isActive: false },
					{ id: `22232c`, isActive: false },
				],
				isVisual: true,
				isColorList: true,
				className: `product-color-list`,
			},
			description: `The most common argument against this is that a key factor of the comprehensive methods has become even more significant for The Rule of Vacant Deception (Andres Guerra in The
						Book of the Ground-Breaking Technology) On top of that the basic layout for the main source of the potential role models gives rise to any known or incorporative approach.
						Furthermore, one should not forget that components of efforts of the formal review of opportunities has proved to be reliable in the scope of the general features and
						possibilities of the outline design stage. Up to a certain time, the capability of the arguments and claims can partly be used for the matters of peculiar interest. It may
						reveal how the participant evaluation sample remotely complete failure of the supposed theory what is conventionally known as valuable information. Let's consider, that any
						essential component can partly be used for the set of system properties. On the other hand, the unification of the preliminary network design must be compatible with the
						product design and development. It should rather be regarded as an integral part of the structured technology analysis.`,
		},
		{
			name: `CURDUROY 5L`,
			price: 320.0,
			quantity: 0,
			ratings: 5,
			isDiscounted: true,
			isFeatured: false,
			dateAdded: "",
			discountedPrice: 250.0,
			category: `Jackets`,
			title: `Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening
					with placket.`,
			tags: [`Wears`, `Blue`],
			sizes: [`XXL`, `S`, `L`],
			PId: `89548573`,
			image: {
				url: `IMAGES/product/product-2.jpg`,
				variants: [{ url: `IMAGES/shop-details/thumb-1.png` }, { url: `IMAGES/shop-details/thumb-2.png` }, { url: `IMAGES/shop-details/thumb-3.png` }],
			},
			colors: {
				list: [
					{ id: `b49d7e`, isActive: false },
					{ id: `000000`, isActive: false },
				],
				isVisual: true,
				isColorList: true,
				className: `product-color-list`,
			},
			description: `The most common argument against this is that a key factor of the comprehensive methods has become even more significant for The Rule of Vacant Deception (Andres Guerra in The
						Book of the Ground-Breaking Technology) On top of that the basic layout for the main source of the potential role models gives rise to any known and
						possibilities of the set of system properties. On the other hand, the unification of the preliminary network design must be compatible with the
						product design and development. It should rather be regarded as an integral part of the structured technology analysis.`,
		},
		{
			name: `Burlaine XL`,
			price: 370.0,
			quantity: 1,
			ratings: 5,
			isDiscounted: false,
			isFeatured: true,
			dateAdded: "",
			discountedPrice: 200.0,
			category: `Wears`,
			title: `A novel designer sneaker shoe.`,
			tags: [`Wears`, `Brown`],
			sizes: [`XXL`, `S`, `L`],
			PId: `2936548573`,
			image: {
				url: `IMAGES/product/product-4.jpg`,
				variants: [{ url: `IMAGES/shop-details/thumb-1.png` }, { url: `IMAGES/shop-details/thumb-2.png` }, { url: `IMAGES/shop-details/thumb-3.png` }],
			},
			colors: {
				list: [
					{ id: `835f47`, isActive: false },
					{ id: `000000`, isActive: false },
				],
				isVisual: true,
				isColorList: true,
				className: `product-color-list`,
			},
			description: `The most common argument against this is that a key factor of the comprehensive methods has become even more significant for The Rule of Vacant Deception (Andres Guerra in The
						Book of the Ground-Breaking Technology) On top of that the basic layout for the main source of the potential role models gives rise to any known and
						possibilities of the set of system properties. On the other hand, the unification of the preliminary network design must be compatible with the
						product design and development. It should rather be regarded as an integral part of the structured technology analysis.`,
		},
		{
			name: `Martin Dave X`,
			price: 250.0,
			quantity: 1,
			ratings: 4,
			isDiscounted: true,
			isFeatured: true,
			dateAdded: "",
			discountedPrice: 200.0,
			category: `Sneakers`,
			title: `A novel designer sneaker shoe.`,
			tags: [`Sneakers`, `Brown`],
			sizes: [`XXL`, `S`, `L`],
			PId: `696548573`,
			image: {
				url: `IMAGES/product/product-3.jpg`,
				variants: [{ url: `IMAGES/shop-details/thumb-1.png` }, { url: `IMAGES/shop-details/thumb-2.png` }, { url: `IMAGES/shop-details/thumb-3.png` }],
			},
			colors: {
				list: [
					{ id: `bfc4c5`, isActive: false },
					{ id: `23242c`, isActive: false },
				],
				isVisual: true,
				isColorList: true,
				className: `product-color-list`,
			},
			description: `The most common argument against this is that a key factor of the comprehensive methods has become even more significant for The Rule of Vacant Deception (Andres Guerra in The
						Book of the Ground-Breaking Technology) On top of that the basic layout for the main source of the potential role models gives rise to any known and
						possibilities of the set of system properties. On the other hand, the unification of the preliminary network design must be compatible with the
						product design and development. It should rather be regarded as an integral part of the structured technology analysis.`,
		},
	],
};

export const ShopProductsDisplay = () => {
	return (
		<ShopProductsDisplayStyled>
			{SHOP_PRODUCTS_DATA.products.map((product) => {
				return <ShopProduct product={product} key={product.PId} />;
			})}
			<PaginationButtonsDivStyled>
				<div className="shop-pagination-buttons">
					<ShopPaginationButtonStyled className="spb-active">1</ShopPaginationButtonStyled>
					<ShopPaginationButtonStyled>2</ShopPaginationButtonStyled>
					<ShopPaginationButtonStyled>3</ShopPaginationButtonStyled>
					<ShopLoadMoreButtonStyled>
						<span></span>
						<span></span>
						<span></span>
					</ShopLoadMoreButtonStyled>
					<ShopPaginationButtonStyled>126</ShopPaginationButtonStyled>
				</div>
			</PaginationButtonsDivStyled>
		</ShopProductsDisplayStyled>
	);
};
