import styled from "styled-components";
import {
	makeAbsoluteBottomDiv,
	makeAbsoluteBottomLeftDiv,
	makeAbsoluteBottomRightDiv,
	makeColFlexCenter,
	makeColFlexStart,
	makeFullSizeBlock,
	makeFullWidthBlock,
	makeUnSelectableTextDiv,
} from "../../styles/styles";
export const BlogItemStyled = styled.div`
		${makeColFlexStart};
		align-items: center;
		overflow: hidden;
		${makeUnSelectableTextDiv};
		/* height: 15rem; */
		min-width: 17rem;
		max-width: 20rem;
		margin: 2rem;
		position: relative;
		overflow: visible;
		.blog-item-image-div {
			${makeFullWidthBlock};
			height: 75%;
			img {
				${makeFullSizeBlock};
				object-fit: cover;
				aspect-ratio: 3/2;
			}
		}
		.blog-item-content-div {
			${makeAbsoluteBottomDiv};
			background-color: ${({ theme }) => theme.$lessBrightColor};
			width: 80%;
			padding: 1rem 2rem;
			box-shadow: 0.05rem 0.2rem 0.3rem ${({ theme }) => theme.$lightestShadowColor};
			transform: translateY(2rem);
			.BIC {
				&-date-div {
					span {
						width: 0.7rem;
						height: 0.7rem;
						${makeColFlexCenter};
						align-items: center;
						display: inline-flex;
						margin-right: 0.3rem;
						svg {
							${makeFullSizeBlock};
							path {
								fill: ${({ theme }) => theme.$accentColor};
							}
						}
					}
					p {
						display: inline-flex;
						font-size: 0.8rem;
						font-family: latoMedium;
						color: ${({ theme }) => theme.$accentColor};
					}
				}
				&-title {
					padding: 0 0.5rem;
					font-family: poppinsLight;
					font-size: 0.9rem;
					padding: 1rem 0;
					height: 3.5rem;
					text-overflow: ellipsis;
					line-clamp: 2;
				}
				&-cta-div {
					position: relative;
					width: max-content;
					overflow: visible;
					cursor: pointer;
					margin-top: .5rem;
					button {
						all: unset;
						font-size: 0.8rem;
						color: ${({ theme }) => theme.$accentColor};
						transition: all 0.3s ease-in-out;
					}
					&:hover {
						button {
							color: ${({ theme }) => theme.$redTextColor};
						}
						&::after {
							width: 100%;
							background-color: ${({ theme }) => theme.$redTextColor};
						}
					}
					&::after {
						${makeAbsoluteBottomLeftDiv};
						background-color: ${({ theme }) => theme.$accentColor};
						height: 0.2rem;
						width: 45%;
						bottom: -0.5rem;
						transition: all 0.3s ease-in-out;
					}
				}
			}
		}
`;