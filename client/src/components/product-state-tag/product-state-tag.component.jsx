import { useMemo } from "react";
import { ProductStateTagStyled } from "./product-state-tag.styles";

export const PRODUCT_STATE_DATA = {
	out_of_stock: {
		message: "out of stock",
		color: "$redTextColor",
	},
	new: {
		message: "new",
		color: "$greenTextColor",
	},
	featured: {
		message: "featured",
		color: "$blueTextColor",
	},
	latest: {
		message: "latest",
		color: "$lightestShadowColor",
	},
	discounted: {
		message: "discounted",
		color: "$homeOutlineColor"
	}
};
export const ProductStateTag = ({ message }) => {
	const messageKey = useMemo(() => PRODUCT_STATE_DATA[message.replace(/ /g, "_")]);
	return (
		<ProductStateTagStyled $key={messageKey}>
			<p>{ messageKey.message}</p>
		</ProductStateTagStyled>
	);
};
