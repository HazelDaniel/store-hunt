import { LogoStyled } from "./logo.styles.js";
import { Link } from "react-router-dom";

export const Logo = ({$variant}) => {
  return (
		<LogoStyled $variant={$variant}>
			<Link to="/"></Link>
			<svg viewBox="0 0 43 41" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M40.0932 1.28125V39.7188H1.2933V1.28125H40.0932ZM41.3865 0H-3.05176e-05V41H41.3865V0Z" fill="url(#paint0_linear_11_536)" />
				<path d="M31.1951 1.28125V32.8102L10.1914 12.0028V1.28125H31.1951ZM32.4884 0H8.89807V12.5345L32.4884 35.9032V0Z" fill="url(#paint1_linear_11_536)" />
				<defs>
					<linearGradient id="paint0_linear_11_536" x1="-3.05176e-05" y1="0" x2="37.3824" y2="17.5961" gradientUnits="userSpaceOnUse">
						<stop stopColor="#5F2517" />
						<stop offset="1" stopColor="#FFEDB5" />
					</linearGradient>
					<linearGradient id="paint1_linear_11_536" x1="8.06439" y1="3.72538" x2="29.3724" y2="13.7551" gradientUnits="userSpaceOnUse">
						<stop stopColor="#5F2517" />
						<stop offset="1" stopColor="#FFEDB5" />
					</linearGradient>
				</defs>
			</svg>
		</LogoStyled>
  );
};
export default Logo;