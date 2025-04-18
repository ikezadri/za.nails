import { useEffect, useState } from "react";
import type User from "../../../model/user";
import UserAPI from "../../../service/user_api";
import { Link } from "react-router-dom";
import styles from "../../../assets/css/admin.userList.module.css"; // crée un fichier CSS si besoin

const AdminUserList = () => {
	const [users, setUsers] = useState<User[]>([]);

	useEffect(() => {
		new UserAPI().selectAll().then((response) => setUsers(response.data));
	}, []);

	return (
		<div className={styles.conteneur}>
			<h2 className={styles.titre}>Liste des utilisateurs</h2>

			<p>
				<Link className={styles.link} to="/admin/user/form">Ajouter un utilisateur</Link>
			</p>

			<table className={styles.table}>
				<thead>
					<tr>
						<th>Prénom</th>
						<th>Nom</th>
						<th>Email</th>
						<th>Téléphone</th>
						<th>Rôle</th>
						<th>Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map((user) => (
						<tr key={user.id}>
							<td data-label="Prénom">{user.firstname}</td>
							<td data-label="Nom">{user.lastname}</td>
							<td data-label="Email">{user.email}</td>
							<td data-label="Téléphone">{user.phone_number}</td>
							<td data-label="Rôle">{user.role?.name || "—"}</td>
							<td data-label="Actions">
								<Link className={`${styles.btn} ${styles.btnEdit}`} to={`/admin/user/form/${user.id}`}>
									Mise à jour
								</Link>
								<Link className={`${styles.btn} ${styles.btnDelete}`} to={`/admin/user/delete/${user.id}`}>
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

export default AdminUserList;