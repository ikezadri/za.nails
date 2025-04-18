import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserAPI from "../../../service/user_api";
import SecurityAPI from "../../../service/security_api";
import { UserContext } from "../../../provider/UserProvider";

const AdminUserDeletePage = () => {
	// récupère l'id dans l'URL
	const { id } = useParams();
	const { user } = useContext(UserContext);
	const navigate = useNavigate();

	useEffect(() => {
		const formData = new FormData();
		formData.append("id", id as unknown as string);

		new SecurityAPI().auth(user).then((authResponse) => {
			new UserAPI().delete(formData, authResponse.data.token).then(() => {
				window.sessionStorage.setItem("notice", "Utilisateur supprimé avec succès");

				// redirection
				navigate("/admin/user");
			});
		});
	}, [id, navigate, user]);

	return <></>;
};

export default AdminUserDeletePage;