import { Wrapper } from "../../layout-components/wrapper/wrapper.component"
import { ShopBody } from "../shop-body/shop-body.component"
import { ShopTopDiv } from "../shop-top-div/shop-top-div.component"
import { ShopTopPane } from "../shop-top-pane/shop-top-pane.component"


const shopNavData = {
	rootPageText: "shop",
}

export const Shop = () => {
	return (
		<Wrapper >
			<ShopTopPane navText={shopNavData}/>
			<ShopTopDiv />
			<ShopBody />
		</Wrapper>
	)
}
export default Shop;