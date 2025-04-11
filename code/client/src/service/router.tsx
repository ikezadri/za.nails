import { createBrowserRouter } from "react-router-dom";
import HomePage from "../page/HomePage";
import ContactPage from "../page/ContactPage";
import BaseLayout from "../layout/BaseLayout";
import PrestationPage from "../page/PrestationPage";
import TarifsPage from "../page/TarifsPage";
import AdminHomePage from "../page/admin/AdminHomePage";
import AdminModelPage from "../component/admin/model/AdminModelPage";
import MoncomptePage from "../page/MoncomptePage";
import ReservationPage from "../page/ReservationPage";
import AdminModelFormPage from "../page/admin/model/AdminModelFormPage";
import AdminModelDeletePage from "../page/admin/model/AdminModelDeletePage";
import RegisterPage from "../page/RegisterPage";
import LoginPage from "../page/LoginPage";
import LogoutPage from "../page/LogoutPage";
import Guard from "../component/Guard";
import Confidentialite from "../page/Confidentialite";
import MentionsLegales from "../page/MentionsLegales";

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
				element: 
					<Guard role={['admin', 'user']}>
						<ReservationPage />
					</Guard>,
			},
			{
				path: "/register",
				element: <RegisterPage />,
			},
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/logout",
				element: <LogoutPage />,
			},
			{
				path: "/confidentialite",
				element: <Confidentialite />,
			},
			{
				path: "/mentionslegales",
				element: <MentionsLegales />,
			},
		],
	},
	{
		path: "/admin/",
		element: (
			<Guard role={['admin']}>
				<BaseLayout />
			</Guard>
		),
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
				path: "model/form/:id?",
				element: <AdminModelFormPage />,
			},
			{
				path: "model/delete/:id",
				element: <AdminModelDeletePage />,
			},
		],
	},
]);

export default router;
