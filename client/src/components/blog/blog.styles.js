import styled, { css } from "styled-components";
import {
	makeAbsoluteBottomDiv,
	makeAbsoluteTopLefDiv,
	makeColFlexCenter,
	makeFullHeightBlock,
	makeFullSizeBlock,
	makeFullWidthBlock,
	makeRowFlexCenter,
	makeRowFlexStart,
	makeUnSelectableTextDiv,
} from "../../styles/styles";

const _useTextAnimationTime = css`
	animation-duration: .6s;
	animation-iteration-count: 1;
	animation-timing-function: ease-out;
`;

export const _customHero = css`
	${makeFullWidthBlock};
	height: 35vmax;
	min-height: 15rem;
	object-fit: cover;
	aspect-ratio: 3/2;
`;
export const BlogHeroStyled = styled.section`
	${makeFullWidthBlock};
	${_customHero};
	${makeColFlexCenter};
	align-items: center;
	max-height: 25rem !important;
	background-size: cover;
	background-repeat: no-repeat;
	position: relative;
	${makeUnSelectableTextDiv};

	&::before {
		${makeAbsoluteTopLefDiv};
		${makeFullSizeBlock};
		background-color: ${({ theme }) => theme.$DirectoryBlurColorDark};
	}

	.blog-hero-text-div {
		${makeFullWidthBlock};
		${makeRowFlexCenter};
		align-items: center;
		height: 35%;
		p {
			height: max-content;
			z-index: 4;
			animation-name: textReveal;
			${_useTextAnimationTime};
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
				color: ${({ theme }) => theme.$blogHeroPrimaryTextColor};
				animation-name: textSlideDown;
				${_useTextAnimationTime};
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
				color: ${({ theme }) => theme.$blogHeroSecondaryTextColor};
				animation-name: textSlideUp;
				${_useTextAnimationTime};
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
			${makeFullHeightBlock};
			width: 0.2rem;
			background-color: ${({ theme }) => theme.$blogHeroPrimaryTextColor};
			margin: 0 0.4rem;
			position: relative;
			transform-origin: center;
			animation-name: scaleUp;
			${_useTextAnimationTime};
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
`;

export const BlogBodyStyled = styled.section`
	button {
		cursor: pointer;
	}
	padding-top: 2rem;
	${makeFullWidthBlock};
	height: max-content;
	min-height: 100vh;
	${makeRowFlexCenter};
	align-items: center;
	background-color: ${({ theme }) => theme.$lessBrightColor};
	color: ${({ theme }) => theme.$darkAccentColor};
	padding-bottom: 15rem;

	.blog-wrapper {
		${makeFullWidthBlock};
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
			${makeAbsoluteBottomDiv};
			bottom: -20%;
			width: max-content;
			padding: 1rem;
			border: none;
			outline: none;
			background-color: transparent;
			font-size: 1.2rem;
			border: 0.1rem solid ${({ theme }) => theme.$darkAccentColor};
			text-transform: uppercase;
			color: ${({ theme }) => theme.$darkAccentColor};
			${makeRowFlexStart};
			align-items: center;
			transform: scale(0.8);
			span {
				${makeFullHeightBlock};
				display: inline-flex;
				margin-left: 0.5rem;
				svg {
					${makeFullHeightBlock};
					path {
						fill: ${({ theme }) => theme.$darkAccentColor};
					}
				}
			}
		}
	}
`;
