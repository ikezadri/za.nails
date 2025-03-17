import { useForm } from "react-hook-form";
import type Model from "../../../model/model";
import ModelAPI from "../../../service/model_api";
import { useEffect, useState } from "react";
import type Types from "../../../model/types";
// import TypeAPI from "../../../service/type_api";
import TypesAPI from "../../../service/types_api";

const AdminModelForm = () => {
	// handSubmit = permet de gérer la soumission du formulaire
	// register = permet de référencer les champs de formulaire
	// errors = permet de gérer les messages d'erreur
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<Model>();

	const [types, setTypes] = useState<Types[]>();

	useEffect(() => {
		Promise.allSettled([new TypesAPI().selectAll()]).then(responses => {
			if(responses[0].status === 'fulfilled'){
				setTypes(responses[0].value.data);
				console.log(responses[0].value.data);
				
			}
		})
	});

	// soumission du formulaire// values récupère la saisie du formulaire

	// deux types de formulaire :
	// - sans fichier la propriété body de la requête HTTP peut être en JSON : JSON.stringly / dans la requête HTTP, utiliser l'en tête : Content-Types : application json

	// - avec fichier
	//  - la propriété body de la requête HTTP doit être en FormData
	//  - la balise <form> doit posséder l'attribut enctype="multipart/form-data"

	const onSubmitModel = async (values: Model) => {
		// créer un FormData en reprenant strictement le nom des champs
		const formData = new FormData();
		formData.append("name", values.name);
		// un champ file renvoie une liste de fichiers (FileList)
		formData.append("image", values.image);
		formData.append("type", values.type);
		// formData.append('type_id',values.type_id);
		formData.append("type_ids", values.type_ids);

		// console.log(formData);

		// requête HTTP
		const request = await new ModelAPI().insert(formData);
        console.log(request);
	};

	return (
		<form onSubmit={handleSubmit(onSubmitModel)} encType="multipart/form-data">
			<p>
				<label htmlFor="name">Name:</label>
				{/* reprendre STRICTEMENT le nom des colonnes SQL */}
				<input
					type="text"
					{...register("name", {
						required: "Nom requis",
						minLength: {
							value: 2,
							message: "Nom trop court",
						},
					})}
				/>
				<small>{errors.name?.message}</small>
			</p>

			<p>
				<label htmlFor="image">Image:</label>
				{/* reprendre STRICTEMENT le nom des colonnes SQL */}
				<input
					type="file"
					{...register("image", {
						required: "Image requis",
					})}
				/>
				<small>{errors.image?.message}</small>
			</p>

			<p>
				<label htmlFor="type_ids">Type ids:</label>
				{/* reprendre STRICTEMENT le nom des colonnes SQL */}
				<input type="checkbox" id="type_ids" value="1" {...register("type_ids")} />

				<input type="checkbox" id="type_ids" value="2" {...register("type_ids")} />

				<small>{errors.type_ids?.message}</small>
			</p>

			<p>
				<label htmlFor="type">Type:</label>
				{/* reprendre STRICTEMENT le nom des colonnes SQL */}
				<select 
					id="type_id"
						{...register("type_id",{
							required:"Type requit"})}
				>
						<option value="">Sélectionne ton type</option>
							{types?.map((type: Types) => {
					return <option key={Math.random()} value={type.id}>
						{type.name}
					</option>;
				})}

				</select>
				{/* <input
					type="text"
					{...register("type", {
						required: "Type requis",
						minLength: {
							value: 2,
							message: "Type requis",
						},
					})}
				/> */}
				<small>{errors.type?.message}</small>
			</p>

			<p>
				<button type="submit">Submit</button>
			</p>
		</form>
	);
};

export default AdminModelForm;