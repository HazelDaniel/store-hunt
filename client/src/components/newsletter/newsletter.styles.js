import styled, { css } from "styled-components";
import {
	makeAbsoluteBottomLeftDiv,
	makeAbsoluteTopLefDiv,
	makeAbsoluteTopRightDiv,
	makeColFlexCenter,
	makeColFlexStart,
	makeFullHeightBlock,
	makeFullSizeBlock,
	makeFullWidthBlock,
	makeRowFlexCenter,
	makeRowFlexStart,
} from "../../styles/styles";

const _floater = css`
	width: 15vmax;
	height: 15vmax;
	border-radius: 50%;
	box-shadow: 0.1rem 0.1rem 2rem ${({ theme }) => theme.$lightestShadowColor};
	z-index: 0;
	background-position: fixed;
`;

export const NewsletterStyled = styled.section`
	${makeFullWidthBlock};
	height: max-content;
	background-color: ${({ theme }) => theme.$lessBrightColor};
	${makeColFlexStart};
	overflow: visible;
	color: ${({ theme }) => theme.$darkAccentColor};
	position: relative;
	outline: 5rem solid ${({ theme }) => theme.$lessBrightColor};

	.NLD-section-title {
		${makeRowFlexCenter};
		${makeFullWidthBlock};
		border-bottom-left-radius: 5rem;
		background-color: ${({ theme }) => theme.$darkAccentColor};
		height: 2rem;
		align-items: center !important;
		overflow: visible;
		margin-bottom: 1rem;

		p {
			width: max-content;
			margin: auto;
			position: relative;
			overflow: visible;
			color: ${({ theme }) => theme.$homeGoldLikeColor};
			font-family: openSansLight;
			font-weight: 300;

			${makeFullHeightBlock};
			${makeColFlexCenter};

			&::before {
				${makeAbsoluteTopLefDiv};
				${makeFullSizeBlock};
				transform: scale(1.5);
				border: 0.1rem solid ${({ theme }) => theme.$darkAccentColor};
			}
		}
	}

	.NLD-title {
		width: 70%;
		height: max-content;
		color: ${({ theme }) => theme.$accentColor};
		font-size: 1.2rem;
		text-transform: capitalize;
		margin-top: 4rem;
		font-weight: 600;
		text-align: center;
	}

	.newsletter-contact-div {
		width: 75%;
		height: fit-content;
		max-height: 6rem;
		margin: 0 auto;
		margin-bottom: 4rem;
		${makeRowFlexStart};
		flex-wrap: wrap;
		flex-basis: 7rem;

		div {
			margin-right: 2.5rem;
			width: max-content;
			${makeRowFlexStart};
			color: ${({ theme }) => theme.$homeFadingTextColor};
			text-transform: capitalize;
			font-family: nunito;

			p {
				margin-right: 1rem;
				font-weight: bolder;
			}

			span {
				width: max-content;
			}
		}
	}

	&::before {
		${makeAbsoluteTopRightDiv};
		right: 15%;
		top: 10%;
		${_floater};
	}

	&::after {
		${makeAbsoluteBottomLeftDiv};
		bottom: 15%;
		left: 15%;
		${_floater};
		transform: scale(1.5);

		@media screen and (max-width: 800px) {
			display: none;
		}
	}

	@-webkit-keyframes wiggle {
		0% {
			-webkit-transform: skewX(9deg);
		}
		10% {
			-webkit-transform: skewX(-8deg);
		}
		20% {
			-webkit-transform: skewX(7deg);
		}
		30% {
			-webkit-transform: skewX(-6deg);
		}
		40% {
			-webkit-transform: skewX(5deg);
		}
		50% {
			-webkit-transform: skewX(-4deg);
		}
		60% {
			-webkit-transform: skewX(3deg);
		}
		70% {
			-webkit-transform: skewX(-2deg);
		}
		80% {
			-webkit-transform: skewX(1deg);
		}
		90% {
			-webkit-transform: skewX(0deg);
		}
		100% {
			-webkit-transform: skewX(0deg);
		}
	}

	@keyframes wiggle {
		0% {
			transform: skewX(9deg);
		}
		10% {
			transform: skewX(-8deg);
		}
		20% {
			transform: skewX(7deg);
		}
		30% {
			transform: skewX(-6deg);
		}
		40% {
			transform: skewX(5deg);
		}
		50% {
			transform: skewX(-4deg);
		}
		60% {
			transform: skewX(3deg);
		}
		70% {
			transform: skewX(-2deg);
		}
		80% {
			transform: skewX(1deg);
		}
		90% {
			transform: skewX(0deg);
		}
		100% {
			transform: skewX(0deg);
		}
	}
	.animated {
		-webkit-animation-duration: 10s;
		animation-duration: 10s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
	}

	.wiggle {
		-webkit-animation-name: wiggle;
		animation-name: wiggle;
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
	}

	.animated.wiggle {
		-webkit-animation-duration: 0.75s;
		animation-duration: 0.75s;
	}
`;


