import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type User from "../../model/user";
import SecurityAPI from "../../service/security_api";

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
	} = useForm<User>();

	// Redirection
    const navigate = useNavigate();

    // Message du formulaire
    const [message, setMessage] = useState<string>();

    const OnSubmit = async (values: User) => {
        console.log(values);

        // Requete HTTP
        const request = await new SecurityAPI().login(values)
        console.log(request);

            // Tester le code de statut HTTP
            if ([200, 201].indexOf(request.status) > -1) {
                // Stocker un message en session
                window.sessionStorage.setItem("notice", "Account created");
                // Redirection
                // navigate("/admin");
                } else {
                setMessage("Check your email please");
            }
        }


    // récuperer l'id de l'URL
    const { id } = useParams();

    return (
        <form onSubmit={handleSubmit(OnSubmit)}>
            <p>Login FORM</p>

            <Notice />
            {message ? <p>{message}</p> : null}


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