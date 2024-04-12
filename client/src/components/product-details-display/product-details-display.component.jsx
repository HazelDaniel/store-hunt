import { useMemo } from "react";
import { useReducer } from "react";
import { detailsDisplayReducer, initialDetailsDisplayState, __sendToView } from "../../reducers/product-details-display.reducer";
import { ProductDetailsDisplayStyled } from "./product-details-display.styles";

const convertToArrayConcat = (image,variants) => {
	return [{ url: image }].concat(variants);
}
export const ProductDetailsDisplay = ({productImage}) => {
	const [detailsDisplayState, detailsDisplayDispatch] = useReducer(detailsDisplayReducer, initialDetailsDisplayState, (state = initialDetailsDisplayState) => state);
	const images = useMemo(() => convertToArrayConcat(productImage.url, productImage.variants), []);
	return (
		<ProductDetailsDisplayStyled>
			<div className="product-wrapper-decorator"></div>
			<div className="product-previews-div">
				{images.map((image, i) => (
					<div className={`product-preview-div ${detailsDisplayState.currentView === i ? "active" : ""}`} onClick={() => detailsDisplayDispatch(__sendToView(i))} key={i}>
						<img src={image.url} alt="" className="PPD-image" />
					</div>
				))}
			</div>
			<div className="product-view-div">
				<img src={images[detailsDisplayState.currentView].url} alt="" className="PVD-image" />
			</div>
		</ProductDetailsDisplayStyled>
	);
}