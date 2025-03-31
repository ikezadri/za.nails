import type Booking from "../model/booking";

class BookingAPI {
    private route = "booking";

      //récupération de tous les enregistrements
      public selectAll = async () => {
        // configurer la requete HTTP
        const request = new Request(`${import.meta.env.VITE_API_URL}/${this.route}`);
        //éxecuter la requete
        const response = await fetch(request);

        // récuperer la réponse


        // renvoyer les résultats de la réponse
        return response.json();
      };

      public register = async (data: Partial<Booking>) => {
        // configurer la requete HTTP
        const request = new Request(`${import.meta.env.VITE_API_URL}/register`,{
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

  export default BookingAPI;