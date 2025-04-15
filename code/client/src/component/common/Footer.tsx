import { Link } from "react-router-dom";
import styles from "../../assets/css/footer.module.css";

const Footer = () => {
	return (
		<footer className={styles["site-footer"]}>
			<Link to={"/plandusite"}>Plan du site</Link>
			<Link to={"/mentionslegales"}>Mentions Legales</Link>
			<Link to={"/contact"}>Contact</Link>
			<Link to={"/confidentialite"}>Politique de confidentialité</Link>
		</footer>
	);
};

export default Footer;
