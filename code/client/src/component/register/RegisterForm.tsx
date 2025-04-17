import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

import type User from "../../model/user";
import SecurityAPI from "../../service/security_api";

const RegisterForm = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<User>();

	// Redirection
	const navigate = useNavigate();

	//Message du formulaire
	const [message, setMessage] = useState<string>();

	const OnSubmit = async (values: User) => {
		const { id, ...data } = values;
		console.log("Envoi", data);

		// Requete HTTP
		const request = await new SecurityAPI().register(data);
		console.log("Réponse:", request);

		// Tester le code de statut HTTP
		if ([200, 201].indexOf(request.status) > -1) {
			// window.sessionStorage.setItem("notice", "Inscription réussie");
			// Redirection
			navigate("/login");
		} else {
			// Message
			setMessage("Erreur lors de l'inscription");
		}
	};

	// récuperer l'id de l'URL
	const { id } = useParams();

	return (
		<form className="register-form" onSubmit={handleSubmit(OnSubmit)}>
			<h2>Créer votre compte</h2>
			{message ? <p>{message}</p> : null}
			<div>
				<label htmlFor="firstname">Prénom:</label>
				<input
					type="text"
					{...register("firstname", {
						required: "Prénom requis",
						minLength: {
							value: 2,
							message: "Prénom requis",
						},
					})}
				/>
				<small>{errors.firstname?.message}</small>
			</div>

			<div>
				<label htmlFor="lastname">Nom:</label>
				<input
					type="lastname"
					{...register("lastname", {
						required: "Nom requis",
						minLength: {
							value: 2,
							message: "Nom requis",
						},
					})}
				/>
				<small>{errors.lastname?.message}</small>
			</div>

			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					{...register("email", {
						required: "Email requis",
						minLength: {
							value: 2,
							message: "Email requis",
						},
					})}
				/>
				<small>{errors.email?.message}</small>
			</div>

			<div>
				<label htmlFor="email">Email:</label>
				<input
					type="email"
					{...register("email", {
						required: "Email requis",
						minLength: {
							value: 2,
							message: "Email requis",
						},
					})}
				/>
				<small>{errors.email?.message}</small>
			</div>

			<div>
				{/* {/ PASSWORD /} */}
				<label htmlFor="phone_number">Numéro:</label>
				{/* {/ reprendre STRICTEMENT le nom des colonnes SQL  */}
				<input
					type="text"
					{...register("phone_number", {
						required: "Numéro de téléphone requis",
						minLength: {
							value: 2,
							message: "Numéro de téléphone requis",
						},
					})}
				/>
				<small>{errors.phone_number?.message}</small>
			</div>

			<div>
				<input type="hidden" {...register("id")} value={id} />
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};

export default RegisterForm;