export const NewsLetterFormStyled = styled.form`
	width: max-content;
	margin: 3rem auto;
	position: relative;
	height: max-content;
	${makeRowFlexStart};

	input {
		all: unset;
		height: 2rem;
		padding-bottom: 1rem;
		background-color: ${({ theme }) => theme.$brightColor};
		caret-color: ${({ theme }) => theme.$homeGoldLikeColor};
		padding-left: 0.5rem;
		margin-left: 0.5rem;

		&:last-of-type {
			position: relative;
		}

		&::placeholder {
			font-size: 0.8rem;
			color: ${({ theme }) => theme.$homeOutlineColor};
			padding-left: 0.5rem;
		}

		&:focus {
			box-shadow: 0.1rem 0.2rem 1rem ${({ theme }) => theme.$lightestShadowColor};
		}
	}

	.send-news-letter-cta {
		width: 3.5rem;
		${makeColFlexCenter};
		display: inline-flex;
		height: 3rem;
		transform-origin: bottom;
		background-color: ${({ theme }) => theme.$darkAccentColor};

		svg {
			${makeFullHeightBlock};

			path {
				fill: ${({ theme }) => theme.$brightColor};
			}
		}
	}

	@-webkit-keyframes wiggle {
		0% {
			-webkit-transform: skewX(9deg);
		}
		10% {
			-webkit-transform: skewX(-8deg);
		}
		20% {
			-webkit-transform: skewX(7deg);
		}
		30% {
			-webkit-transform: skewX(-6deg);
		}
		40% {
			-webkit-transform: skewX(5deg);
		}
		50% {
			-webkit-transform: skewX(-4deg);
		}
		60% {
			-webkit-transform: skewX(3deg);
		}
		70% {
			-webkit-transform: skewX(-2deg);
		}
		80% {
			-webkit-transform: skewX(1deg);
		}
		90% {
			-webkit-transform: skewX(0deg);
		}
		100% {
			-webkit-transform: skewX(0deg);
		}
	}

	@keyframes wiggle {
		0% {
			transform: skewX(9deg);
		}
		10% {
			transform: skewX(-8deg);
		}
		20% {
			transform: skewX(7deg);
		}
		30% {
			transform: skewX(-6deg);
		}
		40% {
			transform: skewX(5deg);
		}
		50% {
			transform: skewX(-4deg);
		}
		60% {
			transform: skewX(3deg);
		}
		70% {
			transform: skewX(-2deg);
		}
		80% {
			transform: skewX(1deg);
		}
		90% {
			transform: skewX(0deg);
		}
		100% {
			transform: skewX(0deg);
		}
	}
	&.animated {
		background-repeat: no-repeat;
		background-position: left top;
		-webkit-animation-duration: 10s;
		animation-duration: 10s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
	}

	&.wiggle {
		-webkit-animation-name: wiggle;
		animation-name: wiggle;
		-webkit-animation-timing-function: ease-in;
		animation-timing-function: ease-in;
	}

	&.animated.wiggle {
		-webkit-animation-duration: 0.75s;
		animation-duration: 0.75s;
	}
`;
