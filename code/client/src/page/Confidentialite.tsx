import styles from "../assets/css/confidentialite.module.css";

export const Confidentialite = () => {
  return (
    <main id="main">
      {/* Skip Link pour l'accessibilité */}
      <a href="#main" className={styles.skipLink}>
        Aller au contenu principal
      </a>
      
      <div className={styles.privacyContainer}>
        <h1 className={styles.title} id="politique-confidentialite">Politique de confidentialité</h1>
        <p>Nous attachons une grande importance à la protection de vos données personnelles.</p>
        
        <section aria-labelledby="donnees-collectees">
          <h2 id="donnees-collectees" className={styles.sectionTitle}>Données collectées :</h2>
          <ul>
            <li>Nom, prénom, email, téléphone</li>
            <li>Données de navigation (IP, pages vues, etc.)</li>
          </ul>
        </section>
        
        <section aria-labelledby="utilisation">
          <h2 id="utilisation" className={styles.sectionTitle}>Utilisation :</h2>
          <ul>
            <li>Répondre aux demandes</li>
            <li>Gérer les rendez-vous</li>
            <li>Améliorer le site et mesurer l'audience</li>
          </ul>
        </section>
        
        <section aria-labelledby="base-legale">
          <h2 id="base-legale" className={styles.sectionTitle}>Base légale :</h2>
          <p>Consentement et intérêt légitime</p>
        </section>
        
        <section aria-labelledby="duree-conservation">
          <h2 id="duree-conservation" className={styles.sectionTitle}>Durée de conservation :</h2>
          <p>Jusqu'à 12 mois pour les contacts, 13 mois pour les cookies</p>
        </section>
        
        <section aria-labelledby="partage">
          <h2 id="partage" className={styles.sectionTitle}>Partage :</h2>
          <p>Les données ne sont jamais revendues. Elles peuvent être partagées avec des prestataires techniques.</p>
        </section>
        
        <section aria-labelledby="vos-droits">
          <h2 id="vos-droits" className={styles.sectionTitle}>Vos droits :</h2>
          <p>Accès, rectification, suppression, opposition, portabilité</p>
        </section>
        
        <section aria-labelledby="contact">
          <h2 id="contact" className={styles.sectionTitle}>Contact :</h2>
          <p><a href="mailto:zahra@za-nails.fr" aria-label="Envoyer un email à zahra@za-nails.fr">zahra@za-nails.fr</a></p>
        </section>
        
        <section aria-labelledby="cookies">
          <h2 id="cookies" className={styles.sectionTitle}>Cookies :</h2>
          <p>Utilisés à des fins statistiques et de navigation. Paramétrables via votre navigateur.</p>
        </section>
        
        <section aria-labelledby="securite">
          <h2 id="securite" className={styles.sectionTitle}>Sécurité :</h2>
          <p>Toutes les mesures sont prises pour protéger vos données.</p>
        </section>
        
        <section aria-labelledby="modifications">
          <h2 id="modifications" className={styles.sectionTitle}>Modifications :</h2>
          <p>Cette politique peut être mise à jour. Merci de la consulter régulièrement.</p>
        </section>
      </div>
    </main>
  );
};

export default Confidentialite;