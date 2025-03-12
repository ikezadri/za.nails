import Nav from "./Nav";

// import d'un CSS d'un composant
import styles from "../../assets/css/header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<header className={styles["site-header"]}>
			<div className={styles["site-logo"]}>
				{/* utiliser / pour cibler le dossier public */}
				<Link to={"/"}>
<<<<<<< HEAD
					<img className={styles["logo-jsp"]}src="/img/niniscloset3.svg" alt="" />
=======
					<img src="/img/four.nails-logo.png" alt="" />
>>>>>>> 9075952114b85f3da9628a1308414c9dd5a7b078
				</Link>
			</div>
			<button className={styles["btn-nav-mobile"]} type="button">
				Reservation
			</button>
			<Nav />
		</header>
	);
};

export default Header;
