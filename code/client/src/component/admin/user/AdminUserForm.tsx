import { useForm } from "react-hook-form";
import type User from "../../../model/user";
import UserAPI from "../../../service/user_api";
import { useContext, useEffect } from "react";
import RolesAPI from "../../../service/roles_api";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../../../provider/UserProvider";
import SecurityAPI from "../../../service/security_api";
import style from "../../../assets/css/admin.userForm.module.css";

const AdminUserForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset,
	} = useForm<User>();

	const navigate = useNavigate();
	const { id } = useParams();
	const { user } = useContext(UserContext);

	useEffect(() => {
		Promise.allSettled([
			new RolesAPI().selectAll(),
			id ? new UserAPI().selectOne(id as unknown as number) : null,
		]).then((responses) => {
			if (responses[0].status === "fulfilled") {
				// setRoles(responses[0].value.data); // si tu veux afficher les rôles dynamiquement
			}
			if (id && responses[1].status === "fulfilled") {
				reset(responses[1].value.data);
			}
		});
	}, [id, reset]);

	const onSubmitUser = async (values: User) => {
		const formData = new FormData();
		
		formData.append("id", values.id.toString());
		formData.append("firstname", values.firstname);
		formData.append("lastname", values.lastname);
		formData.append("email", values.email);
		formData.append("phone_number", values.phone_number);
		formData.append("password", values.password);
		formData.append("role_id", values.role_id.toString());
		
		const auth = await new SecurityAPI().auth(user);
		console.log("FormData content:", Object.fromEntries(formData));

		const request = id
			? await new UserAPI().update(formData, auth.data.token)
			: await new UserAPI().insert(formData, auth.data.token);

		if ([200, 201].includes(request.status)) {
			navigate("/admin/user");
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmitUser)} className={style.form}>
			<p className={style.formGroup}>
				<label htmlFor={style.label}>Prénom :</label>
				<input
					type="text"
					{...register("firstname", { required: "Prénom requis" })}
					className={style.input}
				/>
				<small className={style.error}>{errors.firstname?.message}</small>
			</p>

			<p className={style.formGroup}>
				<label htmlFor={style.label}>Nom :</label>
				<input
					type="text"
					{...register("lastname", { required: "Nom requis" })}
					className={style.input}
				/>
				<small className={style.error}>{errors.lastname?.message}</small>
			</p>

			<p className={style.formGroup}>
				<label htmlFor={style.label}>Email :</label>
				<input
					type="email"
					{...register("email", { required: "Email requis" })}
					className={style.input}
				/>
				<small className={style.error}>{errors.email?.message}</small>
			</p>

			<p className={style.formGroup}>
				<label htmlFor={style.label}>Téléphone :</label>
				<input
					type="tel"
					{...register("phone_number", { required: "Téléphone requis" })}
					className={style.input}
				/>
				<small className={style.error}>{errors.phone_number?.message}</small>
			</p>

			<p className={style.formGroup}>
				<label htmlFor={style.label}>Mot de passe :</label>
				<input
					type="password"
					{...register("password", {
						required: !id ? "Mot de passe requis" : false,
					})}
					className={style.input}
				/>
				<small className={style.error}>{errors.password?.message}</small>
			</p>

			<p className={style.formGroup}>
				<label htmlFor={style.label}>Rôle :</label>
				<select
					{...register("role_id", { required: "Rôle requis" })}
					className={style.input}
				>
					<option value="">-- Sélectionner un rôle --</option>
					<option value="1">Admin</option>
					<option value="2">Utilisateur</option>
					{/* Remplace ça dynamiquement avec setRoles si besoin */}
				</select>
				<small className={style.error}>{errors.role_id?.message}</small>
			</p>

			<input type="hidden" {...register("id")} value={id} />
			<button type="submit" className={style.submit}>Enregistrer</button>
		</form>
	);
};

export default AdminUserForm;