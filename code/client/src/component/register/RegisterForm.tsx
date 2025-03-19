import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import UserAPI from "../../service/user_api";
// import RolesAPI from "../../service/roles_api";
import type User from "../../model/user";
import SecurityAPI from "../../service/security_api";
// import type Roles from "../../model/roles";

const RegisterForm = () => {
	// handSubmit = permet de gérer la soumission du formulaire
	// register = permet de référencer les champs de formulaire
	// errors = permet de gérer les messages d'erreur
	// reset permet de réinitialiser/mettre à jour les données d'un formulaire
	// case à cocher = utiliser un array
	const {
		handleSubmit,
		register,
		formState: { errors }
	} = useForm<User>();

	const [user, setUser] = useState<User[]>();

	const navigate = useNavigate();

	// récuperer l'id de l'URL
	const { id } = useParams();

	// soumission du formulaire// values récupère la saisie du formulaire

	// deux types de formulaire :
	// - sans fichier la propriété body de la requête HTTP peut être en JSON : JSON.stringly / dans la requête HTTP, utiliser l'en tête : Content-Types : application json

	// - avec fichier
	//  - la propriété body de la requête HTTP doit être en FormData
	//  - la balise <form> doit posséder l'attribut enctype="multipart/form-data"

	const onSubmit = async (values: User) => {
		// créer un FormData en reprenant strictement le nom des champs
				// requête HTTP
				const request = await new SecurityAPI().register(values);
				console.log(request);
				
				// tester le code de statut HTTP
				// if([200,201].indexOf(request.status) > -1){
				// 	// redirection 
				// 	navigate('/admin/model');
		
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<p>
				<label htmlFor="fistname">Prénom:</label>
				{/* reprendre STRICTEMENT le nom des colonnes SQL */}
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
			</p>

			<p>
				<label htmlFor="lastname">Nom:</label>
				{/* reprendre STRICTEMENT le nom des colonnes SQL */}
				<input
					type="text"
					{...register("lastname",id ? {} : {
						required: "Nom requis",
					})}
				/>
				<small>{errors.lastname?.message}</small>
			</p>

            <p>
				<label htmlFor="email">Email:</label>
				{/* reprendre STRICTEMENT le nom des colonnes SQL */}
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
			</p>

            <p>
				<label htmlFor="phonenumber">Numéro de téléphone:</label>
				{/* reprendre STRICTEMENT le nom des colonnes SQL */}
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
			</p>

            <p>
				<label htmlFor="password">Mot de passe:</label>
				{/* reprendre STRICTEMENT le nom des colonnes SQL */}
				<input
					type="password"
					{...register("password", {
						required: "Mot de passe requis",
						minLength: {
							value: 2,
							message: "Mot de passe requis",
						},
					})}
				/>
				<small>{errors.password?.message}</small>
			</p>

			<p>
				<input type="hidden"{...register('id') } value={id} />
				<button type="submit">Submit</button>
			</p>
		</form>
		);
	};
export default RegisterForm;