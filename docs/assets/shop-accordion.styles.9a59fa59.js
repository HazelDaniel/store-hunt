import{C as l,e as a,s as n,b as e,a as t,l as s,o as m,m as r,c}from"./index.ddc19423.js";const i=l`
	${a};
	flex-wrap: row;
	flex-basis: 2rem;
`,h=({$listId:o})=>{if(!!o)return l`
		&#${o} {
			background-color: ${`#${o.slice(2)}`} !important;
		}
	`},$=n.div`
	position: relative;
	${e};
	${t};
	align-items: flex-start;
	height: fit-content;
	margin-bottom: 2rem;

	ul {
		list-style-type: none;
		${e};
		${t};
		align-items: flex-start;
		position: relative;
		padding-bottom: 1rem;
		margin-top: 1rem;

		transition: all 0.3s ease-in-out;
		&.collapsed {
			height: 0 !important;
			margin: 0 !important;
			padding: 0 !important;
			* {
				transform: scaleY(0) !important;
			}
		}

		li {
			cursor: pointer;
			&.active {
				color: ${({theme:o})=>o.$darkAccentColor} !important;
			}
		}

		&::after {
			${s};
			background-color: ${({theme:o})=>o.$homeOutlineColor};
			transform: translateX(50%);
			width: 80%;
			height: 0.1rem;
			right: 50%;
		}
	}

	&:last-of-type {
		ul {
			&::after {
				display: none;
			}
		}
	}

	.SSPM-accordion {
		height: 2.5rem;
		${e};
		${a};
		justify-content: space-between;
		overflow: hidden;

		.SSPM-section-title {
			color: ${({theme:o})=>o.$shopSideTabTitleColor};
			font-family: openSansMedium;
			font-weight: 600;
		}

		.SSPM-section-toggle {
			${m};
			${r};

			svg {
				height: 80%;
				margin: auto 0;
				transform: scale(0.6) rotateZ(90deg);
				cursor: pointer;
				transition: all 0.3s ease-in-out;
				&.collapsed-toggler {
					transform: scale(0.6) rotateZ(-180deg);
				}

				path {
					fill: ${({theme:o})=>o.$shopSideTabTitleColor};
				}
			}
		}
	}

	.SSPM-section-list {
		li {
			margin: 0.5rem 0;
			font-size: 0.8rem;
			${e};
		}

		&.size-list {
			${i};

			li {
				width: max-content;
				min-width: 3rem;
				height: 2rem;
				${c};
				display: inline-flex !important;
				margin: 0 0.5rem;
				border: 0.1rem solid ${({theme:o})=>o.$shopSizeChipColor};
				color: ${({theme:o})=>o.$shopSizeChipColor};
				transition: all 0.3s ease-in-out;

				&:first-of-type {
					margin-right: 0;
				}

				&:hover {
					background-color: ${({theme:o})=>o.$darkAccentColor};
					color: ${({theme:o})=>o.$lessBrightColor};
				}

				&.active {
					background-color: ${({theme:o})=>o.$darkAccentColor};
					color: ${({theme:o})=>o.$lessBrightColor} !important;
					border: none;
				}
			}
		}

		&.colors-list {
			${i};
			flex-wrap: wrap;
			

			li {
				margin:  1rem;
				width: 2rem;
				height: 2rem;
				min-height: 2rem;
				min-width: 2rem;
				border-radius: 50%;
				border: 0.1rem solid ${({theme:o})=>o.$homeOutlineColor};
			}
		}

		&.tags-list {
			all: unset;
			${e};
			overflow: hidden;
			height: max-content;
			flex: row wrap;

			li {
				width: 40%;
				min-width: 5rem;
				height: 1.5rem;
				margin: 0.5rem;
				${r};
				display: inline-flex;
				background-color: ${({theme:o})=>o.$accentColorTrans};
				color: ${({theme:o})=>o.$lessBrightColor};
				border-radius: 0.3rem;
				&.active {
					color: ${({theme:o})=>o.$lessBrightColor} !important;
				}
			}
		}
	}
`,g=n.li`
	${h};
`;export{g as A,$ as S,h as _};
