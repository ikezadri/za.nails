import { Link } from "react-router-dom";

const AdminHomePage = () => {
	return (
		<div>
			<h1>Bienvenue sur l'administration</h1>
			<Link to={"/admin/model"}>Vos rendez-vous</Link>
		</div>
	);
};

export default AdminHomePage;
