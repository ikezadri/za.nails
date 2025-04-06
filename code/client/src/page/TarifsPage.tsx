import { Link } from "react-router-dom"
import styles from "../assets/css/tarifspage.module.css"

const TarifsPage = () => {
	//    fragment : balise sans nom (anonyme) = <> </>
	return (
		<>
			<section className={styles.prix}>
        		<div className={styles.premier}>
        			<h1>Pose capsule ou gel : 50 euros</h1>
          				<p>
							Envie de longueur et de style ? Optez pour une pose de capsules ou de gel pour des ongles résistants, élégants et parfaitement sculptés. Un résultat durable et soigné, idéal pour toutes les occasions.
					  		Forme, longueur et finition personnalisées selon vos envies !
						</p>
          					<div className={styles.lien}>
         	 					<Link to={'/reservation'}>Réserver</Link>
          					</div>
        		</div>

        		<div className={styles.deuxieme}>
        			<h1>Soins des mains : 25 euros</h1>
          				<p>
						  Offrez à vos mains un moment de douceur. Ce soin complet hydrate, nourrit et revitalise la peau pour des mains douces, nettes et éclatantes.
						  Gommage, massage et masque hydratant pour une peau sublimée. 
						</p>
          					<div className={styles.lien}>
          						<Link to={'/reservation'}>Réserver</Link>
          					</div>
        		</div>

        		<div className={styles.troisieme}>
        			<h1>Manucure : 100 euros</h1>
          				<p>
						  Pour des ongles toujours impeccables, une manucure professionnelle est la clé. Limage, cuticules, polissage et pose de vernis : vos ongles sont entre de bonnes mains !
						  Large choix de couleurs et finitions disponibles. 
						</p>
          					<div className={styles.lien}>
          						<Link to={'/reservation'}>Réserver</Link>
          					</div>
        		</div>
			</section>
		</>
	);
};

export default TarifsPage;
