import type User from "../model/user";

class SecurityAPI {
    public register = async (data: Partial<User>) => {
        // enregistrer un utilisateur
        const request = new Request(`${import.meta.env.VITE_API_URL}/register`,{
            method:"POST",
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(data)
        });
        // console.log(data);
        
        const response = await fetch(request);
        console.log(response);
        
        return response.json();
    };

    public login = async (data: Partial<User>) => {
        // configurer la requete HTTP
        const request = new Request(`${import.meta.env.VITE_API_URL}/login`,{
        method: "POST",
        headers:{
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data)
      });
        //éxecuter la requete
        const response = await fetch(request);

        // récuperer la réponse


        // renvoyer les résultats de la réponse
        return response.json();
      };

      public auth = async (data: Partial<User>) => {
        // configurer la requete HTTP
        const request = new Request(`${import.meta.env.VITE_API_URL}/auth`,{
        method: "POST",
        headers:{
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data)
      });
        //éxecuter la requete
        const response = await fetch(request);

        // récuperer la réponse


        // renvoyer les résultats de la réponse
        return response.json();
      };
}

export default SecurityAPI;