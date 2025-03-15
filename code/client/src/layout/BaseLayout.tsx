// les mises en pages permettent de définir les composants communs à plusieurs mises en page
import { Outlet } from "react-router-dom";
import Footer from "../component/common/Footer";
import Header from "../component/common/Header";

const BaseLayout = () => {
	return (
		<>
		<Header />
			<div className="container">
				<Outlet />
			</div>
		<Footer />
		</>
	);
};

export default BaseLayout;
