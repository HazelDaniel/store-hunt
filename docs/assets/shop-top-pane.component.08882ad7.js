import{s as o,b as i,e as l,f as s,m as n,c as r,p as h,q as c,h as t,j as a}from"./index.ddc19423.js";const p=o.div`
	${i};
	min-height: 15vh;
	background-color: ${({theme:e})=>e.$brightColor};
	height: 10rem;
	${l};
	justify-content: space-between;
	color: ${({theme:e})=>e.$darkAccentColor};
	padding: 0 1rem;
	position: relative;
	overflow: hidden !important;

	&::before {
		${s};
		${i};
		height: 3rem;
		background-color: ${({theme:e})=>e.$lessBrightColor};
	}

	& > div {
		margin-top: 3rem;
	}

	.shop-nav-label {
		margin-left: 1rem;
		width: max-content;
		min-width: 8rem;
		${n};
		align-items: flex-start;
		text-transform: uppercase;

		.shop-nav-label-title {
			font-family: nunito;
			font-size: 1.5rem;
			text-transform: capitalize !important;
			margin-bottom: 0.5rem;
		}

		.shop-nav-label-links-div {
			width: max-content;

			span {
				font-family: openSansLight;
				font-size: 0.9rem;
			}

			.shop-nav-label-divide {
				height: 0.7rem;
				overflow: hidden;
				${r};
				align-items: center;
				display: inline-flex;
				margin: 0 0.5rem;
				svg {
					height: 100%;
					path {
						fill: ${({theme:e})=>e.$darkAccentColor};
					}
				}
			}

			.shop-nav-label-link {
				font-weight: 500;
				/* ${h}; */
				font-weight: bolder !important;
			}
		}
	}

	.shop-cart-total-div {
		margin-right: 4vw;
		${l};

		.shop-bag-icon-div {
			height: 2rem;
			${n};
			align-items: center;
			position: relative;
			align-self: center;

			svg {
				height: 80%;
				transform: scale(0.9);
			}

			span {
				${c};
				top: 40%;
				font-size: 45%;
				text-align: center;
			}
		}

		.shop-cart-total-price {
			font-size: 0.8rem;
			margin: auto;
			text-align: center;
		}
	}
`,m=({navText:e})=>t(p,{children:[t("div",{className:"shop-nav-label",children:[a("p",{className:"shop-nav-label-title",children:e.subPageText?e.subPageText:e.rootPageText}),t("div",{className:"shop-nav-label-links-div",children:[a("span",{className:"shop-nav-label-link",children:e.rootPageText}),a("span",{className:"shop-nav-label-divide",children:a("svg",{viewBox:"0 0 5 8",fill:"none",children:a("path",{d:"M.96.579l3.23 3.23a.27.27 0 010 .381L.96 7.421a.27.27 0 11-.381-.38L3.619 4 .58.96A.27.27 0 01.96.579z",fill:"#08090A"})})}),e.subPageText&&a("span",{children:e.subPageText})]})]}),t("div",{className:"shop-cart-total-div",children:[t("span",{className:"shop-bag-icon-div",children:[a("svg",{width:"30",height:"35",viewBox:"0 0 30 35",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:a("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.3571 7.5V8.57143H9.64286V7.5C9.64286 4.54133 12.0413 2.14286 15 2.14286C17.9587 2.14286 20.3571 4.54133 20.3571 7.5ZM22.5 7.5C22.5 3.35786 19.1421 0 15 0C10.8579 0 7.5 3.35786 7.5 7.5V8.57143H0V30C0 32.3669 1.91878 34.2857 4.28571 34.2857H25.7143C28.0812 34.2857 30 32.3669 30 30V8.57143H22.5V7.5ZM27.8571 10.7143V30C27.8571 31.1835 26.8978 32.1429 25.7143 32.1429H4.28571C3.10225 32.1429 2.14286 31.1835 2.14286 30V10.7143H27.8571Z",fill:"#08090A"})}),a("span",{children:"200"})]}),a("p",{className:"shop-cart-total-price",children:"$400.00"})]})]});export{m as ShopTopPane};
