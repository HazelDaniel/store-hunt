import{s as i,a as n,b as a,h as e,j as t}from"./index.ddc19423.js";const l=i.div`
	height: 16rem;
	width: 12rem;
	${n};
	`,r=i.div`
	${a};
	height: 15%;
	&:first-of-type{
		height: 30%;
		margin-bottom: 0;
	}
	&:nth-of-type(2n){
		margin-top: 0;
		margin-bottom: 0;
	}
	margin: 10% 0;
	background: linear-gradient(to right, ${({theme:o})=>o.$accentColor} 0%, ${({theme:o})=>o.$brightColor} 50%, ${({theme:o})=>o.$brightColor} 100%);
	animation-name: blinkingPlaceholder;
	animation-timing-function: ease-in-out;
	animation-duration: calc(2 * 1.6183s);
	animation-iteration-count: infinite;
	animation-direction: both;
	@keyframes blinkingPlaceholder {
		from {
			background: linear-gradient(to right, ${({theme:o})=>o.$accentColor} 0%, ${({theme:o})=>o.$brightColor} 50%, ${({theme:o})=>o.$brightColor} 100%);
		}
		25% {
			background: linear-gradient(to right, ${({theme:o})=>o.$accentColor} 0%, ${({theme:o})=>o.$accentColor} 50%, ${({theme:o})=>o.$brightColor} 100%);
		}
		50% {
			background: linear-gradient(to right, ${({theme:o})=>o.$brightColor} 0%, ${({theme:o})=>o.$accentColor} 50%, ${({theme:o})=>o.$accentColor} 100%);
		}
		75% {
			background: linear-gradient(to right, ${({theme:o})=>o.$brightColor} 0%, ${({theme:o})=>o.$brightColor} 50%, ${({theme:o})=>o.$accentColor} 100%);
		}
		to {
			background: linear-gradient(to right, ${({theme:o})=>o.$accentColor} 0%, ${({theme:o})=>o.$brightColor} 50%, ${({theme:o})=>o.$brightColor} 100%);
		}
	}
`,g=()=>e(l,{children:[t(r,{}),t(r,{}),t(r,{}),t(r,{})]});export{g as Placeholder};
