import{s as r,a,i as n,b as s,k as l,l as m,m as d,n as c,h as t,j as i}from"./index.ddc19423.js";const h=r.div`
		${a};
		align-items: center;
		overflow: hidden;
		${n};
		/* height: 15rem; */
		min-width: 17rem;
		max-width: 20rem;
		margin: 2rem;
		position: relative;
		overflow: visible;
		.blog-item-image-div {
			${s};
			height: 75%;
			img {
				${l};
				object-fit: cover;
				aspect-ratio: 3/2;
			}
		}
		.blog-item-content-div {
			${m};
			background-color: ${({theme:e})=>e.$lessBrightColor};
			width: 80%;
			padding: 1rem 2rem;
			box-shadow: 0.05rem 0.2rem 0.3rem ${({theme:e})=>e.$lightestShadowColor};
			transform: translateY(2rem);
			.BIC {
				&-date-div {
					span {
						width: 0.7rem;
						height: 0.7rem;
						${d};
						align-items: center;
						display: inline-flex;
						margin-right: 0.3rem;
						svg {
							${l};
							path {
								fill: ${({theme:e})=>e.$accentColor};
							}
						}
					}
					p {
						display: inline-flex;
						font-size: 0.8rem;
						font-family: latoMedium;
						color: ${({theme:e})=>e.$accentColor};
					}
				}
				&-title {
					padding: 0 0.5rem;
					font-family: poppinsLight;
					font-size: 0.9rem;
					padding: 1rem 0;
					height: 3.5rem;
					text-overflow: ellipsis;
					line-clamp: 2;
				}
				&-cta-div {
					position: relative;
					width: max-content;
					overflow: visible;
					cursor: pointer;
					margin-top: .5rem;
					button {
						all: unset;
						font-size: 0.8rem;
						color: ${({theme:e})=>e.$accentColor};
						transition: all 0.3s ease-in-out;
					}
					&:hover {
						button {
							color: ${({theme:e})=>e.$redTextColor};
						}
						&::after {
							width: 100%;
							background-color: ${({theme:e})=>e.$redTextColor};
						}
					}
					&::after {
						${c};
						background-color: ${({theme:e})=>e.$accentColor};
						height: 0.2rem;
						width: 45%;
						bottom: -0.5rem;
						transition: all 0.3s ease-in-out;
					}
				}
			}
		}
`,v=({blog:e})=>t(h,{children:[i("div",{className:"blog-item-image-div",children:i("img",{src:e.imageUrl,alt:"",className:"blog-item-image"})}),t("div",{className:"blog-item-content-div",children:[t("div",{className:"BIC-date-div",children:[i("span",{children:t("svg",{width:"17",height:"17",viewBox:"0 0 17 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[i("g",{clipPath:"url(#clip0_11_888)",children:i("path",{d:"M3.71875 0C4.01215 0 4.25 0.237849 4.25 0.53125V1.0625H12.75V0.53125C12.75 0.237849 12.9879 0 13.2812 0C13.5746 0 13.8125 0.237849 13.8125 0.53125V1.0625H14.875C16.0486 1.0625 17 2.01389 17 3.1875V4.25V5.3125V14.875C17 16.0486 16.0486 17 14.875 17H2.125C0.951396 17 0 16.0486 0 14.875V5.3125H17V4.25H0V3.1875C0 2.01389 0.951396 1.0625 2.125 1.0625H3.1875V0.53125C3.1875 0.237849 3.42535 0 3.71875 0Z",fill:"#BB9D88"})}),i("defs",{children:i("clipPath",{id:"clip0_11_888",children:i("rect",{width:"17",height:"17",fill:"white"})})})]})}),i("p",{children:new Date(e.datePosted).toDateString().split(" ").filter((g,o)=>o>0).join(",").replace(","," ")})]}),i("p",{className:"BIC-title",children:e.title}),i("div",{className:"BIC-cta-div",children:i("button",{children:"READ MORE"})})]})]});export{v as BlogItem};
