// import { Link } from "react-router-dom";
import RolesList from "../component/home/RolesList";
import styles from "../assets/css/homepage.module.css";

const HomePage = () => {
	//    fragment : balise sans nom (anonyme) = <> </>
	return (
		<>
			<RolesList />

			<section className="fond">
				<div className={styles.nailsart}>
					{/* utiliser / pour cibler le dossier public */}
					<img src="/img/nails-artist.png" alt="" />
					<h1>Bienvenue sur mon site !</h1>

					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
						sunt, suscipit libero repellendus mollitia numquam vitae ullam vel
						nemo culpa at necessitatibus explicabo, dolores autem consectetur
						animi adipisci eveniet natus!
					</p>
				</div>

				<section className={styles.imgcontainer}>
					<div className={styles.babyboomer2}>
						<img src="/img/babyboomer2.png" alt="" />
					</div>

					<div className={styles.cerise}>
						<img src="/img/cerise.png" alt="" />
					</div>

					<div className={styles.serpent}>
						<img src="/img/serpent.png" alt="" />
					</div>
				</section>
			</section>
		</>
	);
};

export default HomePage;
