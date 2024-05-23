import{C as a,b as t,s as i,m as l,i as m,f as s,k as c,c as n,o as r,l as d,e as g}from"./index.ddc19423.js";const o=a`
	animation-duration: .6s;
	animation-iteration-count: 1;
	animation-timing-function: ease-out;
`,f=a`
	${t};
	height: 35vmax;
	min-height: 15rem;
	object-fit: cover;
	aspect-ratio: 3/2;
`,h=i.section`
	${t};
	${f};
	${l};
	align-items: center;
	max-height: 25rem !important;
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;
	${m};

	&::before {
		${s};
		${c};
		background-color: ${({theme:e})=>e.$DirectoryBlurColorDark};
	}

	.blog-hero-text-div {
		${t};
		${n};
		align-items: center;
		height: 35%;
		p {
			height: max-content;
			z-index: 4;
			animation-name: textReveal;
			${o};
			overflow: visible;
		}
		.blog-hero-text {
			display: inline-block;
			font-family: latoLight;
			font-weight: bold;
			font-size: 1.6em;
			@media screen and (min-width: 800px) {
				font-size: 2rem;
			}

			&.primary {
				transform: translateY(-0.5rem);
				color: ${({theme:e})=>e.$blogHeroPrimaryTextColor};
				animation-name: textSlideDown;
				${o};
				@keyframes textSlideDown {
					from {
						transform: translateY(-100%);
					}
					to {
						transform: translateY(-0.5rem);
					}
				}
			}

			&.secondary {
				transform: translateY(0.5rem);
				color: ${({theme:e})=>e.$blogHeroSecondaryTextColor};
				animation-name: textSlideUp;
				${o};
				animation-direction: alternate;
				animation-timing-function: cubic-bezier(0, 0.9, 1);
				animation-fill-mode: backwards;
				animation-delay: 0.5s;
				@keyframes textSlideUp {
					from {
						visibility: hidden;
						transform: translateY(100%);
					}
					to {
						visibility: visible;
						transform: translateY(0.5rem);
					}
				}
			}
		}

		.blog-hero-text-divide {
			${r};
			width: 0.2rem;
			background-color: ${({theme:e})=>e.$blogHeroPrimaryTextColor};
			margin: 0 0.4rem;
			position: relative;
			transform-origin: center;
			animation-name: scaleUp;
			${o};
			@keyframes scaleUp {
				from {
					height: 0;
				}
				to {
					height: 100%;
				}
			}
		}
	}
	@keyframes textReveal {
		from {
			overflow: hidden;
		}
		to {
			overflow: visible;
		}
	}
`,b=i.section`
	button {
		cursor: pointer;
	}
	padding-top: 2rem;
	${t};
	height: max-content;
	min-height: 100vh;
	${n};
	align-items: center;
	background-color: ${({theme:e})=>e.$lessBrightColor};
	color: ${({theme:e})=>e.$darkAccentColor};
	padding-bottom: 15rem;

	.blog-wrapper {
		${t};
		height: max-content;
		min-height: calc(100vh - 2rem);
		padding: 0.5rem 2rem;

		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
		grid-auto-flow: row;
		grid-auto-rows: 15rem;
		justify-items: center;
		position: relative;
		overflow: visible;

		.blog-load-more-cta {
			${d};
			bottom: -20%;
			width: max-content;
			padding: 1rem;
			border: none;
			outline: none;
			background-color: transparent;
			font-size: 1.2rem;
			border: 0.1rem solid ${({theme:e})=>e.$darkAccentColor};
			text-transform: uppercase;
			color: ${({theme:e})=>e.$darkAccentColor};
			${g};
			align-items: center;
			transform: scale(0.8);
			span {
				${r};
				display: inline-flex;
				margin-left: 0.5rem;
				svg {
					${r};
					path {
						fill: ${({theme:e})=>e.$darkAccentColor};
					}
				}
			}
		}
	}
`;export{h as B,f as _,b as a};
