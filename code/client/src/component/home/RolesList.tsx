import { useEffect, useState } from "react";
import RolesAPI from "../../service/roles_api";
import type Roles from "../../model/roles";

const RolesList = () => {
	const [roles, setRoles] = useState<Roles[]>([]);

	useEffect(() => {
		new RolesAPI().selectAll().then((results) => setRoles(results.data));
	}, []);

	return (
		<>
			{/*
         map est la seule boucle disponible dans le HTML de react 

         les accolades dans le HTML permettent de séparer la partie HTML de la partie JS
         une propriété key, contanant uen valeur unique , est obligatoire lorsqu'une boucle est créé
     */}
			{roles.map((result) => (
                <p key={ Math.random()}>{result.name}</p>
            ))}
		</>
	);
};

export default RolesList;
