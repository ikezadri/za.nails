import styles from "../assets/css/confidentialite.module.css";

export const Confidentialite = () => {
    return (
      <div className={styles.privacyContainer}>
        <h1 className={styles.title}>Politique de confidentialité</h1>
        <p>Nous attachons une grande importance à la protection de vos données personnelles.</p>
  
        <p><strong>Données collectées :</strong></p>
        <ul>
          <li>Nom, prénom, email, téléphone</li>
          <li>Données de navigation (IP, pages vues, etc.)</li>
        </ul>
  
        <p><strong>Utilisation :</strong></p>
        <ul>
          <li>Répondre aux demandes</li>
          <li>Gérer les rendez-vous</li>
          <li>Améliorer le site et mesurer l’audience</li>
        </ul>
  
        <p><strong>Base légale :</strong> Consentement et intérêt légitime</p>
        <p><strong>Durée de conservation :</strong> Jusqu’à 12 mois pour les contacts, 13 mois pour les cookies</p>
        <p><strong>Partage :</strong> Les données ne sont jamais revendues. Elles peuvent être partagées avec des prestataires techniques.</p>
  
        <p><strong>Vos droits :</strong> Accès, rectification, suppression, opposition, portabilité</p>
        <p>Contact : zahra@za-nails.fr</p>
  
        <p><strong>Cookies :</strong> Utilisés à des fins statistiques et de navigation. Paramétrables via votre navigateur.</p>
  
        <p><strong>Sécurité :</strong> Toutes les mesures sont prises pour protéger vos données.</p>
  
        <p><strong>Modifications :</strong> Cette politique peut être mise à jour. Merci de la consulter régulièrement.</p>
      </div>
    );
  };

export default Confidentialite;
  