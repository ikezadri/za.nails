import styles from "../assets/css/mentions.legales.module.css";

export const MentionsLegales = () => {
  return (
    <main id="main">
      {/* Skip Link pour l'accessibilité */}
      <a href="#main" className={styles.skipLink}>
        Aller au contenu principal
      </a>
      
      <div className={styles.legalContainer}>
        <h1 className={styles.titre} id="mentions-legales">Mentions légales</h1>
        
        <section aria-labelledby="site-info">
          <h2 id="site-info" className={styles.sectionTitle}>Informations du site</h2>
          <p><strong>Nom du site :</strong> za.nails</p>
          <p><strong>Créatrice et éditrice du site :</strong> Inès Kezadri</p>
          <p><strong>Statut :</strong> Particulier</p>
          <p><strong>Email :</strong> <a href="mailto:contact@za-nails.fr" aria-label="Envoyer un email à contact@za-nails.fr">contact@za-nails.fr</a></p>
          <p><strong>Responsable de la publication :</strong> Inès Kezadri</p>
        </section>
        
        <section aria-labelledby="business-info">
          <h2 id="business-info" className={styles.sectionTitle}>Informations professionnelles</h2>
          <p><strong>Nom commercial :</strong> Za Nails</p>
          <p><strong>Praticienne :</strong> Zahra Amari</p>
          <p><strong>Statut juridique :</strong> Auto-entrepreneur</p>
          <p><strong>SIRET :</strong> 123 456 789 00012</p>
          <p><strong>Adresse :</strong> 12 rue des Coquelicots, 75010 Paris, France</p>
          <p><strong>Téléphone :</strong> <a href="tel:0612345678" aria-label="Appeler le 06 12 34 56 78">06 12 34 56 78</a></p>
          <p><strong>Email :</strong> <a href="mailto:zahra@za-nails.fr" aria-label="Envoyer un email à zahra@za-nails.fr">zahra@za-nails.fr</a></p>
        </section>
        
        <section aria-labelledby="host-info">
          <h2 id="host-info" className={styles.sectionTitle}>Hébergement</h2>
          <p><strong>Hébergeur :</strong> OVH SAS</p>
          <p><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
          <p><strong>Téléphone :</strong> <a href="tel:1007" aria-label="Appeler le 1007">1007</a></p>
          <p><strong>Site web :</strong> <a href="https://www.ovh.com" target="_blank" rel="noopener noreferrer" aria-label="Visiter le site web d'OVH (s'ouvre dans un nouvel onglet)">www.ovh.com</a></p>
        </section>
        
        <section aria-labelledby="legal-rights">
          <h2 id="legal-rights" className={styles.sectionTitle}>Droits et protection des données</h2>
          <p>L'ensemble du contenu du site est protégé par les lois en vigueur sur la propriété intellectuelle et est la propriété exclusive d'Inès Kezadri.</p>
          <p>Toute reproduction, modification ou diffusion sans autorisation est interdite.</p>
          <p>Les données personnelles sont utilisées uniquement pour la gestion des demandes et des rendez-vous.</p>
          <p>Vous pouvez exercer vos droits en écrivant à : <a href="mailto:zahra@za-nails.fr" aria-label="Envoyer un email pour exercer vos droits">zahra@za-nails.fr</a></p>
        </section>
        
        <section aria-labelledby="cookies-disclaimer">
          <h2 id="cookies-disclaimer" className={styles.sectionTitle}>Cookies et responsabilité</h2>
          <p>Le site utilise des cookies pour améliorer l'expérience utilisateur. Vous pouvez désactiver les cookies via votre navigateur.</p>
          <p>Le site za.nails s'efforce de fournir des informations fiables, mais ne saurait être tenu responsable des erreurs ou omissions.</p>
        </section>
      </div>
    </main>
  );
};

export default MentionsLegales;