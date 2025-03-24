import styles from "../assets/css/prestationpage.module.css"

const PrestationPage = () => {
	//    fragment : balise sans nom (anonyme) = <> </>
	return (
		<>
			<section className={styles.mariage}>
				<h1>Je sais pas quoi mettre pour l'instant</h1>
					<div className="paragraphe1">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
							sunt, suscipit libero repellendus mollitia numquam vitae ullam vel
							nemo culpa at necessitatibus explicabo, dolores autem consectetur
							animi adipisci eveniet natus!
						</p>
					</div>
						<div className="mariage">
							<img src="/img/mariage.jpg" alt="" />
						</div>
			</section>
		</>
	);
};

export default PrestationPage;
