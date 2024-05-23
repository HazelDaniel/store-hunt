import{C as r,b as o,a as d,e as m,m as c,s,c as i,i as h,f as n,n as g,o as l,k as $,h as a,j as e}from"./index.ddc19423.js";const p=r`
	left: 10%;
`,f=r`
		left: 45%;
`,u=r`
		left: 75%;
`;r`
		left: 10%;
`;const C=r`
		left: 42.5%;
`,v=r`
		left: 72.5%;
`,w=r`
	${o};
	min-height: 100vh;
	height: max-content;
	font-family: latoMedium;
	background-color: ${({theme:t})=>t.$lessBrightColor};
	${d};
	align-items: center;
	padding: 3rem 0;

	@media screen and (min-width: 910px) {
		${m};
		justify-content: center;
		padding: 3rem;
		align-items: flex-start;
	}
`,x=r`
	position: relative;
	${o};
	align-self: flex-end;
	height: max-content;
	margin: 0 auto;

	@media screen and (min-width: 910px) {
		width: 80vw;
		margin: 3rem;
	}
`,b=r`
	${c};
	height: max-content;
	padding: 1.5rem;
	margin-bottom: 3rem;
	width: max-content;
	min-width: 25vw;
	align-self: flex-end;
	background-color: ${({theme:t})=>t.$accentColorTrans};
	color: ${({theme:t})=>t.$darkAccentColor};
	margin-right: 3rem;

	@media screen and (min-width: 910px) {
		order: 2;
		justify-self: flex-end;
		align-self: flex-start;
	}
`,L=s.div`
	${w};

	padding-bottom: 25vh;

	button {
		outline: unset;
		border: unset;
		cursor: pointer;
		color: ${({theme:t})=>t.$darkAccentColor};
	}

	.cart-total-price-wrapper {
		${b};

		& > * {
			${o};
			${c};
			max-width: 15rem;
			margin: 0.5rem 0;
			min-height: 2.5rem;
			text-transform: uppercase;
			min-width: 15rem;
		}

		P {
			text-align: center;
			${i};

			span {
				margin-left: 10%;
				font-weight: lighter;
				font-family: latoLight;
				font-weight: bolder;
			}
		}

		button {
			background-color: ${({theme:t})=>t.$darkAccentColor};
			font-family: latoLight;
			color: ${({theme:t})=>t.$lessBrightColor};
		}
	}

	.cart-body {
		${x};
		.cart-heading-div {
			width: 95%;
			margin: 0 auto;
			height: 3rem;
			position: relative;
			color: ${({theme:t})=>t.$darkAccentColor};
			${h};
			font-size: 0.9rem;
			overflow: visible;

			& > * {
				${n};
				top: 50%;
				transform: translateY(-50%);
				text-align: center;
			}

			.product-title {
				${p};
			}

			.quantity-title {
				${f};
			}

			.total-title {
				${u};
			}

			&::after {
				${g};
				${o};
				bottom: -0.15rem;
				height: 0.3rem;
				background-color: ${({theme:t})=>t.$accentColor};
			}
		}

		.cart-items-div {
			width: 95%;
			margin: auto;
			height: max-content;
			min-height: 40vh;
			${d};
			align-items: center;
			padding-bottom: 12rem;
			border-bottom: 0.3rem solid ${({theme:t})=>t.$accentColor};
		}

		.cart-cta-div {
			width: max-content;
			min-width: 60vw;
			margin: 4rem auto;
			height: 3rem;
			${i};
			align-items: center;
			button {
				height: 80%;
				border: 0.1rem solid ${({theme:t})=>t.$darkAccentColor};
				padding: 0 1rem;
				width: max-content !important;
				min-width: 8rem;
				font-family: latoLight;
				font-size: 0.7rem;
				transition: transform 0.1s ease-in-out;
				&:first-of-type {
					background-color: transparent;
					margin-right: 3rem;
					&:hover {
						transform: scale(0.95);
					}
				}
				&:last-of-type {
					background-color: ${({theme:t})=>t.$darkAccentColor};
					color: ${({theme:t})=>t.$brightColor};
				}
			}
		}

		&::before {
			${n};
			${o};
			height: 3rem;
			background-color: ${({theme:t})=>t.$brightColor};
			box-shadow: 0.2rem 0.2rem 3rem ${({theme:t})=>t.$lightestShadowColor};
		}
	}
`,k=s.div`
		${o};
		height: 10rem;
		margin-top: 0.5rem;
		padding-bottom: 1rem;
		border-bottom: 0.1rem solid ${({theme:t})=>t.$singleProductMainTextColor};
		position: relative;

		& > * {
			${n};
			top: 50%;
			transform: translateY(-50%);
		}

		.cart-product-details-div {
			height: 80%;
			top: 0.5rem;
			transform: unset;
			width: max-content;
			${m};
			font-size: 0.8rem;

			.cart-image-div {
				width: 6.5rem;
				${l};

				img {
					${$};
					object-fit: cover;
					aspect-ratio: 1/1;
				}
			}

			.cart-product-details {
				margin-left: 1rem;
				${c};

				p {
					${o};
				}

				.cart-product-name {
					color: ${({theme:t})=>t.$accentColor};
				}

				.cart-product-price {
					color: ${({theme:t})=>t.$darkAccentColor};
				}
			}
		}

		.cart-quantity-details-div {
			width: max-content;
			min-width: 6rem;
			${C};
			${i};

			& > * {
				width: 2rem;
				height: 2rem;
				color: ${({theme:t})=>t.$darkAccentColor};
				${i};
				align-items: center;
				display: inline-flex;
			}

			.cart-cta {
				border: 0.1rem solid ${({theme:t})=>t.$accentColor};
				cursor: pointer;
				transition: transform 0.2s ease-in;
				font-weight: bolder;

				&:hover {
					transform: scale(0.95);
				}
			}

			.cart-cta-text {
				font-size: 0.8rem;
				width: max-content;
				min-width: 2rem;
			}
		}

		.cart-price-details-text {
			${v};
			color: ${({theme:t})=>t.$darkAccentColor};
		}

		.cart-delete-div {
			height: 1.5rem;
			width: 1.5rem;
			position: relative;
			margin-left: auto;
			${i};
			align-items: center;
			svg {
				${l};

				path {
					fill: ${({theme:t})=>t.$accentColor};
				}
			}
		}
		&.modified {
			background-color: ${({theme:t})=>t.$lightestShadowColor};
		}
`,y=({item:t})=>a(k,{children:[a("div",{className:`cart-product-details-div ${t.isModified?"modified":""}`,children:[e("div",{className:"cart-image-div",children:e("img",{src:`${t.imageUrl}`,alt:""})}),a("div",{className:"cart-product-details",children:[e("p",{className:"cart-product-name",children:t.name}),a("p",{className:"cart-product-price",children:["$",`${t.price.toFixed(2)}`]})]})]}),a("div",{className:"cart-quantity-details-div",children:[e("span",{className:"cart-cta dec",children:"-"}),e("span",{className:"cart-cta-text",children:t.quantity}),e("span",{className:"cart-cta inc",children:"+"})]}),a("div",{className:"cart-price-details-text",children:["$",`${(t.price*t.quantity).toFixed(2)}`]}),e("span",{className:"cart-delete-div",children:e("svg",{width:"24",height:"22",viewBox:"0 0 24 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20.6744 0H9.98265C9.10098 0 8.26332 0.385267 7.68953 1.05469L0.375268 9.588C-0.109464 10.1535 -0.109464 10.988 0.375268 11.5535L7.68953 20.0868C8.26332 20.7563 9.10098 21.1415 9.98265 21.1415H20.6744C22.3424 21.1415 23.6946 19.7893 23.6946 18.1213V3.02022C23.6946 1.3522 22.3424 0 20.6744 0ZM8.8147 6.26159C9.10957 5.96672 9.58764 5.96672 9.88251 6.26159L13.1239 9.50296L16.3652 6.26159C16.6601 5.96672 17.1382 5.96672 17.4331 6.26159C17.7279 6.55645 17.7279 7.03453 17.4331 7.32939L14.1917 10.5708L17.4331 13.8121C17.7279 14.107 17.7279 14.5851 17.4331 14.8799C17.1382 15.1748 16.6601 15.1748 16.3652 14.8799L13.1239 11.6386L9.88251 14.8799C9.58764 15.1748 9.10957 15.1748 8.8147 14.8799C8.51983 14.5851 8.51983 14.107 8.8147 13.8121L12.0561 10.5708L8.8147 7.32939C8.51983 7.03453 8.51983 6.55645 8.8147 6.26159Z",fill:"#BB9D88"})})})]}),_=Object.freeze(Object.defineProperty({__proto__:null,CartItem:y},Symbol.toStringTag,{value:"Module"}));export{L as C,y as a,_ as c};
