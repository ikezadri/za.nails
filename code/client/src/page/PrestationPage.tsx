import styles from "../assets/css/prestationpage.module.css"

const PrestationPage = () => {
	//    fragment : balise sans nom (anonyme) = <> </>
	return (
		<>
			<section className={styles.onglem}>
						<h1>Je sais pas quoi mettre pour l'instant</h1>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
								sunt, suscipit liberoLorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
								sunt, suscipit liberoLorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
								sunt, suscipit liberoLorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
							</p>
								<img src="/img/mariage.jpg" alt="" />
			</section>

			<section className={styles.bboomer1}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
								sunt, suscipit liberoLorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
								sunt, suscipit liberoLorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
								
							</p>
								<img src="/img/babyboomer1.jpg" alt="" />
			</section>

			<section className={styles.fleur}>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
								sunt, suscipit liberoLorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
								sunt, suscipit liberoLorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
							</p>
								<img src="/img/fleur.jpg" alt="" />
			</section>
		</>
	);
};

export default PrestationPage;
