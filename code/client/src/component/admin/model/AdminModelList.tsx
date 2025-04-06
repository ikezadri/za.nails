import { useEffect, useState } from "react";
import type Model from "../../../model/model";
import ModelAPI from "../../../service/model_api";
import { Link } from "react-router-dom";

const AdminModelList = () => {
	const [models, setModels] = useState<Model[]>([]);

	useEffect(() => {
		new ModelAPI().selectAll().then((response) => setModels(response.data));
	}, []);

	return (
		<>
			<h2>Liste de modèles</h2>

			<p>
				<Link to={"/admin/model/form"}>Rendez-vous</Link>
			</p>

			<table>
				<tr>
					<th>Nom</th>
					<th>Modèles</th>
					<th>Type de modèles</th>
					<tr />
				</tr>

				{models.map((model) => (
					<tr key={Math.random()}>
						{model.name}
						<td>{model.name}</td>
						<td>
							<img src={`${import.meta.env.VITE_API_URL}/img/${model.image}`} alt="" />
							</td>
						<td>{model.image}</td>
						<td>
							<Link className="btn" to={`/admin/model/form/${model.id}`}>
								Mise à jour
							</Link>
							<Link className="btn" to={`/admin/model/delete/${model.id}`}>
								Supprimer
							</Link>
						</td>
					</tr>
				))}
			</table>
		</>
	);
};

export default AdminModelList;
