import styles from "../assets/css/homepage.module.css";
import Notice from "../component/common/Notice";

const HomePage = () => {
	return (
		<>
			{/* Skip link (lien d’évitement pour les lecteurs d’écran et navigation clavier) */}
			<a href="#main-content" className={styles.skipLink}>
				Aller au contenu principal
			</a>

			<Notice />

			<main id="main-content">
				<section className={styles.nailsart}>
					<h1>Qu'est-ce que za.nails ?</h1>
					<article className={styles.nailsart_article}>
						<img src="/img/nails-artist.png" alt="Styliste ongulaire réalisant une manucure" />
						<p>
							Parce qu’elles sont le reflet discret de votre personnalité, vos mains méritent un soin tout particulier. Chaque geste que vous accomplissez, chaque poignée de main, chaque caresse raconte une histoire – la vôtre. Ici, nous vous invitons à entrer dans un univers où le raffinement rencontre le bien-être, où chaque détail est pensé pour sublimer votre beauté naturelle.
							Dans notre espace dédié, le soin des mains devient un véritable rituel. Loin du tumulte quotidien, vous serez accueilli(e) dans une ambiance douce et apaisante, propice à la détente et à la reconnexion avec soi-même. Nos experts prennent le temps d’écouter vos envies, d’observer la nature de votre peau, et de vous conseiller les soins les mieux adaptés à vos besoins.
							Des manucures classiques aux créations artistiques les plus audacieuses, en passant par des soins nourrissants en profondeur, nous mettons notre savoir-faire au service de votre élégance. Chaque prestation est réalisée avec passion, précision et un profond respect de votre confort.
						</p>
					</article>
				</section>

				<section className={styles.titre2}>
					<h2>Voici nos prestations</h2>
				</section>

				<section className={styles.imgcontainer}>
					<div className={styles.babyboomer2}>
						<img src="/img/babyboomer2.png" alt="Exemple de manucure style Babyboomer" />
					</div>

					<div className={styles.cerise}>
						<img src="/img/cerise.png" alt="Design de manucure avec motif cerise" />
					</div>

					<div className={styles.serpent}>
						<img src="/img/serpent.png" alt="Design de manucure avec motif serpent" />
					</div>
				</section>
			</main>
		</>
	);
};

export default HomePage;