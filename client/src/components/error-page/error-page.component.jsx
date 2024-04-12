import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
	const error = useRouteError();
	console.log(error);
	return <div>{error.statusText || error.message}</div>;
};
export default ErrorPage;
