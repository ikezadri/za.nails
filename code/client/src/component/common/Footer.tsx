import { Link } from "react-router-dom";
import styles from "../../assets/css/footer.module.css";

const Footer = () => {
	return (
		<footer className={styles["site-footer"]}>
			<Link to={"/"}>Plan du site</Link>
			<Link to={"/"}>FAQ</Link>
			<Link to={"/"}> Mentions Legals</Link>
			<Link to={"/contact"}>Contact</Link>
			<Link to={"/"}>CGV/CGU</Link>
		</footer>
	);
};

export default Footer;
