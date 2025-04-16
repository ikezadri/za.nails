// les mises en pages permettent de définir les composants communs à plusieurs mises en page
import { Outlet } from "react-router-dom";
import Footer from "../component/common/Footer";
import Header from "../component/common/Header";
import style from '../assets/css/baselayout.module.css';

const BaseLayout = () => {
	return (
		<>
			<div className={style.layout}>
				<Header />

				
				<main className={style.main}><Outlet /></main>
				<Footer />
			</div>
		</>
	);
};

export default BaseLayout;
