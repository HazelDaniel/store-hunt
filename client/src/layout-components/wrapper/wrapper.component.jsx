import { Home } from "../../components/home/home.component"
import { WrapperStyled } from "./wrapper.styles"


export const Wrapper = (props) => {
	return (
		<WrapperStyled>
			{props.children}
		</WrapperStyled>
	)
};