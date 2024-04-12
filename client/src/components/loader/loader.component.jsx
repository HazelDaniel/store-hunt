import { LoaderOverlayStyled, LoaderTextStyled, LoaderUnderlineStyled } from "./loader.styles";


export const Loader = () => {
	return (
		<LoaderOverlayStyled>
			<LoaderTextStyled>
				STORE <span>HUNT</span>
				<LoaderUnderlineStyled />
			</LoaderTextStyled>
		</LoaderOverlayStyled>
	);
};
