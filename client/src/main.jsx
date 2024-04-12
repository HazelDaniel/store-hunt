import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";


import App from "./App";
import F04 from "./components/F04/F04.component";
import Home from "./components/home/home.component";
import { SuspenseWrapper } from "./HOCs/suspense-wrapper.component";
const ErrorPage = lazy(() => import("./components/error-page/error-page.component"));

// ROUTING
export const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "shop",
				element: <SuspenseWrapper path={"shop"} />,
			},
			{
				path: "blog",
				element: <SuspenseWrapper path={"blog"} />,
			},
			{
				path: "auth",
				element: <SuspenseWrapper path={"auth"} />,
			},
			{
				path: "cart",
				element: <SuspenseWrapper path={"cart"} />,
			},
			{
				path: "checkout",
				element: <SuspenseWrapper path={"checkout"} />,
			},
			{
				path: "contact",
				element: <SuspenseWrapper path={"contact"} />,
			},
			{
				path: "product-details",
				element: <SuspenseWrapper path={"product-details"} />,
			},
			{
				index: true,
				element: <Home />,
			},
		],
	},
	{
		path: "*",
		element: <F04 />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	// <React.StrictMode>
		<RouterProvider router={router} />
	// </React.StrictMode>
);
