import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import UserAPI from "../../service/user_api";
import RolesAPI from "../../service/roles_api";
import type User from "../../model/user";
import type Role from "../../model/roles";

const LoginForm = () => {
	// handSubmit = permet de gérer la soumission du formulaire
	// register = permet de référencer les champs de formulaire
	// errors = permet de gérer les messages d'erreur
	// reset permet de réinitialiser/mettre à jour les données d'un formulaire
	// case à cocher = utiliser un array
	const {
		handleSubmit,
		register,
		formState: { errors },
		reset
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

	const onSubmitModel = async (values: User) => {
		// créer un FormData en reprenant strictement le nom des champs
		const formData = new FormData();
		formData.append("id", values.id.toString());
        formData.append("email", values.email);
		formData.append("password", values.password);
		formData.append("role_id", values.role_id.toString());

		// console.log(formData);

		// requête HTTP
		// const request = id
		// ? await new UserAPI().update(formData)
		// : await new UserAPI().insert(formData);
		// console.log(request);
		
		// tester le code de statut HTTP
		// if([200,201].indexOf(request.status) > -1){
		// 	// redirection 
		// 	navigate('/admin/user');
		// }
       
	};

	return (
		<form onSubmit={handleSubmit(onSubmitModel)} encType="multipart/form-data">
			
            <p>
				<label htmlFor="email">Email:</label>
				{/* reprendre STRICTEMENT le nom des colonnes SQL */}
				<input
					type="text"
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
				<label htmlFor="password">Mot de passe:</label>
				{/* reprendre STRICTEMENT le nom des colonnes SQL */}
				<input
					type="text"
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

export default LoginForm;