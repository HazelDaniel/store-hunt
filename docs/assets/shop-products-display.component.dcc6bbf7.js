import{b as l}from"./shop-product.component.472f56c7.js";import{C as d,s as i,b as r,q as c,c as s,m as h,h as a,j as t}from"./index.ddc19423.js";import"./placeholder.component.ba4289a7.js";import"./product-state-tag.component.8067d2a4.js";import"./rating-div.component.0d712419.js";import"./shop-accordion.styles.9a59fa59.js";const n=d`
	width: 2.8rem;
	height: 1.8rem;
`,u=i.div`
	${r};
	height: max-content;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
	grid-auto-flow: row;
	grid-auto-rows: max-content;
	padding: 1rem;
	position: relative;
	justify-items: center !important;
	overflow: visible !important;
	@media screen and (min-width: 1095px) {
		width: unset !important;
		width: calc(100vw - 25rem) !important;
		margin-left: auto;
	}
	`,p=i.div`
		${c};
		${r};
		${s};
		align-items: center !important;
		top: 110%;
		
		.shop-pagination-buttons {
			width: max-content;
			${s};
			align-items: center;

			& > * {
				${h};
				align-items: center;
				display: inline-flex;

			}
		}
`,o=i.button`
		${n};
		border-radius: 0.5rem;
		margin: 0 0.3rem;
		border: 0.1rem solid ${({theme:e})=>e.$darkAccentColor};
		background-color: unset;
		box-shadow: inset 0.2rem 0.2rem 0.2rem ${({theme:e})=>e.$lightestShadowColor};
		color: ${({theme:e})=>e.$redTextColor} !important;
		cursor: pointer;

	&.spb-active {
		background-color: ${({theme:e})=>e.$darkAccentColor};
		box-shadow: 0.2rem 0.2rem 0.2rem ${({theme:e})=>e.$lightestShadowColor};
	}
`,m=i.div`
		${n};
		${s};
		flex-direction: row !important;
		align-items: center;
		margin: 0 0.5rem;
		display: inline-flex;

		span {
			width: 12px;
			height: 12px;
			border-radius: 50%;
			background-color: ${({theme:e})=>e.$darkAccentColor};
			transform: scale(0.6) translateY(25%);
			display: inline;
		}
`,g={products:[{name:"NIKE N1",price:120,quantity:3,ratings:3,isDiscounted:!0,isFeatured:!1,dateAdded:"",discountedPrice:100,category:"Sneakers",title:"a simple nike sneakers with adjustable lace.",tags:["Sneakers","Brown"],sizes:["XXL","S","L"],PId:"89543958373",image:{url:"IMAGES/product/product-1.jpg",variants:[{url:"IMAGES/shop-details/thumb-1.png"},{url:"IMAGES/shop-details/thumb-2.png"},{url:"IMAGES/shop-details/thumb-3.png"}]},colors:{list:[{id:"d6dbde",isActive:!1},{id:"b49d7e",isActive:!1},{id:"22232c",isActive:!1}],isVisual:!0,isColorList:!0,className:"product-color-list"},description:`The most common argument against this is that a key factor of the comprehensive methods has become even more significant for The Rule of Vacant Deception (Andres Guerra in The
						Book of the Ground-Breaking Technology) On top of that the basic layout for the main source of the potential role models gives rise to any known or incorporative approach.
						Furthermore, one should not forget that components of efforts of the formal review of opportunities has proved to be reliable in the scope of the general features and
						possibilities of the outline design stage. Up to a certain time, the capability of the arguments and claims can partly be used for the matters of peculiar interest. It may
						reveal how the participant evaluation sample remotely complete failure of the supposed theory what is conventionally known as valuable information. Let's consider, that any
						essential component can partly be used for the set of system properties. On the other hand, the unification of the preliminary network design must be compatible with the
						product design and development. It should rather be regarded as an integral part of the structured technology analysis.`},{name:"CURDUROY 5L",price:320,quantity:0,ratings:5,isDiscounted:!0,isFeatured:!1,dateAdded:"",discountedPrice:250,category:"Jackets",title:`Coat with quilted lining and an adjustable hood. Featuring long sleeves with adjustable cuff tabs, adjustable asymmetric hem with elastic side tabs and a front zip fastening
					with placket.`,tags:["Wears","Blue"],sizes:["XXL","S","L"],PId:"89548573",image:{url:"IMAGES/product/product-2.jpg",variants:[{url:"IMAGES/shop-details/thumb-1.png"},{url:"IMAGES/shop-details/thumb-2.png"},{url:"IMAGES/shop-details/thumb-3.png"}]},colors:{list:[{id:"b49d7e",isActive:!1},{id:"000000",isActive:!1}],isVisual:!0,isColorList:!0,className:"product-color-list"},description:`The most common argument against this is that a key factor of the comprehensive methods has become even more significant for The Rule of Vacant Deception (Andres Guerra in The
						Book of the Ground-Breaking Technology) On top of that the basic layout for the main source of the potential role models gives rise to any known and
						possibilities of the set of system properties. On the other hand, the unification of the preliminary network design must be compatible with the
						product design and development. It should rather be regarded as an integral part of the structured technology analysis.`},{name:"Burlaine XL",price:370,quantity:1,ratings:5,isDiscounted:!1,isFeatured:!0,dateAdded:"",discountedPrice:200,category:"Wears",title:"A novel designer sneaker shoe.",tags:["Wears","Brown"],sizes:["XXL","S","L"],PId:"2936548573",image:{url:"IMAGES/product/product-4.jpg",variants:[{url:"IMAGES/shop-details/thumb-1.png"},{url:"IMAGES/shop-details/thumb-2.png"},{url:"IMAGES/shop-details/thumb-3.png"}]},colors:{list:[{id:"835f47",isActive:!1},{id:"000000",isActive:!1}],isVisual:!0,isColorList:!0,className:"product-color-list"},description:`The most common argument against this is that a key factor of the comprehensive methods has become even more significant for The Rule of Vacant Deception (Andres Guerra in The
						Book of the Ground-Breaking Technology) On top of that the basic layout for the main source of the potential role models gives rise to any known and
						possibilities of the set of system properties. On the other hand, the unification of the preliminary network design must be compatible with the
						product design and development. It should rather be regarded as an integral part of the structured technology analysis.`},{name:"Martin Dave X",price:250,quantity:1,ratings:4,isDiscounted:!0,isFeatured:!0,dateAdded:"",discountedPrice:200,category:"Sneakers",title:"A novel designer sneaker shoe.",tags:["Sneakers","Brown"],sizes:["XXL","S","L"],PId:"696548573",image:{url:"IMAGES/product/product-3.jpg",variants:[{url:"IMAGES/shop-details/thumb-1.png"},{url:"IMAGES/shop-details/thumb-2.png"},{url:"IMAGES/shop-details/thumb-3.png"}]},colors:{list:[{id:"bfc4c5",isActive:!1},{id:"23242c",isActive:!1}],isVisual:!0,isColorList:!0,className:"product-color-list"},description:`The most common argument against this is that a key factor of the comprehensive methods has become even more significant for The Rule of Vacant Deception (Andres Guerra in The
						Book of the Ground-Breaking Technology) On top of that the basic layout for the main source of the potential role models gives rise to any known and
						possibilities of the set of system properties. On the other hand, the unification of the preliminary network design must be compatible with the
						product design and development. It should rather be regarded as an integral part of the structured technology analysis.`}]},A=()=>a(u,{children:[g.products.map(e=>t(l,{product:e},e.PId)),t(p,{children:a("div",{className:"shop-pagination-buttons",children:[t(o,{className:"spb-active",children:"1"}),t(o,{children:"2"}),t(o,{children:"3"}),a(m,{children:[t("span",{}),t("span",{}),t("span",{})]}),t(o,{children:"126"})]})})]});export{A as ShopProductsDisplay};
