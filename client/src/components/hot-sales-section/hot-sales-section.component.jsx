import { useCallback, useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { wait } from "../utils";
import { HotSalesStyled } from "./hot-sales-section.styles";
//ROUTING
import { useNavigate } from "react-router-dom";

const HotSalesItems = [
	{
		image: `IMAGES/home/goggle-removebg.png`,
		name: `BLU VISION`,
	},
	{
		image: `IMAGES/home/air-gapxl.png`,
		name: `AIR GAP XL`,
	},
];

export const HotSales = () => {
	const hotSalesList = useMemo(() => HotSalesItems, []);
	const [hotSalesIndex, setHotSalesIndex] = useState(0);
	const altHotSalesIndex = useMemo(() => (hotSalesIndex === 0 ? 1 : 0), [hotSalesIndex]);
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			await wait(10);
			setHotSalesIndex(altHotSalesIndex);
		})();
	}, [hotSalesIndex]);

	return (
		<HotSalesStyled>
			<p className="hot-sales-section-title">
				HOT<span>SALES</span>
			</p>
			<div className="hot-sales-section-wrapper">
				<div className="HSS-side-text-div">
					<img src="IMAGES/home/hot-sale-side-text.svg" alt="" />
				</div>
				<div className="HSS-display">
					<button className="HSS-cta" onClick={()=>navigate("shop")}>SHOP NOW</button>
					<img src={hotSalesList[hotSalesIndex].image} alt="" className="HSS-image" />
					<p className="HSS-product-name">{hotSalesList[hotSalesIndex].name}</p>
				</div>
				<span className="HSS-float big"></span>
				<span className="HSS-float small"></span>
				<span className="HSS-float small"></span>
				<span className="HSS-float"></span>
			</div>
		</HotSalesStyled>
	);
};
