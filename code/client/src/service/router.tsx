import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import ContactPage from "../page/ContactPage";
import BaseLayout from "../layout/BaseLayout";
import PrestationPage from "../page/PrestationPage";
import TarifsPage from "../page/TarifsPage";
import AdminHomePage from "../page/admin/AdminHomePage";
import AdminModelPage from "../component/admin/model/AdminModelPage";
import AdminModelForm from "../page/admin/model/AdminModelFormPage";
import MoncomptePage from "../page/MoncomptePage";
import ReservationPage from "../page/ReservationPage";

const router = createBrowserRouter([
	{
		// préfixe de toutes les URL enfants
		path: "/",
		// utilisation d'une mise en page
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
				path: "/moncompte",
				element: <MoncomptePage />,
			},
			{
				path: "/tarifs",
				element: <TarifsPage />,
			},
			{
				path: "/reservation",
				element: <ReservationPage />,
			},
		],
	},
	{
		path: "/admin/",
		element: <BaseLayout />,
		children: [
			{
				path: "",
				element: <AdminHomePage />,
			},
			{
				path: "model",
				element: <AdminModelPage />,
			},
			{
				path: "model/form",
				element: <AdminModelForm />,
			},
		],
	},
]);

export default router;
