import styles from "../assets/css/prestationpage.module.css"

const PrestationPage = () => {
	//    fragment : balise sans nom (anonyme) = <> </>
	return (
		<>
		<main>
			<section className={styles.onglem}>
						<h1>Exprimez votre style jusqu’au bout des ongles !</h1>
						<article className={styles.ongle_article}>
							<p>
							Sublimez vos mains avec cette pose capsule élégante, alliant la solidité du gel à la finesse d’une French blanche revisitée. 
								<br />
							Les pointes sont ornées de motifs artistiques délicats pour un rendu sophistiqué, moderne et ultra-tendance.
								<br />
							Idéale pour les événements spéciaux comme pour le quotidien, cette pose est le reflet d’un style affirmé et soigné jusque dans les moindres détails.
							</p>
								<img src="/img/mariage.jpg" alt="" />
						</article>
			</section>

			<section className={styles.bboomer1}>
					<article className={styles.bbomer_article}>
							<img src="/img/babyboomer1.jpg" alt="" />
								<p>
									Ongles French Manucure Classique
										<br />
									Ces ongles élégants et intemporels arborent une finition soignée et raffinée. 
										<br />
									La base rose pâle subtilement translucide met en valeur des extrémités blanches parfaitement dessinées, offrant un look naturel et sophistiqué. 
										<br />
									Idéal pour toutes les occasions, ce style classique s'adapte aussi bien à un événement spécial qu'à un usage quotidien.
								</p>
					</article>
			</section>

			<section className={styles.fleur}>
					<article className={styles.fleur_article}>
							<p>
								Ongles élégants et fleuris
									<br />
								Découvrez cette sublime pose d’ongles réalisée avec soin, parfaite pour apporter une touche de douceur et de féminité à vos mains.
									<br /> 
								Les ongles sont sublimés par un vernis pastel lilas, accompagné d’un délicat motif floral peint à la main, idéal pour un look raffiné et printanier.
							</p>
								<img src="/img/fleur.jpg" alt="" />
					</article>
			</section>
		</main>
		</>
		
	);
};

export default PrestationPage;
