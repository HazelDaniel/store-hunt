import { Loader } from "../components/loader/loader.component";
import React from "react";
export const SuspenseWrapper = ({ path }) => {
	const LazyComponent = React.lazy(() => import(`../components/${path}/${path}.component.jsx`));
	return (
		<React.Suspense fallback={<Loader />}>
			<LazyComponent />
		</React.Suspense>
	);
};
