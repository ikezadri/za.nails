import { Link } from "react-router-dom";
import RolesList from "../component/home/RolesList";
import styles from "../assets/css/homepage.module.css"

const HomePage = () => {
	//    fragment : balise sans nom (anonyme) = <> </>
	return (
		<>
			<RolesList />

			<section className={styles.styliste}>
                {/* utiliser / pour cibler le dossier public */}
				<div className={styles.mujer}>
                <Link to={"/"}>
                    <img src="/img/reflexion.jpeg" alt="" />
                </Link>

				</div>
					<h1>Titre</h1>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, sunt, suscipit libero repellendus mollitia numquam vitae ullam vel nemo culpa at necessitatibus explicabo, dolores autem consectetur animi adipisci eveniet natus!</p>
            </section>

		<section className={styles.imgcontainer}>
			<div className={styles.gucci}>
                <Link to={"/"}>
                    <img src="/img/tenue-gucci2.png" alt="" />
                </Link>
			</div>

			<div className={styles.vert}>
				<Link to={"/"}>
                	<img src="/img/tenue-vert2.png" alt="" />
            	</Link>
			</div>

			<div className={styles.colorer}>
				<Link to={"/"}>
                	<img src="/img/tenues-colorer2.png" alt="" />
            	</Link>
			</div>
		</section>
		</>
		
	);
};

export default HomePage;
