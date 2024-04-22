import{CustomSelect as i}from"./custom-select.component.c8383bf7.js";import{s as n,b as r,e as a,r as s,h as o,j as e}from"./index.ddc19423.js";const l=n.div`
	${r};
	background-color: ${({theme:t})=>t.$brightColor};
	color: ${({theme:t})=>t.$darkAccentColor};
	padding: 0 1rem;
	${a};
	justify-content: space-between;
	align-items: flex-end;
	height: max-content;
	padding-bottom: 0.5rem;
	overflow: visible !important;

	* {
		font-family: latoMedium !important;
	}

	.shop-results-count-text {
		margin-left: 1rem;
		width: max-content;
		min-width: 40%;
		text-align: start;
	}
	.shop-filter-div {
		min-width: 40%;
		${s};
		overflow: visible !important;
		align-items: flex-end;

		span {
			margin-right: 1rem;
			padding-bottom: 0.2rem;
		}
	}

	@media screen and (min-width: 1095px) {
		margin-left: auto;
		width: calc(100% - 25rem) !important;

		.shop-results-count-text {
			min-width: max-content !important;
		}
	}
`,c=()=>o(l,{children:[e("p",{className:"shop-results-count-text",children:"Showing 1-12 of 126 results"}),o("div",{className:"shop-filter-div",children:[e("span",{children:"sort by price:"}),e(i,{})]})]});export{c as ShopTopDiv};
