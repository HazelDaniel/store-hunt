import styled, { css } from "styled-components";
import { makeAbsoluteBottomDiv, makeColFlexCenter, makeColFlexStart, makeFullHeightBlock, makeFullWidthBlock, makeRowFlexCenter, makeRowFlexStart } from "../../styles/styles";

const _makeVisualList = css`
	${makeRowFlexStart};
	flex-wrap: row;
	flex-basis: 2rem;
`;
export const _computeListColor = ({ $listId }) => {
	// console.log($listId)
	if (!$listId) return;
	return css`
		&#${$listId} {
			background-color: ${`#${$listId.slice(2)}`} !important;
		}
	`;
};
export const ShopAccordionStyled = styled.div`
	position: relative;
	${makeFullWidthBlock};
	${makeColFlexStart};
	align-items: flex-start;
	height: fit-content;
	margin-bottom: 2rem;

	ul {
		list-style-type: none;
		${makeFullWidthBlock};
		${makeColFlexStart};
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
				color: ${({ theme }) => theme.$darkAccentColor} !important;
			}
		}

		&::after {
			${makeAbsoluteBottomDiv};
			background-color: ${({ theme }) => theme.$homeOutlineColor};
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
		${makeFullWidthBlock};
		${makeRowFlexStart};
		justify-content: space-between;
		overflow: hidden;

		.SSPM-section-title {
			color: ${({ theme }) => theme.$shopSideTabTitleColor};
			font-family: openSansMedium;
			font-weight: 600;
		}

		.SSPM-section-toggle {
			${makeFullHeightBlock};
			${makeColFlexCenter};

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
					fill: ${({ theme }) => theme.$shopSideTabTitleColor};
				}
			}
		}
	}

	.SSPM-section-list {
		li {
			margin: 0.5rem 0;
			font-size: 0.8rem;
			${makeFullWidthBlock};
		}

		&.size-list {
			${_makeVisualList};

			li {
				width: max-content;
				min-width: 3rem;
				height: 2rem;
				${makeRowFlexCenter};
				display: inline-flex !important;
				margin: 0 0.5rem;
				border: 0.1rem solid ${({ theme }) => theme.$shopSizeChipColor};
				color: ${({ theme }) => theme.$shopSizeChipColor};
				transition: all 0.3s ease-in-out;

				&:first-of-type {
					margin-right: 0;
				}

				&:hover {
					background-color: ${({ theme }) => theme.$darkAccentColor};
					color: ${({ theme }) => theme.$lessBrightColor};
				}

				&.active {
					background-color: ${({ theme }) => theme.$darkAccentColor};
					color: ${({ theme }) => theme.$lessBrightColor} !important;
					border: none;
				}
			}
		}

		&.colors-list {
			${_makeVisualList};
			flex-wrap: wrap;
			

			li {
				margin:  1rem;
				width: 2rem;
				height: 2rem;
				min-height: 2rem;
				min-width: 2rem;
				border-radius: 50%;
				border: 0.1rem solid ${({ theme }) => theme.$homeOutlineColor};
			}
		}

		&.tags-list {
			all: unset;
			${makeFullWidthBlock};
			overflow: hidden;
			height: max-content;
			flex: row wrap;

			li {
				width: 40%;
				min-width: 5rem;
				height: 1.5rem;
				margin: 0.5rem;
				${makeColFlexCenter};
				display: inline-flex;
				background-color: ${({ theme }) => theme.$accentColorTrans};
				color: ${({ theme }) => theme.$lessBrightColor};
				border-radius: 0.3rem;
				&.active {
					color: ${({ theme }) => theme.$lessBrightColor} !important;
				}
			}
		}
	}
`;

export const AccordionListStyled = styled.li`
	${_computeListColor};
`;