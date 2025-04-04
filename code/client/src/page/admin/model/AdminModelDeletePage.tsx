import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ModelAPI from "../../../service/model_api";
import SecurityAPI from "../../../service/security_api";
import { UserContext } from "../../../provider/UserProvider";

const AdminModelDeletePage = () => {
	// récupère l'id dans l'URL
	const { id } = useParams();

	const { user } = useContext(UserContext);

	// navigation
	const navigate = useNavigate();

	useEffect(() => {
		// créer un formData
		const formData = new FormData();
		formData.append("id", id as unknown as string);

		new SecurityAPI().auth(user).then((authResponse) => {
			// console.log(authResponse.data.token);

			new ModelAPI().delete(formData, authResponse.data.token).then(() => {
				window.sessionStorage.setItem("notice", "Model deleted");

				// redirection
				navigate("/admin/model");
			});
		});
	}, [id, navigate, user]);

	return <></>;
};

export default AdminModelDeletePage;
