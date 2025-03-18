class TypesAPI {
    private route = 'types';
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

    public selectOne = async () => {
        // configurer la requête HTTP
        // import.meta.env permet d'accéder aux varibales d'environnement
        const request = new Request(`${import.meta.env.VITE_API_URL}/${this.route}/${this.route}`,
        );

        // récuperer la réponse
        const response = await fetch(request);

        // renvoyer les résultats de la réponse 
        return response.json();
    };
}

export default TypesAPI;