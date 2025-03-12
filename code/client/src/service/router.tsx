import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import ContactPage from "../page/ContactPage";
import BaseLayout from "../layout/BaseLayout";
import PrestationPage from "../page/PrestationPage";
import TarifsPage from "../page/TarifsPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <BaseLayout />,
		children: [
			{
				path: "",
				element: <HomePage />,
			},
			{
				path: "/contact",
				element: <ContactPage />,
			},
			{
				path: "/prestation",
				element: <PrestationPage />,
			},
			{
				path: "/tarifs",
				element: <TarifsPage />,
			},
		],
	},
]);

export default router;
