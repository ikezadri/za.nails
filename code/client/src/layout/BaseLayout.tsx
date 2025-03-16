// les mises en pages permettent de définir les composants communs à plusieurs mises en page
import { Outlet } from "react-router-dom";
import Footer from "../component/common/Footer";
import Header from "../component/common/Header";

const BaseLayout = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	);
};

export default BaseLayout;
