import { useState } from "react";
import { Navigate } from "react-router-dom";
import { F04CodeTextStyled, F04Styled } from "./F04.styles";
export const F04 = () => {
	const [redirect, setRedirect] = useState(false);
	return <F04Styled>
		<F04CodeTextStyled >404</F04CodeTextStyled>
		<p>whoops! page not found.</p>
		<button onClick={() => setRedirect(true)}>GO TO HOME</button>
		{redirect && <Navigate to="/" replace={true} /> }
	</F04Styled>;
};
export default F04;