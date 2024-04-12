import { ShopProductsDisplay } from "../shop-products-display/shop-products-display.component"
import { ShopSidePane } from "../shop-side-pane/shop-side-pane.component"
import { ShopBodyStyled } from "./shop-body.styles"


export const ShopBody = () => {

	return (
		<ShopBodyStyled>
			<ShopProductsDisplay />
			<ShopSidePane />

		</ShopBodyStyled>
	)
}