// import { Link } from "react-router-dom";

import styles from "../assets/css/homepage.module.css";
import Notice from "../component/common/Notice";

const HomePage = () => {
	//    fragment : balise sans nom (anonyme) = <> </>
	return (
		<>
			<Notice />		

			<main>
				<section className={styles.nailsart}>
					<h1>Bienvenue sur mon site !</h1>
					<article className={styles.nailsart_article}>
					{/* utiliser / pour cibler le dossier public */}
						<img src="/img/nails-artist.png" alt="" />
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
									sunt, suscipit libero repellendus mollitia numquam vitae ullam vel
									nemo culpa at necessitatibus explicabo, dolores autem consectetur
									animi adipisci eveniet natus!
								</p>
					</article>
				</section>

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
			</main>
		</>
	);
};

export default HomePage;
