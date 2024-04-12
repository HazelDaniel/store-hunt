import styled, { css } from "styled-components";
import { debug, makeColFlexCenter, makeColFlexStart, makeFullHeightBlock, makeFullSizeBlock, makeFullWidthBlock, makeRowFlexStart } from "../../styles/styles";

const _footerPart = css`
	width: max-content;
	min-width: 33%;
	${makeFullHeightBlock};
	${makeColFlexStart};
`;
const _footerTitleText = css`
	font-weight: 400;
	margin-bottom: 1.5rem;
	font-size: .8rem;
`;

const _footerSubText = css`
	font-weight: 300;
	font-size: 0.7rem;
	text-align: start;
	${makeFullWidthBlock};
	margin-bottom: 0.6rem;
	width: max-content;
`;

export const FooterStyled = styled.footer`
	${makeFullWidthBlock};
	${makeColFlexStart};
	height: fit-content;
	min-height: 45vmax;
	padding: 2rem;
	background-color: ${({ theme }) => theme.$darkAccentColor};
	a,
	li {
		color: ${({ theme }) => theme.$lessBrightColor};
	}

	p {
		font-family: openSansLight;
		color: ${({ theme }) => theme.$lessBrightColor};
	}

	.title-text {
		font-weight: 400;
		font-size: 0.8rem;
		margin-bottom: 1.5rem;
	}

	hr.style-two {
		${makeFullWidthBlock};
		border: 0;
		height: 1px;
		background-image: linear-gradient(to right, ${({ theme }) => theme.$darkAccentColor}, ${({ theme }) => theme.$lessBrightColor}, ${({ theme }) => theme.$darkAccentColor});
	}

	.footer-bottom {
		height: 12rem;
		width: 80%;
		${makeColFlexStart};
		margin-top: 4rem;

		.FB-container {
			// min-width: 80%;
			text-align: center;
			width: max-content;
		}

		.copyright {
			@extend .FB-container;
			font-size: 70%;
			color: ${({ theme }) => theme.$homeGoldLikeColor};
			margin-bottom: 1rem;
		}

		.footer-credit-div {
			@extend .FB-container;
			${makeColFlexCenter};
			width: fit-content;
			align-items: flex-start;

			p {
				${_footerTitleText};
				${makeRowFlexStart};
				justify-content: space-evenly;
				width: max-content;
				text-align: start;
				font-size: .7rem;
				
				span > a {
					font-family: openSansLight;
					font-weight: 300;
					font-size: 0.7rem;
				}
				
				span:first-of-type {
					margin-left: 2rem;
					margin-left: 1rem;
					font-size: .8rem;
					
				}

				span:nth-of-type(n + 1) {
					margin-left: 1rem;
				}
			}
		}
	}
`;

export const FooterTopStyled = styled.div`
	${makeFullWidthBlock};
	min-height: 15rem;
	height: max-content;
	${makeRowFlexStart};
	justify-content: space-evenly;
	align-items: flex-start;
	padding-bottom: 4rem;

	.ft-part {
		width: max-content;
		min-width: 33%;
		${makeFullHeightBlock};
		${makeColFlexStart};
	}

	.footer-section-title {
		${_footerTitleText};
	}
`;

export const TopLeftStyled = styled.div`
	${_footerPart};
	margin-right: auto;
	align-items: flex-start;

	.footer-logo-div {
		height: 2rem;
		width: 2rem;
		margin-bottom: 1.5rem;
		transform: scale(0.9);
	}

	.footer-moto {
		width: 30vw;
		font-weight: 300;
		font-size: 0.6rem;
		margin-bottom: 2rem;
	}

	.footer-payment-client-div {
		p:first-of-type {
			${_footerTitleText};
		}

		&-image {
			width: 100%;
			max-width: 8rem;
		}
	}
`;

export const TopMiddleStyled = styled.div`
	${_footerPart};
	margin: auto;
	align-items: center;
	text-align: center;
	margin-top: 0;

	.footer-section-lists {
		${makeFullSizeBlock};

		li {
			font-size: 0.7rem;
			font-family: openSansLight;
			height: 2rem;
			cursor: pointer;
		}
	}
`;

export const TopRIghtStyled = styled.div`
	${_footerPart};
	height: max-content;


	.footer-contact-title {
		font-family: openSansLight;
		${_footerTitleText};
		color: ${({ theme }) => theme.$lessBrightColor};
	}

	p {
		font-weight: 300;
		font-size: 0.9rem;
		text-align: start;
		${makeFullWidthBlock};
		margin-bottom: 0.6rem;
		width: max-content;
		${_footerSubText};


	}

	.footer-contact-icons {
		width: 8rem;
		height: 2rem;
		${makeRowFlexStart};
		justify-content: space-evenly;
		align-items: center;

		.FCI {
			${makeFullHeightBlock};
			${makeColFlexCenter};

			svg {
				${makeFullHeightBlock};
				height: 50% !important;
				cursor: pointer;
			}

			&:nth-child(n) {
				path {
					fill: ${({ theme }) => theme.$homeGoldLikeColor};
				}
			}

			&:nth-child(2n) {
				path {
					fill: ${({ theme }) => theme.$lessBrightColor};
				}
			}
		}
	}
`;
