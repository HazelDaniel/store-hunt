import{s as u,m as g,b as v,c as x,x as f,v as p,j as c,h as C}from"./index.ddc19423.js";const $=u.div`
	margin-right: 3.5vw;
	position: relative;
	font-family: Arial;
	width: 25vw;
	max-width: 15rem;
overflow: visible;
	select {
		display: none;
	}

	${g};

	.select-items {
		position: absolute;
		background-color: ${({theme:e})=>e.$accentColor};
		top: 110%;
		left: 0;
		right: 0;
		z-index: 5 !important;

		div {
			text-align: center;
			padding: 0.5rem;
			border: 1px solid transparent;
			border-color: transparent transparent ${({theme:e})=>e.$accentColor} transparent;
			cursor: pointer;
		}
	}

	.select-selected {
		${v};
		position: relative;
		max-height: 2rem !important;
		padding-right: 2rem;
		text-align: center;
		color: ${({theme:e})=>e.$darkAccentColor} !important;
		${x};
		border: 1px solid transparent;
		border-color: transparent transparent ${({theme:e})=>e.$accentColor} transparent;
		cursor: pointer;

		&::after {
			${f};
			top: 25%;
			right: 2%;
			width: 0;
			height: 0;
			border: 6px solid transparent;
			border-color: ${({theme:e})=>e.$accentColor} transparent transparent transparent;
		}

		&.select-arrow-active::after {
			border-color: transparent transparent ${({theme:e})=>e.$accentColor} transparent;
			transform: translateY(-1);
			transform-origin: top;
		}
	}

	.select-hide {
		display: none;
	}

	.select-items div:hover,
	.same-as-selected {
		background-color: #0000001a;
	}
`,L=(e,m)=>{const r=e.current,h=r.querySelector("select"),l=Array.from(h.children),n=document.createElement("DIV"),t=document.createElement("DIV");n.classList.add("select-selected"),t.classList.add("select-items"),r.appendChild(n),r.appendChild(t),n.innerText=l[0].textContent,t.classList.add("select-hide"),n.addEventListener("click",function(){this.classList.toggle("select-arrow-active"),t.classList.toggle("select-hide")}),l.forEach((s,i)=>{const a=document.createElement("DIV");a.innerText=s.textContent,t.appendChild(a),s.addEventListener("click",()=>{const[o]=Array.from(t.children).filter(d=>d.innerText===s.textContent);Array.from(o.parentElement.children).forEach(d=>{d.classList.remove("same-as-selected")}),o.classList.add("same-as-selected"),n.innerText=o.innerText,n.classList.toggle("select-arrow-active"),t.classList.toggle("select-hide"),m(s.value)})}),t.addEventListener("click",s=>{const i=s.target;if(i.tagName!=="DIV")return;const[a]=l.filter(o=>o.textContent===i.innerText);a.click()})},b=()=>{const e=p.exports.useRef(null),[m,r]=p.exports.useState(null);return p.exports.useEffect(()=>{!e||(L(e,r),e.current.addEventListener("change",()=>{console.log(e.current.value,"value changed")}))},[e,r]),c($,{ref:e,className:"custom-select",children:C("select",{children:[c("option",{value:"none",children:"None (default)"}),c("option",{value:"high to low",children:"High To Low"}),c("option",{value:"low to high",children:"Low To High"})]})},"11d1")};export{b as CustomSelect,L as convertToCustomSelect};
