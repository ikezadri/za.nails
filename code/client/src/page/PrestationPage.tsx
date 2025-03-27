import styles from "../assets/css/prestationpage.module.css"

const PrestationPage = () => {
	//    fragment : balise sans nom (anonyme) = <> </>
	return (
		<>
			<section>
					<div className={styles.onglem}>
						<h1>Je sais pas quoi mettre pour l'instant</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
								sunt, suscipit libero 
							</p>
								<img src="/img/mariage.jpg" alt="" />
					</div>
			</section>

			<section>
					<div className={styles.bboomer1}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
								sunt, suscipit libero 
							</p>
								<img src="/img/babyboomer1.jpg" alt="" />
					</div>
			</section>

			<section>
					<div className={styles.fleur}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
								sunt, suscipit libero 
							</p>
								<img src="/img/fleur.jpg" alt="" />
					</div>
			</section>
		</>
	);
};

export default PrestationPage;
