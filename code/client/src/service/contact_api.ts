import type Contact from "../model/contact";

class ContactAPI{
    private route = 'contact'

    public SelectAll = async () => {
        const request = new Request (`${import.meta.env.VITE_API_URL}/contact`);
        const response = await fetch(request);
        return response.json();
    };

    public selectOne = async (id: number) => {
        const request = new Request(`${import.meta.env.VITE_API_URL}/${this.route}/${id}`);
        const response = await fetch(request);
        return response.json();
      };

    public insert = async (data: Partial<Contact>) => {
        const request = new Request(`${import.meta.env.VITE_API_URL}/contact`, {
            method: 'POST',
            headers: {
                // Type de contenu : le json
                "Content-Type" : 'application/json'
            },
            // Envoyer donnÃ© sans fichier
            body: JSON.stringify(data),
        });
        const response = await fetch(request);
        return response.json();
      };
}

export default ContactAPI;
