import{ShopProductsDisplay as i}from"./shop-products-display.component.dcc6bbf7.js";import{ShopSidePane as r}from"./shop-side-pane.component.28b70e56.js";import{s as e,b as p,e as a,h as m,j as t}from"./index.ddc19423.js";import"./shop-product.component.472f56c7.js";import"./placeholder.component.ba4289a7.js";import"./product-state-tag.component.8067d2a4.js";import"./rating-div.component.0d712419.js";import"./shop-accordion.styles.9a59fa59.js";import"./shop-accordion.component.89a28de3.js";const s=e.div`
	${p};
	${a};
	align-items: flex-start;
	height: fit-content;
	min-height: 100vh;
	padding-bottom: 30vh;
	position: relative;

	* {
		color: ${({theme:o})=>o.$shopSideTabListColor};
	}
	@media screen and (min-width: 1095px) {
		.shop-products-wrapper {
			width: unset !important;
			width: calc(100vw - 25rem) !important;
			margin-left: auto;
		}
	}
`,x=()=>m(s,{children:[t(i,{}),t(r,{})]});export{x as ShopBody};
