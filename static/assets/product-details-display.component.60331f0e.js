import{s as l,b as o,m as p,c as h,q as u,e as w,y as g,a as v,k as $,z as x,v as n,h as y,j as t}from"./index.ddc19423.js";const m={sendToView:"SEND_TO_VIEW"},s={currentView:0},k=(e,r)=>({...e,currentView:r}),D=(e=s,r)=>{switch(r.type){case m.sendToView:return k(e,r.payload);default:return e}},b=e=>({type:m.sendToView,payload:e}),C=l.div`
	${o};
	${p};

	@media screen and (min-width: 641px) {
		${h};
		padding-bottom: 10%;
	}

	background-color: ${({theme:e})=>e.$lessBrightColor};
	position: relative;
	height: 55rem;
	padding-bottom: 30%;

	.product-wrapper-decorator {
		${u};
		width: 0;
		height: 0;
		border-bottom: 55rem solid ${({theme:e})=>e.$darkAccentColor};
		border-right: 101vw solid transparent;
	}

	.product-previews-div {
		order: 2;
		width: 78%;
		position: inherit;
		${w};
		align-items: center;
		overflow: auto !important;
		${g};

		@media screen and (min-width: 641px) {
			padding-top: 10%;
			width: 30%;
			max-width: 8rem;
			${v};
			order: 0;
			margin-left: auto;
			height: 100%;
		}

		.product-preview-div {
			width: 25%;
			height: 10rem;
			margin: 0 0.5rem;
			min-width: 8rem;
			border-radius: 0.2rem;
			cursor: pointer;

			&.active {
				transform: scale(0.9);
			}

			@media screen and (min-width: 641px) {
				${o};
				margin: 1rem 0;
				min-height: 10rem !important;
			}

			img {
				height: 100%;
				${$};
				object-fit: cover;
				aspect-ratio: 1 / 1;
				box-shadow: inset 0.2rem 0.3rem 0.5rem ${({theme:e})=>e.$homeOutlineColor};
			}
		}
	}

	.product-view-div {
		${o};
		
		@media screen and (min-width: 641px) {
			margin-bottom: 0;
			margin: auto;
			margin-left: 0;
			width: 70%;
		}

		position: inherit;
		height: 70%;
		margin: auto;
		margin-bottom: 10rem;
		${x};
		align-items: center;
		
		img {
			filter: drop-shadow(0.2rem 0.2rem 0.5rem $darkAccentColor);
			height: 80%;
		}
	}
`,V=(e,r)=>[{url:e}].concat(r),f=({productImage:e})=>{const[r,c]=n.exports.useReducer(D,s,(i=s)=>i),d=n.exports.useMemo(()=>V(e.url,e.variants),[]);return y(C,{children:[t("div",{className:"product-wrapper-decorator"}),t("div",{className:"product-previews-div",children:d.map((i,a)=>t("div",{className:`product-preview-div ${r.currentView===a?"active":""}`,onClick:()=>c(b(a)),children:t("img",{src:i.url,alt:"",className:"PPD-image"})},a))}),t("div",{className:"product-view-div",children:t("img",{src:d[r.currentView].url,alt:"",className:"PVD-image"})})]})};export{f as ProductDetailsDisplay};
