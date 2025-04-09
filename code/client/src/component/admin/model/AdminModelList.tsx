import { useEffect, useState } from "react";
import type Model from "../../../model/model";
import ModelAPI from "../../../service/model_api";
import { Link } from "react-router-dom";
import styles from "../../../assets/css/admin.modelList.module.css";

const AdminModelList = () => {
	const [models, setModels] = useState<Model[]>([]);

	useEffect(() => {
		new ModelAPI().selectAll().then((response) => setModels(response.data));
	}, []);

	return (
		<div className={styles.conteneur}>
			<h2 className={styles.titre}>Liste de modèles</h2>

			<p>
				<Link className={styles.link} to="/admin/model/form">Rendez-vous</Link>
			</p>

			<table className={styles.table}>
				<thead>
					<tr>
						<th>Nom</th>
						<th>Modèle</th>
						<th>Fichier image</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{models.map((model) => (
						<tr key={model.id}>
							<td data-label="Nom">{model.name}</td>
							<td data-label="Modèle">
								<img
									src={`${import.meta.env.VITE_API_URL}/img/${model.image}`}
									alt={model.name}
									className={styles.image}
								/>
							</td>
							<td data-label="Fichier">{model.image}</td>
							<td data-label="Actions">
								<Link className={`${styles.btn} ${styles.btnEdit}`} to={`/admin/model/form/${model.id}`}>
									Mise à jour
								</Link>
								<Link className={`${styles.btn} ${styles.btnDelete}`} to={`/admin/model/delete/${model.id}`}>
									Supprimer
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AdminModelList;