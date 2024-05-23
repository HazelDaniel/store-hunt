import{s as r,f as s,c as a,b as l,C as c,v as n,j as t}from"./index.ddc19423.js";const m=({$key:e,theme:o})=>c`
		color: ${o[e.color]};
	`,d=r.div`
	${s};
	width: 45%;
	top: 15%;
	transform: rotateZ(-40deg);
	left: -25%;
	z-index: 2;
	${a};
	align-items: center;
	padding: 0 1rem;
	width: 80%;
	background-color: ${({theme:e})=>e.$brightColor};
	box-shadow: 0.1rem 0.2rem 0.4rem ${({theme:e})=>e.$lightestShadowColor};

	p {
		${l};
		height: 1.3rem;
		text-align: center;
		font-size: 0.8rem;
		font-family: manjariMedium;
		transform: translateY(25%);
		${m};
	}
`,i={out_of_stock:{message:"out of stock",color:"$redTextColor"},new:{message:"new",color:"$greenTextColor"},featured:{message:"featured",color:"$blueTextColor"},latest:{message:"latest",color:"$lightestShadowColor"},discounted:{message:"discounted",color:"$homeOutlineColor"}},u=({message:e})=>{const o=n.exports.useMemo(()=>i[e.replace(/ /g,"_")]);return t(d,{$key:o,children:t("p",{children:o.message})})};export{i as PRODUCT_STATE_DATA,u as ProductStateTag};
