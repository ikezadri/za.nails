import styles from "../assets/css/mentionslegales.module.css";

export const MentionsLegales = () => {
  return (
    <div className={styles.legalContainer}>
      <h1 className={styles.titre}>Mentions légales</h1>
      <p><strong>Nom du site :</strong> za.nails</p>
      <p><strong>Créatrice et éditrice du site :</strong> Inès Kezadri</p>
      <p><strong>Statut :</strong> Particulier</p>
      <p><strong>Email :</strong> contact@za-nails.fr</p>
      <p><strong>Responsable de la publication :</strong> Inès Kezadri</p>

      <p><strong>Nom commercial :</strong> Za Nails</p>
      <p><strong>Praticienne :</strong> Zahra Amari</p>
      <p><strong>Statut juridique :</strong> Auto-entrepreneur</p>
      <p><strong>SIRET :</strong> 123 456 789 00012</p>
      <p><strong>Adresse :</strong> 12 rue des Coquelicots, 75010 Paris, France</p>
      <p><strong>Téléphone :</strong> 06 12 34 56 78</p>
      <p><strong>Email :</strong> zahra@za-nails.fr</p>

      <p><strong>Hébergeur :</strong> OVH SAS</p>
      <p><strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France</p>
      <p><strong>Téléphone :</strong> 1007</p>
      <p><strong>Site web :</strong> www.ovh.com</p>

      <p>L’ensemble du contenu du site est protégé par les lois en vigueur sur la propriété intellectuelle et est la propriété exclusive d’Inès Kezadri.</p>
      <p>Toute reproduction, modification ou diffusion sans autorisation est interdite.</p>

      <p>Les données personnelles sont utilisées uniquement pour la gestion des demandes et des rendez-vous.</p>
      <p>Vous pouvez exercer vos droits en écrivant à : zahra@za-nails.fr</p>

      <p>Le site utilise des cookies pour améliorer l’expérience utilisateur. Vous pouvez désactiver les cookies via votre navigateur.</p>

      <p>Le site za.nails s’efforce de fournir des informations fiables, mais ne saurait être tenu responsable des erreurs ou omissions.</p>
    </div>
  );
};

export default MentionsLegales; 