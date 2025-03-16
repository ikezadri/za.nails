import { Link } from "react-router-dom";
import styles from "../../assets/css/nav.module.css";
import { useRef, useState } from "react";

const Nav = () => {
	// les balises a sont remplacer par le composant Link
	// les attributs href sont remplacer par to
	// créer une référence : lien vers les éléments HTML remplace l'utilisation de querySelector / querySelectorAll

	const siteNav = useRef<HTMLDivElement>(null);

	const [navMobileIsVisible, setNavMobileIsVisible] = useState<boolean>(false);
	// clic sur le bouton de la navigation mobile
	const click = () => {
		setNavMobileIsVisible(!navMobileIsVisible);
		// console.log(navMobileIsVisible);
	};
	return (
		<>
			<nav
				className={`${styles["site-nav"]} ${navMobileIsVisible ? styles["site-nav-visible"] : ""}`}
				ref={siteNav}>
				{/* <Link to={"/"}>Home</Link> */}
				<Link to={"/prestation"}>Prestation</Link>
				<Link to={"/tarifs"}>Tarifs</Link>
				<Link to={"/moncompte"}>Mon compte</Link>
				<Link to={"/contact"}>Contact</Link>
				<Link to={"/admin"}>Administration</Link>

			</nav>
		
			<div className={styles["site-logo"]}>
            {/* utiliser / pour cibler le dossier public */}
			
            <Link to={"/reservation"}>
            <button className={styles["btn-rdv"]} 
    		type="button" onClick={ click }>
       		 Réservation
        	</button>

            </Link>
        </div>

			<button
				className={styles["btn-nav-mobile"]}
				type="button"
				onClick={click}>
				=
			</button>
		</>
	);
};

export default Nav;
