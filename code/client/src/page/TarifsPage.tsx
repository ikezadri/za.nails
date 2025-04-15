import { Link } from "react-router-dom";
import styles from "../assets/css/tarifspage.module.css";

const TarifsPage = () => {
  return (
    <main className={styles.tarifsPage}>
      <h1 className={styles.pageTitle}>Nos Tarifs</h1>

      <section className={styles.grid}>
        <figure className={styles.card}>
          <img
            src="/img/serpent.png"
            alt="Pose capsule ou gel"
            className={styles.image}
          />
          <figcaption className={styles.figcaption}>
            <h2>Pose capsule ou gel</h2>
            <p>
              Envie de longueur et de style ? Optez pour une pose de capsules
              ou de gel pour des ongles résistants, élégants et parfaitement
              sculptés. Un résultat durable et soigné, idéal pour toutes les
              occasions. Forme, longueur et finition personnalisées selon vos
              envies !
            </p>
            <div className={styles.info}>
              <span className={styles.price}>50 €</span>
              <Link to="/reservation" className={styles.link}>
                Réserver
              </Link>
            </div>
          </figcaption>
        </figure>

        <figure className={styles.card}>
          <img
            src="/img/soins-ongles.jpg"
            alt="Soin des mains avec gommage, massage et masque"
            className={styles.image}
          />
          <figcaption className={styles.figcaption}>
            <h2>Soins des mains</h2>
            <p>
              Offrez à vos mains un moment de douceur. Ce soin complet hydrate,
              nourrit et revitalise la peau pour des mains douces, nettes et
              éclatantes. Gommage, massage et masque hydratant pour une peau
              sublimée.
            </p>
            <div className={styles.info}>
              <span className={styles.price}>25 €</span>
              <Link to="/reservation" className={styles.link}>
                Réserver
              </Link>
            </div>
          </figcaption>
        </figure>

        <figure className={styles.card}>
          <img
            src="/img/cerise.png"
            alt="Manucure professionnelle avec pose de vernis"
            className={styles.image}
          />
          <figcaption className={styles.figcaption}>
            <h2>Manucure</h2>
            <p>
              Pour des ongles toujours impeccables, une manucure professionnelle
              est la clé. Limage, cuticules, polissage et pose de vernis : vos
              ongles sont entre de bonnes mains ! Large choix de couleurs et
              finitions disponibles.
            </p>
            <div className={styles.info}>
              <span className={styles.price}>100 €</span>
              <Link to="/reservation" className={styles.link}>
                Réserver
              </Link>
            </div>
          </figcaption>
        </figure>
      </section>
    </main>
  );
};

export default TarifsPage;