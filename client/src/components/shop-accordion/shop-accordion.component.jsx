import { memo } from "react";
import { useReducer } from "react";
import { initialShopAccordionState, shopAccordionReducer, __toggleAccordion } from "./shop-accordion.reducer";
import { AccordionListStyled, ShopAccordionStyled } from "./shop-accordion.styles";

export const ShopAccordion = memo(({ section,isFirst }) => {
	const [accordionState, accordionDispatch] = useReducer(shopAccordionReducer, initialShopAccordionState, (state = initialShopAccordionState) => state);
	return (
		<ShopAccordionStyled className={`shop-accordion  ${isFirst ? "first" : ""}`}>
			<div className={`SSPM-accordion`}>
				<p className="SSPM-section-title">{section.title.toUpperCase()}</p>
				<span
					className="SSPM-section-toggle"
					onClick={() => {
						accordionDispatch(__toggleAccordion());
					}}
				>
					<svg viewBox="0 0 5 8" fill="none" className={accordionState.accordionOpened ? "": "collapsed-toggler"}>
						<path fillRule="evenodd" clipRule="evenodd" d="M.96.579l3.23 3.23a.27.27 0 010 .381L.96 7.421a.27.27 0 11-.381-.38L3.619 4 .58.96a.27.27 0 01.38-.381z" fill="#08090A" />
					</svg>
				</span>
			</div>
			<ul className={`SSPM-section-list ${section.isVisual ? section.className : ""} ${accordionState.accordionOpened ? "": "collapsed"}`}>
				{section.list.map((entry,i) => {
					return (
						<AccordionListStyled className={entry.isActive && `active`} id={section.isColorList ? `C-${entry.id}` : ""} $listId={section.isColorList && `C-${entry.id}`} key={i}>
							{!section.isColorList && entry.value}
						</AccordionListStyled>
					);
				})}
			</ul>
		</ShopAccordionStyled>
	);
});
