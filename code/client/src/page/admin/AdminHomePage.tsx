import { Link } from "react-router-dom";
import styles from "../../assets/css/admin.Homepage.module.css";

const AdminHomePage = () => {
	return (
		<div className={styles.remplit}>
			<h1>Bienvenue sur l'administration</h1>
			<Link to={"/admin/model"}>Mes rendez-vous</Link>
			<Link to={"/admin/user"}>Mes utilisateurs</Link>
		</div>
	);
};

export default AdminHomePage;
