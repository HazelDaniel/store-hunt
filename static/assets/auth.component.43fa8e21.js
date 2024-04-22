import{s as i,_ as l,m as n,a as m,b as t,c as s,d,e as c,f as h,g as p,h as a,F as u,j as r,W as b}from"./index.ddc19423.js";const g=i.div`
	${l};
	overflow: auto;
	z-index: 6;
	${n};
	padding-bottom: 5rem;

	.auth-body {
		width: 75%;
		height: max-content;
		min-height: 80%;
		margin: 3rem auto;
		max-width: 35rem;

		@media screen and (max-width: 640px) {
			max-width: 100vw;
			width: 100%;
		}

		min-width: 30rem;

		${m};
		align-items: center;
		overflow: auto;
		overflow-x: visible;
		padding: 1rem;

		transform: scaleX(0.8);

		&::-webkit-scrollbar {
			width: 0.8rem;
		}

		/* Track */
		&::-webkit-scrollbar-track {
			background: ${({theme:e})=>e.$DirectoryBlurColorDark};
			border-radius: 0.3rem;
		}

		/* Handle */
		&::-webkit-scrollbar-thumb {
			background: ${({theme:e})=>e.$authFormColor};
			border-radius: 0.3rem;
			transition: background-color 0.2s ease-in-out;
		}

		/* Handle on hover */
		&::-webkit-scrollbar-thumb:hover {
			background: ${({theme:e})=>e.$lessBrightColor};
		}

		.auth-tab {
			${t};
			${s};
			margin-bottom: 1.5rem;
			overflow: visible;

			& > * {
				position: relative;
				overflow: visible;
				cursor: pointer;
				font-family: nunito;
				color: ${({theme:e})=>e.$authInactiveTextColor};
				transform: scale(0.9);

				&.active {
					transform: scale(1);
					color: ${({theme:e})=>e.$authActiveTextColor};

					&::after {
						${d};
						width: 65%;
						height: 0.25rem;
						border-radius: 4rem;
						background-color: ${({theme:e})=>e.$authActiveTextColor};
						bottom: -0.5rem;
					}
				}
			}

			justify-content: space-around;

			.sign-up {
				margin-left: 15%;
			}

			.sign-in {
				margin-right: 15%;
			}
		}

		form {
			${t};
			border-radius: 0.6rem;
			background-color: ${({theme:e})=>e.$authFormColor};
			box-shadow: 0.1rem 0.1rem 0.3rem ${({theme:e})=>e.$DirectoryBlurColorDark};

			font-family: latoMedium;
			text-transform: capitalize;
			padding: 0 0.5rem;
			${t};
			height: max-content;

			overflow: visible;
			padding: 2.5rem;
			padding-top: 5rem;
			font-size: 0.8rem;

			.inline-input-div {
				overflow: visible;
				${t};
				${c};
				position: relative;
				height: max-content;
				margin: 1.5rem 0;
				margin-top: 1.5rem;

				input[type="tel"] {
					margin-top: 1.5rem;
				}

				&:first-of-type {
					.S {
						margin-top: 1.5rem;
					}

					label {
						top: 0rem;
					}
				}

				.S {
					margin-top: 3.5rem;
					width: 45%;

					&:first-of-type {
						margin-right: 3rem;
					}
				}

				label {
					${h};
					top: 0;

					&:nth-of-type(n + 2) {
						left: calc(45% + 3rem);
					}
				}
			}

			input {
				${t};
				height: 2rem;

				outline: unset;
				padding-left: 1rem;
				border-radius: 0.3rem;
				background-color: transparent;
				border: 0.1rem solid #c5c5c7;
				color: ${({theme:e})=>e.$darkAccentColor};

				&::placeholder {
					color: ${({theme:e})=>e.$singleProductMainTextColor};
					text-transform: capitalize;
					font-family: latoLight;
				}

				&[type="email"] {
					&::placeholder {
						text-transform: unset;
					}
				}

				&.L {
					~ label {
						margin-top: 1.5rem;
					}
				}
			}

			label {
				display: block;
				margin-bottom: 1rem;
				color: #ffffff;
				font-size: 1.1rem;
				font-family:manjariLight;
			}

			input.confirm {
				margin-bottom: 2.5rem;
			}

			input[type="submit"] {
				border: unset;
				outline: unset;
				width: max-content;
				padding: 0 3rem;
				border-radius: 5rem;
				height: 2rem;
				margin: 0 auto;
				background-color: ${({theme:e})=>e.$brightColor};
				cursor: pointer;
			}
		}
	}
`,v=()=>{const e=p();return a(u,{children:[r(g,{className:"auth-overlay",onClick:o=>{!o.target.classList.contains("auth-overlay")||e(-1)},children:a("div",{className:"auth-body",children:[a("div",{className:"auth-tab",children:[r("p",{className:"sign-up active",children:"SIGN UP"}),r("p",{className:"sign-in",children:"SIGN IN"})]}),a("form",{children:[a("div",{className:"inline-input-div",children:[r("label",{htmlFor:"name",children:"name"}),r("input",{type:"text",name:"",id:"name",className:"S",placeholder:"john doe"}),r("label",{htmlFor:"last-name",children:"last name"}),r("input",{type:"text",name:"",id:"last-name",className:"S",placeholder:"smith"})]}),r("label",{htmlFor:"email",children:"email"}),r("input",{type:"email",name:"",id:"email",className:"L",placeholder:"example@example.com"}),a("div",{className:"inline-input-div",children:[r("label",{htmlFor:"phone",children:"phone"}),r("input",{type:"tel",name:"",id:"phone",className:"S",placeholder:"+ XXX-XXX-XXX"})]}),r("label",{htmlFor:"password",children:"password"}),r("input",{type:"password",name:"",id:"password",placeholder:"password",className:"L"}),r("label",{htmlFor:"confirm-password",children:"confirm password"}),r("input",{type:"password",name:"confirm-password",id:"",placeholder:"confirm password",className:"L confirm"}),r("input",{type:"submit",value:"SIGN UP"})]})]})}),r(b,{})]})};export{v as Auth,v as default};
