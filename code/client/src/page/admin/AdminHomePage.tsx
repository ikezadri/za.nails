import { Link } from "react-router-dom";

const AdminHomePage = () => {
	return (
		<div>
			<h1>ok</h1>
			<Link to={"/admin/model"}>Manage model</Link>
		</div>
	);
};

export default AdminHomePage;
