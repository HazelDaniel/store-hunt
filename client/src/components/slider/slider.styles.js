import styled, { css, keyframes } from "styled-components";
import {
	debug,
	makeAbsoluteBottomLeftDiv,
	makeAbsoluteBottomRightDiv,
	makeAbsoluteTopLefDiv,
	makeAbsoluteTopRightDiv,
	makeColFlexCenter,
	makeFullSizeBlock,
	makeFullWidthBlock,
	makeRowFlexStart,
} from "../../styles/styles";

export const SliderStyled = styled.div`
	* {
		overflow: hidden !important;
	}

	@mixin slidePrev {
		.slider__slide.s--prev & {
			@content;
		}
	}

	@mixin slideActive {
		.slider__slide.s--active & {
			@content;
		}
	}

	@mixin subTextsActiveSlide {
		opacity: 1; //remember to return the opacity to zero for the transition to work
		transition: 1s/2;

		@include slideActive {
			transition-delay: 1s * 0.65;
			opacity: 1;
			transform: translateY(0);
		}
	}
	@keyframes slidePartIn {
		from {
			transform: translateX(100vw);
		}
		to {
			transform: translateX(0);
		}
	}

	${makeFullWidthBlock};
	${makeRowFlexStart};

	/* SLIDER STYLES STOP */

	position: relative;
	height: calc(100vw / 2.165);
	justify-self: flex-start;
	padding: 0;
	/* started adjusting */

	@mixin slidePrev {
		.slider__slide.s--prev & {
			@content;
		}
	}

	@mixin slideActive {
		.slider__slide.s--active & {
			@content;
		}
	}

	@mixin subTextsActiveSlide {
		opacity: 1; //remember to return the opacity to zero for the transition to work
		transition: 1s/2;

		@include slideActive {
			transition-delay: 1s * 0.65;
			opacity: 1;
			transform: translateY(0);
		}
	}

	@mixin slideActive {
		.slider__slide.s--active & {
			@content;
		}
	}

	@mixin sliderReady {
		.slider.s--ready & {
			@content;
		}
	}

	@mixin slidePrev {
		.slider__slide.s--prev & {
			@content;
		}
	}

	&.rolling {
		.slider__slide-content {
			animation-name: slideInFromLeft;
			animation-duration: 2s;
			animation-delay: 0.2s;
			animation-timing-function: cubic-bezier(0.075, 0.165, 1);
			animation-iteration-count: 1;
			transform: translateX(0);
			@keyframes slideInFromLeft {
				from {
					transform: translateX(-130%);
				}
				to {
					transform: translateX(0);
				}
			}
		}
		.slider__slide-part-inner {
			&::before {
				animation-name: slidePartIn;
				animation-timing-function: ease-in-out;
				animation-duration: 1.618s;
				animation-iteration-count: 1;
				transform: translateX(0);
			}
		}
		.slider-hero-image-div {
			animation-name: slidePartIn;
			animation-timing-function: ease-in-out;
			animation-duration: 1.618s;
			animation-iteration-count: 1;
			animation-delay: 0.8s;
			transform: translateX(0);
		}
	}
	&.unrolling {
		.slider__slide-content {
			transform: translateX(-130%);
		}
		.slider__slide-part-inner {
			&::before {
				transform: translateX(100vw);
			}
		}
		.slider-hero-image-div {
			transform: translateX(100vw);
		}
	}

	.slider__slides {
		position: relative;
		${makeFullSizeBlock};
	}

	.slider__slide {
		position: absolute;
		left: 0;
		top: 0;
		${makeFullWidthBlock};
		height: 100%;
		pointer-events: none;

		&.s--active {
			pointer-events: auto;
		}

		&-parts {
			${makeAbsoluteTopLefDiv};
			display: flex;
			width: 100%;
			height: 100%;
		}

		&-content {
			* {
				color: ${({ theme }) => theme.$darkAccentColor};
			}
			${makeAbsoluteTopLefDiv};
			text-transform: uppercase;
			width: 35vw;
			min-width: 30rem;
			z-index: 4;
			left: 5%;
			top: 10%;
			height: max-content !important;
			overflow: visible !important;
			transform: translateX(-130%);
		}

		@mixin subTextsActiveSlide {
			opacity: 1; //remember to return the opacity to zero for the transition to work
			transition: 1s/2;

			@include slideActive {
				transition-delay: 1s * 0.65;
				opacity: 1;
				transform: translateY(0);
			}
		}
	}

	.slider__slide {
		padding: 0;
		${makeFullSizeBlock};
		&-parts {
			${() => {
				const interpolatedLoop = [1, 1, 1, 1].reduce((acc, _, x) => {
					const i = x + 1;
					const currCss = `
						.slider__slide-part {
				&:nth-of-type(${i}) {
					.slider__slide-part-inner {
						$delayOut: (4 - 1) * 0.08s;
						$delayIn: $i * 0.08s + 1s/5;

						z-index: 4 - 1;
						transition-delay: $delayOut;
						transform: translateX(percentage(1 / 4 * -1.3));
						position: relative;
						background-repeat: no-repeat !important;
						
						&::before {
							
							animation-delay:  ${0.2 * i}s;
							display: block;
							position: absolute;
							width: 100%;
							height: 100%;
							content: "";
							background-image: inherit;
							background-size: cover !important;
							background-position-x:  ${(i / 4) * 100}% !important;
							background-repeat: no-repeat !important;
							left: 0;
							top: 0;
							background-color: ${({ theme }) => theme.$lessBrightColor};
							@media screen and (min-width: 1210px) {
								// background-size: 100vw auto;
							}
						}
					}
				}
			}
							`;
					return acc.concat(currCss);
				}, "");
				return css`
					${interpolatedLoop}
				`;
			}}
		}

		&-part {
			$partW: (100vw / 4);

			position: relative;
			width: 100%;
			height: 100%;

			$partRef: &;
			$imageFadeAT: 1s/4;
			&-inner {
				overflow: hidden;
				position: relative;
				width: 100%;
				height: 100%;
				background-size: 0 0;
				background-repeat: no-repeat;
				transition: transform 1s/2 ease-in-out;
			}
		}
	}

	.slider__slide-subheading {
		margin-bottom: 2rem;
		font-size: 1.3rem;
		letter-spacing: 0.2rem;
		text-align: start;
		${makeFullWidthBlock};
		color: ${({ theme }) => theme.$accentColor};
		@include subTextsActiveSlide;
	}

	.slider__slide-heading {
		z-index: 3;

		display: flex;
		margin-bottom: 20px;
		font-size: 2.4rem;
		font-family: nunito;
		font-weight: 400;
		text-transform: capitalize;
		overflow: visible !important;

		@media screen and (max-width: 640px) {
			font-size: 1.5rem;
			width: 60%;
		}

		span {
			display: block;
			opacity: 1; //remember to return the opacity to zero for the transition to work
			transform: translateY(-2rem);
			transition: all 1s/3;
			text-align: start;
			height: max-content;
			overflow: visible !important;
			font-family: nunito;

			@include slidePrev {
				transform: translateY(2rem);
			}

			@include slideActive {
				opacity: 1;
				transform: translateY(0);
			}

			@for $i from 1 through 6 {
				&:nth-child(#{$i}) {
					$delay: 0 * ($i - 1);

					transition-delay: $delay;

					@include slideActive {
						transition-delay: $delay + 1s/3;
					}
				}
			}

			&:nth-child(n + #{6 + 1}) {
				$delay: 0 * 6;

				transition-delay: $delay;

				@include slideActive {
					transition-delay: $delay + 1s/3;
				}
			}
		}
	}

	.slider__slide-shop-now-cta {
		overflow: visible !important;
		border: 0.1rem solid ${({ theme }) => theme.$darkAccentColor};
		${makeColFlexCenter};
		margin-right: auto;
		margin-top: 1rem;
		position: relative;
		backface-visibility: hidden;
		height: 2.2rem;
		width: 8rem;
		border-radius: 0.4rem;
		color: ${({ theme }) => theme.$darkAccentColor};
		text-transform: uppercase;
		font-size: 0.8rem;
		font-weight: 700;
		transition: transform 0.3s ease-in-out;

		cursor: pointer;

		&::before {
			all: unset;
		}

		&:hover {
			transform: scale(0.9);
		}

		span {
			${makeAbsoluteTopRightDiv};
			transform: scale(3);
			top: 2%;
			right: -10%;
		}
	}

	.slider-hero-image-div {
		z-index: 2;
		width: 50%;
		max-width: 30rem;
		justify-self: flex-end;
		${makeColFlexCenter};
		${makeAbsoluteBottomRightDiv};
		right: 10%;
		overflow: visible !important;
		transform: translateX(100vw);

		.slider-hero-image-circle {
			${makeAbsoluteBottomLeftDiv};
			background-color: ${({ theme }) => theme.$homeBodyColor};
			height: 35vw;
			width: 35vw;
			max-width: 30rem;
			max-height: 30rem;
			border-radius: 50%;
			z-index: 0;
			bottom: -10%;
			left: 20%;
		}

		.slider-hero-image {
			position: relative;
			${makeFullSizeBlock};
			margin-top: auto;
		}
	}
`;
