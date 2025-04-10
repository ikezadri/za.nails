import { Link } from "react-router-dom";
import styles from "../../assets/css/nav.module.css";
import { useContext, useRef, useState } from "react";
import { UserContext } from "../../provider/UserProvider";

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

	// récupérer un utilisateur 
	const { user } = useContext(UserContext);


	return (
		<>
				{user.id && `Bonjour, ${user.firstname || 'Utilisateur'}`}
			<nav
				className={`${styles["site-nav"]} ${navMobileIsVisible ? styles["site-nav-visible"] : ""}`}
				ref={siteNav}>
				{/* <Link to={"/"}>Home</Link> */}
				<Link to={"/prestation"} onClick={click}>Prestation</Link>
				<Link to={"/tarifs"} onClick={click}>Tarifs</Link>
				<Link to={"/contact"} onClick={click}>Contact</Link>

				{user.role?.name === "admin" ? (
				<Link to={"/admin"}>Admin</Link>
		) :null} 

				{user.id ? (
					<Link to={"/logout"}>Déconnexion</Link>
				) : (
				<>
					<Link to={"/moncompte"} onClick={click}>Mon compte</Link>	
				</>
			)
		}
			</nav>
		
			{user.role?.name === "user" ? (
			<div className={styles["site-logo"]}>
            {/* utiliser / pour cibler le dossier public */}
			
            <Link to={"/reservation"}>

            <button className={styles["btn-rdv"]} 
    		type="button" onClick={ click }>
        	</button>

            </Link>
        </div>
			) :null}
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
