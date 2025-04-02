import Joi from "joi";
import type User from "../model/user.js";

class RegisterFormValidator {
	// un validateur renvoie la validation de votre saisie
	// values = représente la saisie du formulaire
	public isValid = async (values: Partial<User>) => {
		// contraintes de validation
		const constraints = Joi.object({
			firstname: Joi.string().required(),
			lastname: Joi.string().required(),
			email: Joi.string().email().required(),
			phone_number: Joi.string(),
			password: Joi.string().required(),
		});

		try {
            // comparer la saisie avec les contraintes de validation
			return await constraints.validateAsync(values);
		} catch (error) {
			return error;
		}
	};
}

export default RegisterFormValidator;
