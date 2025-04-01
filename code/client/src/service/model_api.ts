class ModelAPI {
    private route = 'model'
    // récupération de tous les enregistrements
    public selectAll = async () => {
        // configurer la requête HTTP
        // import.meta.env permet d'accéder aux varibales d'environnement
        const request = new Request(`${import.meta.env.VITE_API_URL}/${this.route}`);

        // récuperer la réponse
        const response = await fetch(request);

        // renvoyer les résultats de la réponse 
        return response.json();
    };

    public selectOne = async (id : number) => {
        // configurer la requête HTTP
        // import.meta.env permet d'accéder aux varibales d'environnement
        const request = new Request(`${import.meta.env.VITE_API_URL}/${this.route}/${id}`,
        );

        // récuperer la réponse
        const response = await fetch(request);

        // renvoyer les résultats de la réponse 
        return response.json();
    };
    
    public insert = async (data:FormData, token: string) => {
        // configurer la requete HTTP
        const request = new Request(`${import.meta.env.VITE_API_URL}/${this.route}`,{
          method: "POST",
          headers: {Authorization: `Bearer ${token}`},
          body: data,
        });
        //éxecuter la requete
        const response = await fetch(request);

        // renvoyer les résultats de la réponse
        return response.json();
    };

    public update = async (data:FormData) => {
        // configurer la requete HTTP
        const request = new Request(`${import.meta.env.VITE_API_URL}/${this.route}`, 
        {
          method: "PUT",
          body: data
        });
        //éxecuter la requete
        const response = await fetch(request);

        // récuperer la réponse


        // renvoyer les résultats de la réponse
        return response.json();
    };

    public delete = async (data:FormData) => {
        // configurer la requete HTTP
        const request = new Request(`${import.meta.env.VITE_API_URL}/${this.route}`, 
        {
          method: "DELETE",
          body: data
        });
        //éxecuter la requete
        const response = await fetch(request);

        // récuperer la réponse


        // renvoyer les résultats de la réponse
        return response.json();
    };
}

export default ModelAPI;