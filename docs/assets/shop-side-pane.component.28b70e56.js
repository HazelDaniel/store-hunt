import{s as a,f as u,o as v,m as c,k as f,a as m,y as g,b as w,x as h,C as o,v as d,h as n,j as i}from"./index.ddc19423.js";import{ShopAccordion as S}from"./shop-accordion.component.89a28de3.js";import"./shop-accordion.styles.9a59fa59.js";const s={toggleSidePane:"TOGGLE_SIDE_PANE",openSidePane:"OPEN_SIDE_PANE"},p={sidePaneOpened:!1},C=e=>{switch(e.sidePaneOpened){case!0:return{sidePaneOpened:!1};case!1:return{sidePaneOpened:!0}}},A=e=>({...e,...C(e)}),$=e=>({...e,sidePaneOpened:!0}),x=(e=p,t)=>{switch(t.type){case s.toggleSidePane:return A(e);case s.openSidePane:return $(e);default:return e}},P=()=>({type:s.toggleSidePane}),b=()=>({type:s.openSidePane}),O={categories:{title:"categories",list:[{value:"MEN(200)",isActive:!0},{value:"WOMEN(150)",isActive:!1},{value:"HATS(100)",isActive:!1},{value:"KIDS(100)",isActive:!1},{value:"BAGS(100)",isActive:!1},{value:"SNEAKERS(100)",isActive:!1},{value:"JACKETS(100)",isActive:!1}],isVisual:!1},branding:{title:"branding",list:[{value:"LOUIS VUITTON",isActive:!1},{value:"CAVALLI",isActive:!0},{value:"NIKE",isActive:!1}],isVisual:!1},filterPrice:{title:"filter-price",list:[{value:"$0.00 - $50.00",isActive:!1},{value:"$50.00 - $100.00",isActive:!1},{value:"$100.00 - $150.00",isActive:!0}],isVisual:!1},size:{title:"size",list:[{value:"XXL",isActive:!0},{value:"S",isActive:!1},{value:"XL",isActive:!1},{value:"L",isActive:!1}],isVisual:!0,isColorList:!1,className:"size-list"},colors:{title:"colors",list:[{id:"4878FC",isActive:!0},{id:"CD1613",isActive:!1},{id:"2BCBD6",isActive:!1},{id:"000000",isActive:!1}],isVisual:!0,isColorList:!0,className:"colors-list"},tags:{title:"tags",list:[{value:"PRODUCT",isActive:!1},{value:"WOMAN",isActive:!1},{value:"HATS",isActive:!0}],isVisual:!0,isColorList:!1,className:"tags-list"}},L=({$closed:e=!1})=>e?o`
			position: fixed;
			left: 0% !important;
			z-index: 9;
			top: 45vh !important;
			svg {
				transform: scale(-1, 0.8);
			}
			@media screen and (min-width: 804px) and (max-width: 830) {
				svg {
					transform: scale(-1, 0.8);
				}
			}
			@media screen and (min-width: 830px) and (max-width: 1094) {
				right: 0;
				transform: translateX(-25%);

				svg {
					transform: scale(-1, 0.8);
				}
			}
		`:o`
			${h};
			top: 35%;
			right: -10%;
			@media screen and (min-width: 815px) and (max-width: 899px) {
				right: -9% !important;
			}
			@media screen and (min-width: 900px) {
				right: -8% !important;
			}
		`,k=({$closed:e})=>{if(!!e)return o`
		left: -100vw;
		box-shadow: unset;
	`},E=a.div`
	${u};
	${v};
	${c};
	align-items: center;
	z-index: 4;
	background-color: ${({theme:e})=>e.$lessBrightColor};
	width: 40%;
	max-width: 25rem !important;
	min-width: 20rem;
	padding: 1.5rem 1rem 1rem 0;
	box-shadow: 0.75rem 0 0.8rem #010000af;
	overflow: visible !important;
	transition: all 0.3s ease-in-out;
	* {
		overflow: visible;
	}

	${k};

	@media screen and (min-width: 1095px) {
		left: 0 !important;
		top: -2rem !important;
		height: calc(100% + 2rem) !important;
		box-shadow: unset !important;
	}
`,y=a.div`
	${f};
	${m};
	align-items: flex-start;
	border: 0.2rem solid ${({theme:e})=>e.$brightColor};
	border-left: none;
	padding: 2rem;
	padding-right: 1rem;
	position: relative;
	overflow: scroll;
	${g};
	overflow-x: visible !important;
	.shop-accordion {
		&.first {
			margin-top: 3rem;
		}
	}
`,N=a.div`
	${w};
	${m};
	align-items: center;
	max-height: 3rem !important;
	overflow: hidden;
	position: relative;
	justify-content: space-between;
	padding: 0.5rem;
	padding-right: 1rem;
	overflow: visible !important;
	background-color: ${({theme:e})=>e.$brightColor};
	box-shadow: 0.1rem 0.2rem 0.3rem ${({theme:e})=>e.$homeOutlineColor};

	span {
		${h};
		height: 2rem;
		overflow: visible !important;
		top: 25%;
		right: 3%;
		margin-right: 0.3rem;

		svg {
			height: 1.2rem;
			transform: scaleX(-1);

			path {
				fill: ${({theme:e})=>e.$accentColor};
			}
		}
	}

	input {
		padding: 0 1rem;
		width: 75%;
		all: unset;
		caret-color: ${({theme:e})=>e.$homeGoldLikeColor};
		overflow: hidden;

		&::placeholder {
			transform: scale(0.8);
			font-size: 0.7;
			height: max-content;
			text-align: start;
			color: ${({theme:e})=>e.$homeOutlineColor};
		}

		&::-webkit-search-cancel-button {
			-webkit-appearance: none;
		}
	}
`,T=a.div`
	width: 2rem;
	height: 8rem;
	${c};
	border-top-right-radius: 0.5rem;
	border-bottom-right-radius: 0.5rem;
	box-shadow: 0.1rem 0.2rem 0.8rem #010000af;
	background-color: ${({theme:e})=>e.$brightColor};
	svg {
		transform: scaleY(0.8);

		path {
			fill: ${({theme:e})=>e.$darkAccentColor};
		}
	}
	${L};
	@media screen and (min-width: 1095px) {
		display: none !important;
	}
`,_=(e,t)=>{window.addEventListener("resize",function(){this.innerWidth<1095||e(t)})},z=()=>{const[e,t]=d.exports.useReducer(x,p,r=>r);return d.exports.useEffect(()=>{_(t,b())},[]),n(E,{$closed:window.innerWidth>=1095||e.sidePaneOpened?!1:!e.sidePaneOpened,children:[n(y,{children:[n(N,{children:[i("span",{className:"search-icon",children:i("svg",{viewBox:"0 0 27 27",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M21.9375 10.9687C21.9375 4.91088 17.0266 0 10.9687 0C4.91088 0 0 4.91088 0 10.9687C0 17.0266 4.91088 21.9375 10.9687 21.9375C13.3964 21.9375 15.6398 21.1489 17.4568 19.8138L17.4553 19.8149C17.5051 19.8824 17.5605 19.947 17.6216 20.0081L24.1193 26.5057C24.7783 27.1648 25.8467 27.1648 26.5057 26.5057C27.1648 25.8467 27.1648 24.7783 26.5057 24.1193L20.0081 17.6216C19.947 17.5605 19.8824 17.5051 19.8149 17.4553C21.1493 15.6386 21.9375 13.3957 21.9375 10.9687ZM10.9687 20.25C5.84286 20.25 1.6875 16.0946 1.6875 10.9687C1.6875 5.84286 5.84286 1.6875 10.9687 1.6875C16.0946 1.6875 20.25 5.84286 20.25 10.9687C20.25 16.0946 16.0946 20.25 10.9687 20.25Z"})})}),i("input",{type:"search",name:"",id:"",placeholder:"search for your product here"})]}),Object.values(O).map((r,l)=>i(S,{section:r,isFirst:l===0},l))]}),i(T,{$closed:window.innerWidth>=1095||e.sidePaneOpened?!1:!e.sidePaneOpened,onClick:()=>{window.innerWidth>=1095||t(P())},children:i("svg",{width:"40",height:"30",viewBox:"0 0 40 30",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:i("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M22.9123 2.91144C22.3245 2.67988 21.6097 2.8676 21.3159 3.33071L14.1764 14.5807C14.0089 14.8446 14.0089 15.1553 14.1764 15.4192L21.3159 26.6692C21.6097 27.1323 22.3245 27.32 22.9123 27.0885C23.5001 26.8569 23.7383 26.2938 23.4444 25.8307L16.5711 15L23.4444 4.16923C23.7383 3.70612 23.5001 3.14298 22.9123 2.91144Z",fill:"#08090A"})})})]})};export{z as ShopSidePane};
