import type User from "../model/user";

class SecurityAPI {
    public register = async (data: Partial<User>) => {
        // enregistrer un utilisateur
        const request = new Request(`${import.meta.env.VITE_API_URL}/register`,{
            method:"POST",
            headers:{
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data)
        });

        const response = await fetch(request);

        return response.json();
    };
}

export default SecurityAPI;